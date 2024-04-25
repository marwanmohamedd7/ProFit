import { createContext, useCallback, useContext, useEffect, useReducer, useState } from "react"
import toast from "react-hot-toast"

const intialState = {
    foods: [
        // {
        //     foodImage: "public/chicken-breast.jpg",
        //     foodname: "beed",
        //     amount: 100,
        //     proteins: 2,
        //     calories: 223,
        //     fats: 3,
        //     carbs: 4,
        //     category: "chicken",
        //     servingUnit: "gram",
        // },
        // {
        //     foodImage: "public/chicken-breast.jpg",
        //     foodname: "fish",
        //     amount: 100,
        //     proteins: 2,
        //     calories: 223,
        //     fats: 5,
        //     carbs: 4,
        //     category: "chicken",
        //     servingUnit: "gram",
        // },
        // {
        //     foodImage: "public/chicken-breast.jpg",
        //     amount: 100,
        //     foodname: "chicken",
        //     proteins: 2,
        //     calories: 223,
        //     fats: 2,
        //     carbs: 4,
        //     category: "chicken",
        //     servingUnit: "gram",
        // },
    ],
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
            if (food._id === action.payload.id) {
                food.per = action.payload.per
                food.macros = action.payload.macros
            }
            return food;
        })
        return foods
    }
    switch (action.type) {
        case 'loading':
            return { ...state, isLoading: true }
        case 'food/calcMacros':
            return { ...state, isLoading: false, totalMacros: action.payload }
        case 'food/added':
            return { ...state, isLoading: false, foods: [...state.foods, action.payload] }
        case 'food/update':
            return { ...state, isLoading: false, foods: updateFoodMacros() }
        case 'food/deleted':
            return { ...state, isLoading: false, foods: state.foods.filter(food => food._id !== action.payload) }
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
