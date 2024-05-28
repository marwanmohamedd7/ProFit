import { createContext, useContext, useEffect, useReducer } from "react"

const dietDayObj = {
    day: "",
    mealsCount: 2,
    meals: [
        {
            mealId: 'id_' + Math.random().toString(36).substr(2, 9) + Date.now().toString(36),
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
        },
        {
            mealId: 'id_' + Math.random().toString(36).substr(2, 9) + Date.now().toString(36),
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
        },
    ],
    daymacros: {
        fats: 0,
        carbs: 0,
        proteins: 0,
        calories: 0,
    }
}

const dietMealObj = {
    mealId: 'id_' + Math.random().toString(36).substr(2, 9) + Date.now().toString(36),
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
    plantype: "",
    dietType: "",
    description: "",
    daysCount: 0,
    planmacros: {
        fats: 0,
        calories: 0,
        proteins: 0,
        carbs: 0,
    },
    days: [
        {
            day: "1",
            mealsCount: 2,
            meals: [
                {
                    mealId: 'id_' + Math.random().toString(36).substr(2, 9) + Date.now().toString(36),
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
                },
                {
                    mealId: 'id_' + Math.random().toString(36).substr(2, 9) + Date.now().toString(36),
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
    error: "",
}

function reducer(state, action) {
    let planType;
    if (action.type === 'diet/startMyDietPlan' || action.type === 'diet/updateMyDietPlan') planType = "My plan"
    if (action.type === 'diet/startFreeDietPlan' || action.type === 'diet/updateFreeDietPlan') planType = "Free plan"
    if (action.type === 'diet/startCustomizedDietPlan' || action.type === 'diet/updateCustomizedDietPlan') planType = "Customized plan"
    switch (action.type) {
        case 'diet/start':
            return { ...state }
        case 'diet/startMyDietPlan':
        case 'diet/startFreeDietPlan':
        case 'diet/startCustomizedDietPlan':
            return { ...intialState, plantype: planType }
        case 'diet/loadDietPlan':
        case 'diet/updateMyDietPlan':
        case 'diet/updateFreeDietPlan':
        case 'diet/updateCustomizedDietPlan':
            return { ...state, ...action.payload, plantype: planType ?? action.payload.plantype, days: action.payload.days.map(day => ({ ...day, meals: day.meals.map(meal => ({ ...meal, mealId: meal._id })) })) }
        case 'diet/setCustomizedDietPlanData':
            return { ...intialState, ...action.payload }
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
                days: state.days.length < 2 ? [...state.days] : state.days.filter(day => day.day !== action.payload).map((day, index) => ({ ...day, day: (index + 1).toString() })),
            }
        case 'diet/duplicateDay':
            if (state.days.length >= 7) return { ...state, error: "Cannot add more than 7 days." };
            const originalDayIndex = state.days.findIndex(day => day.day === action.payload);
            if (originalDayIndex === -1) return state;
            const duplicatedDay = { ...state.days[originalDayIndex], day: (originalDayIndex + 2).toString() };
            const updatedDays = [
                ...state.days.slice(0, originalDayIndex + 1),
                duplicatedDay,
                ...state.days.slice(originalDayIndex + 1)
            ].map((day, index) => ({ ...day, day: (index + 1).toString() }));
            return {
                ...state,
                days: updatedDays,
            };
        case 'diet/resetDay':
            return {
                ...state,
                days: state.days.map(day => {
                    if (day.day === action.payload) {
                        // Reset each meal but keep the mealId
                        return {
                            ...day,
                            meals: day.meals.map(meal => ({
                                ...dietMealObj, // This will reset all meal fields to default values
                                mealId: meal.mealId // Keep the original mealId
                            })),
                            daymacros: { // Reset the day macros
                                fats: 0,
                                carbs: 0,
                                proteins: 0,
                                calories: 0
                            }
                        };
                    }
                    return day;
                })
            };
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
                days: state.days.map(day => day.day === action.payload ? { ...day, mealsCount: day.meals.length + 1, meals: [...day.meals, { ...dietMealObj, mealId: 'id_' + Math.random().toString(36).substr(2, 9) + Date.now().toString(36) }] } : day),
            }
        case 'diet/loadMeal':
            return {
                ...state,
                days: state.days.map(day => {
                    if (day.day === action.payload.day) {
                        // Create a new array with updated meal and return the updated day object
                        return {
                            ...day,
                            meals: day.meals.map(meal =>
                                meal.mealId === action.payload.mealId ? { ...meal, ...action.payload.meal } : meal
                            )
                        };
                    }
                    return day;
                }),
            };
        case 'diet/deleteMeal':
            return {
                ...state,
                days: state.days.map(day =>
                    day.day === action.payload.day ?
                        day.meals.length > 2 ?
                            { ...day, mealsCount: day.meals.length - 1, meals: day.meals.filter(meal => meal.mealId !== action.payload.mealId) } : { ...day, error: "Each day must have at least one meal." }
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
        case 'diet/submit':
            // Check if the plantype is not "My plan" and there are not exactly 7 days
            if (state.plantype !== "My plan" && state.days.length !== 7) {
                return { ...state, error: "Submission requires exactly 7 days." };
            }

            if (state.days.length < 1) {
                return { ...state, error: "Please add at least one day to your diet plan." };
            }

            const isDataComplete = state.days.every(day =>
                day.meals.length >= 2 && day.meals.every(meal =>
                    meal.mealname && meal.mealtype && meal.foods.length > 0
                )
            );

            if (!isDataComplete) {
                return { ...state, error: "Please complete all required fields for each meal." };
            }
            const submissionData = {
                ...state,
                plantype: state.plantype,
                daysCount: state.days.length,
                days: state.days.map(day => ({
                    ...day,
                    meals: day.meals.map(({ mealId, ...meal }) => meal)
                }))
            };
            // Normally, here you would dispatch this data to a server or another state management area
            // console.log("Data ready for submission:", submissionData);
            return { ...state, submittedData: submissionData, error: "" };
        case 'diet/endSession':
            return { ...intialState }
        default:
            throw new Error('Invalid Action Type');
    }
}

const DietContext = createContext()

function DietProvider({ children }) {
    const [state, dispatch] = useReducer(reducer, intialState);
    const { days } = state;

    useEffect(function () {
        // console.log(state)
        function calcPlanMacros() {
            // Sum the macros for all days
            const totalMacros = days.reduce((acc, day) => {
                return {
                    fats: acc.fats + day.daymacros.fats,
                    carbs: acc.carbs + day.daymacros.carbs,
                    proteins: acc.proteins + day.daymacros.proteins,
                    calories: acc.calories + day.daymacros.calories
                };
            }, { fats: 0, carbs: 0, proteins: 0, calories: 0 });

            // Calculate the average by dividing the totals by the number of days
            const numberOfDays = days.length;  // Make sure this is always 7 or handle cases where it might not be
            return {
                fats: totalMacros.fats / numberOfDays,
                carbs: totalMacros.carbs / numberOfDays,
                proteins: totalMacros.proteins / numberOfDays,
                calories: totalMacros.calories / numberOfDays
            };
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
    if (context === undefined) throw new Error("useDietProvider must be used within a DietProvider")
    return context
}

export { DietProvider, useDietProvider }
