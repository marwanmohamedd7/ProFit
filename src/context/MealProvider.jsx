import { createContext, useContext, useEffect, useReducer } from "react"

const intialState = {
    foods: [],
    totalMacros: {
        fats: 0,
        calories: 0,
        proteins: 0,
        carbs: 0,
    },
    isLoading: false,
    error: "",
}

function reducer(state, action) {
    function updateFoodMacros() {
        const foods = state.foods.map(food => {
            if (food.food === action.payload.id) {
                food.amount = action.payload.per
                food.macros = action.payload.macros
            }
            return food;
        })
        return foods
    }
    switch (action.type) {
        case 'food/start':
            return { ...state, isLoading: false, foods: [], error: "" }
        case 'food/calcMacros':
            return { ...state, isLoading: false, totalMacros: action.payload }
        case 'food/updateMacros':
            return { ...state, isLoading: false, foods: updateFoodMacros() }
        case 'food/added':
            return { ...state, isLoading: false, foods: [...state.foods, action.payload] }
        case 'food/update':
            return { ...state, isLoading: false, foods: action.payload }
        case 'food/deleted':
            return { ...state, isLoading: false, foods: state.foods.filter(food => food.food !== action.payload) }
        case 'rejected':
            return { ...state, isLoading: false, error: action.payload }
        default:
            throw new Error('Invalid Action Type');
    }
}

const MealContext = createContext()

function MealProvider({ children }) {
    // const [state, dispatch] = useReducer(reducer, intialState);
    const [{ foods, totalMacros, isLoading, error }, dispatch] = useReducer(reducer, intialState);

    useEffect(function () {
        function calctotalMacros() {
            const calcFats = foods.reduce((acc, cur) => acc + cur.macros.fats, 0) ?? 0;
            const calcCarbs = foods.reduce((acc, cur) => acc + cur.macros.carbs, 0) ?? 0;
            const calcProteins = foods.reduce((acc, cur) => acc + cur.macros.proteins, 0) ?? 0;
            const calcCalories = foods.reduce((acc, cur) => acc + cur.macros.calories, 0) ?? 0;
            return { fats: calcFats, carbs: calcCarbs, proteins: calcProteins, calories: calcCalories }
        }
        dispatch({ type: "food/calcMacros", payload: calctotalMacros() })
    }, [foods])

    return (
        <MealContext.Provider value={{
            foods,
            totalMacros,
            isLoading,
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
