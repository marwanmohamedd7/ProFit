import { createContext, useContext, useEffect, useReducer } from "react"

const initialState = {
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
    switch (action.type) {
        case 'meal/startSession':
        case 'meal/endSession':
            return { ...initialState };

        case 'meal/calcMealMacros':
            const { foods } = state;
            const mealMacros = foods.reduce((totals, food) => ({
                fats: totals.fats + food.macros.fats,
                carbs: totals.carbs + food.macros.carbs,
                proteins: totals.proteins + food.macros.proteins,
                calories: totals.calories + food.macros.calories,
            }), { fats: 0, carbs: 0, proteins: 0, calories: 0 });
            return { ...state, mealMacros };

        case 'meal/updateFoodMacros':
            const updatedFoods = state.foods.map(food =>
                (food.food === action.payload.foodId || food.food._id === action.payload.foodId) ?
                    { ...food, amount: action.payload.per, macros: action.payload.macros } : food
            );
            return { ...state, foods: updatedFoods };

        case 'meal/mealInfo':
            return { ...state, ...action.payload };

        case 'meal/updateMeal':
            return { ...state, foods: action.payload }

        case 'meal/addFood':
            return { ...state, foods: [...state.foods, action.payload] };

        case 'meal/deleteFood':
            return { ...state, foods: state.foods.filter(food => food.food !== action.payload && food.food._id !== action.payload) };

        case 'rejected':
            return { ...state, error: action.payload };

        default:
            throw new Error('Invalid Action Type');
    }
}

const MealContext = createContext()

function MealProvider({ children }) {
    const [state, dispatch] = useReducer(reducer, initialState);

    useEffect(() => {
        if (state.foods.length > 0) {
            dispatch({ type: 'meal/calcMealMacros' });
        }
    }, [state.foods]);

    return (
        <MealContext.Provider value={{ ...state, dispatch }}>
            {children}
        </MealContext.Provider>
    )
}

function useMealProvider() {
    const context = useContext(MealContext);
    if (context === undefined) throw new Error("useMealProvider must be used within a MealProvider")
    return context
}

export { MealProvider, useMealProvider }
