import { createContext, useContext, useEffect, useReducer } from "react"

const intialState = {
    mealname: "",
    mealtype: "",
    mealnote: "",
    foods: [],
    mealMacros: {
        fats: 0,
        calories: 0,
        proteins: 0,
        carbs: 0,
    },
    error: "",
}

function reducer(state, action) {
    const storedData = localStorage.getItem("trainerMeal")
    function updateFoodMacros() {
        const foods = state.foods.map(food => {
            if (food.food === action.payload.id || food.food._id === action.payload.id) {
                food.amount = action.payload.per
                food.macros = action.payload.macros
            }
            return food;
        })
        return foods
    }
    function saveSessionData(data) {
        localStorage.setItem("trainerMeal", JSON.stringify({ ...JSON.parse(storedData), ...data }))
        return data
    }
    console.log({ ...JSON.parse(storedData) })
    switch (action.type) {
        case 'meal/startSession':
            return storedData ? { ...state, ...JSON.parse(storedData) } : saveSessionData({ ...intialState })
        case 'meal/calcMealMacros':
            saveSessionData({ mealMacros: action.payload })
            return { ...state, mealMacros: action.payload }
        case 'meal/updateFoodMacros':
            return { ...state, foods: updateFoodMacros() }
        case 'meal/mealInfo':
            saveSessionData({ mealname: action.payload.mealName, mealtype: action.payload.mealType, mealnote: action.payload.mealNote, })
            return { ...state, mealname: action.payload.mealName, mealtype: action.payload.mealType, mealnote: action.payload.mealNote, }
        case 'meal/addFood':
            saveSessionData({ foods: [...state.foods, action.payload] })
            return { ...state, foods: [...state.foods, action.payload] }
        case 'meal/updateMeal':
            saveSessionData({ foods: action.payload })
            return { ...state, foods: action.payload }
        case 'meal/deletedFood':
            return { ...state, foods: state.foods.filter(food => food.food._id ? food.food._id !== action.payload : food.food !== action.payload) }
        case 'meal/endSession':
            localStorage.removeItem("trainerMeal")
            return { ...intialState }
        case 'rejected':
            return { ...state, error: action.payload }
        default:
            throw new Error('Invalid Action Type');
    }
}

const MealContext = createContext()

function MealProvider({ children }) {
    const [{ foods, mealMacros, error }, dispatch] = useReducer(reducer, intialState);

    useEffect(function () {
        function calcMealMacros() {
            const calcFats = foods.reduce((acc, cur) => acc + cur.macros.fats, 0) ?? 0;
            const calcCarbs = foods.reduce((acc, cur) => acc + cur.macros.carbs, 0) ?? 0;
            const calcProteins = foods.reduce((acc, cur) => acc + cur.macros.proteins, 0) ?? 0;
            const calcCalories = foods.reduce((acc, cur) => acc + cur.macros.calories, 0) ?? 0;
            return { fats: calcFats, carbs: calcCarbs, proteins: calcProteins, calories: calcCalories }
        }
        dispatch({ type: "meal/calcMealMacros", payload: calcMealMacros() })
    }, [foods])

    return (
        <MealContext.Provider value={{
            foods,
            mealMacros,
            error,
            dispatch
        }}>
            {children}
        </MealContext.Provider>
    )
}

function useMealProvider() {
    const context = useContext(MealContext);
    if (context === undefined) throw new Error("Current Meal provider has been used outside the context")
    return context
}

export { MealProvider, useMealProvider }
