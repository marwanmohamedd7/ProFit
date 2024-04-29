import { createContext, useContext, useEffect, useReducer } from "react"

const intialState = {
    days: [
        {
            day: 1,
            foods: [],
            mealMacros: {
                fats: 0,
                calories: 0,
                proteins: 0,
                carbs: 0,
            },
        },
    ],
    isLoading: false,
    error: "",
}

function reducer(state, action) {
    switch (action.type) {
        case 'diet/start':
            return { ...state, isLoading: false, days: [{ day: 1 }], error: "" }
        case 'diet/addDay':
            return { ...state, isLoading: false, days: state.days.length > 6 ? [...state.days] : [...state.days, { day: state.days.length + 1 }], error: "" }
        case 'diet/deleteDay':
            return { ...state, isLoading: false, days: state.days.length < 2 ? [...state.days] : state.days.filter(day => day.day !== action.payload), error: "" }
        default:
            throw new Error('Invalid Action Type');
    }
}

const DietContext = createContext()

function DietProvider({ children }) {
    const [{ days }, dispatch] = useReducer(reducer, intialState);
    useEffect(function () {
        // console.log(days)
    }, [days])
    return (
        <DietContext.Provider value={{ days, dispatch }}>
            {children}
        </DietContext.Provider>
    )
}

function useDietProvider() {
    const context = useContext(DietContext);
    if (context === undefined) throw new Error("Current Diet provider has been used outside the context")
    return context
}

export { DietProvider, useDietProvider }
