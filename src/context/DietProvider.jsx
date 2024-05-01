import { createContext, useContext, useEffect, useReducer } from "react"

const dietDayObj = {
    day: "",
    meals: [
        {
            mealId: "1",
            mealname: "",
            mealtype: "",
            mealnote: "",
            foods: [],
            mealmacros: {
                fats: 0,
                calories: 0,
                proteins: 0,
                carbs: 0,
            },
        }
    ],
    plantype: "My plan",
    daymacros: {
        fats: 0,
        carbs: 0,
        proteins: 0,
        calories: 0,
    }
}

const dietMealObj = {
    mealId: "",
    mealname: "",
    mealtype: "",
    mealnote: "",
    foods: [],
    mealmacros: {
        fats: 0,
        calories: 0,
        proteins: 0,
        carbs: 0,
    },
}

const intialState = {
    planName: "",
    plantype: "My plan",
    description: "",
    planmacros: {
        fats: 0,
        calories: 0,
        proteins: 0,
        carbs: 0,
    },
    days: [
        {
            day: "1",
            meals: [
                {
                    mealId: "1",
                    mealname: "",
                    mealtype: "",
                    mealnote: "",
                    foods: [],
                    mealmacros: {
                        fats: 0,
                        calories: 0,
                        proteins: 0,
                        carbs: 0,
                    },
                }
            ],
            daymacros: {
                fats: 0,
                carbs: 0,
                proteins: 0,
                calories: 0,
            },
        }
    ],
}

function reducer(state, action) {
    switch (action.type) {
        case 'diet/startPrivatePlan':
            return { ...intialState }
        case 'diet/planInfo':
            return { ...state, ...action.payload }
        case 'diet/calcPlanMacros':
            return { ...state, planmacros: action.payload }
        case 'diet/addDay':
            if (state.days.length >= 7) return { ...state, error: "Cannot add more than 7 days." };
            const newDayNumber = [...Array(8).keys()].slice(1).find(n => !state.days.find(d => parseInt(d.day) === n)) || 8;
            if (newDayNumber <= 7)
                return {
                    ...state,
                    days: [...state.days, { ...dietDayObj, day: newDayNumber.toString() }],
                };
            return state;
        case 'diet/deleteDay':
            if (state.days.length <= 1) return { ...state, error: "Cannot delete the only remaining day." };
            return {
                ...state,
                error: "",
                days: state.days.length < 2 ? [...state.days] : state.days.filter(day => day.day !== action.payload).map((day, index) => ({ ...day, day: (index + 1).toString() })),
            }
        case 'diet/calcDayMacros':
            return {
                ...state,
                days: state.days.map(day => {
                    if (day.day === action.payload) {
                        // Calculate the total macros for the day
                        const dayMacros = day.meals.reduce((totals, meal) => {
                            totals.fats += meal.mealmacros.fats;
                            totals.carbs += meal.mealmacros.carbs;
                            totals.proteins += meal.mealmacros.proteins;
                            totals.calories += meal.mealmacros.calories;
                            return totals;
                        }, { fats: 0, carbs: 0, proteins: 0, calories: 0 });

                        // Update the daymacros for the day
                        return {
                            ...day,
                            daymacros: dayMacros
                        };
                    }
                    return day;
                })
            };
        case 'diet/addMeal':
            return {
                ...state,
                days: state.days.map(day => day.day === action.payload ? { ...day, meals: [...day.meals, { ...dietMealObj, mealId: `${day.meals.length + 1}` }] } : day),
            }
        case 'diet/deleteMeal':
            return {
                ...state,
                days: state.days.map(day =>
                    day.day === action.payload.day ?
                        day.meals.length > 1 ?
                            { ...day, meals: day.meals.filter(meal => meal.mealId !== action.payload.mealId) } : { ...day, error: "Each day must have at least one meal." }
                        : day
                ),
            };
        case 'diet/mealInfo':
            return {
                ...state,
                days: state.days.map(day =>
                    day.day === action.payload.day ? {
                        ...day,
                        meals: day.meals.map(meal =>
                            meal.mealId === action.payload.mealId ?
                                { ...meal, mealname: action.payload.mealname, mealtype: action.payload.mealtype, mealnote: action.payload.mealnote }
                                : meal
                        )
                    } : day
                ),
            };
        case 'diet/calcMealMacros':
            return {
                ...state,
                days: state.days.map(day => {
                    if (day.day === action.payload.day) {
                        return {
                            ...day,
                            meals: day.meals.map(meal => {
                                if (meal.mealId === action.payload.mealId) {
                                    // Calculate the total macros from the foods array
                                    function calcMealMacros() {
                                        const calcFats = meal.foods.reduce((acc, cur) => acc + cur.macros.fats, 0) ?? 0;
                                        const calcCarbs = meal.foods.reduce((acc, cur) => acc + cur.macros.carbs, 0) ?? 0;
                                        const calcProteins = meal.foods.reduce((acc, cur) => acc + cur.macros.proteins, 0) ?? 0;
                                        const calcCalories = meal.foods.reduce((acc, cur) => acc + cur.macros.calories, 0) ?? 0;
                                        return { fats: calcFats, carbs: calcCarbs, proteins: calcProteins, calories: calcCalories }
                                    }
                                    return {
                                        ...meal,
                                        mealmacros: calcMealMacros()
                                    };
                                }
                                return meal;
                            })
                        };
                    }
                    return day;
                })
            };
        case 'diet/addFood':
            return {
                ...state,
                days: state.days.map(day =>
                    day.day === action.payload.day ? {
                        ...day,
                        meals: day.meals.map(meal =>
                            meal.mealId === action.payload.mealId ? {
                                ...meal,
                                foods: [...meal.foods, action.payload.food]
                            } : meal
                        )
                    } : day
                ),
            };
        case 'diet/deleteFood':
            return {
                ...state,
                days: state.days.map(day =>
                    day.day === action.payload.day ? {
                        ...day,
                        meals: day.meals.map(meal =>
                            meal.mealId === action.payload.mealId ? {
                                ...meal,
                                foods: meal.foods.filter(food => food.food !== action.payload.foodId)
                            } : meal
                        )
                    } : day
                ),
            };
        case 'diet/updateFoodMacros':
            return {
                ...state,
                days: state.days.map(day =>
                    day.day === action.payload.day ? {
                        ...day,
                        meals: day.meals.map(meal =>
                            meal.mealId === action.payload.mealId ? {
                                ...meal,
                                foods: meal.foods.map(food => {
                                    if (food.food === action.payload.foodId || food.food._id === action.payload.foodId) {
                                        food.amount = action.payload.per
                                        food.macros = action.payload.macros
                                    }
                                    return food;
                                })
                            } : meal
                        )
                    } : day
                ),
            };
        default:
            throw new Error('Invalid Action Type');
    }
}

const DietContext = createContext()

function DietProvider({ children }) {
    const [state, dispatch] = useReducer(reducer, intialState);
    const { days } = state

    useEffect(function () {
        function calcPlanMacros() {
            return days.reduce((acc, day) => {
                return {
                    fats: acc.fats + day.daymacros.fats,
                    carbs: acc.carbs + day.daymacros.carbs,
                    proteins: acc.proteins + day.daymacros.proteins,
                    calories: acc.calories + day.daymacros.calories
                };
            }, { fats: 0, carbs: 0, proteins: 0, calories: 0 });
        }
        dispatch({ type: "diet/calcPlanMacros", payload: calcPlanMacros() })
    }, [days])

    return (
        <DietContext.Provider value={{ ...state, dispatch }}>
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