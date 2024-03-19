// import { createContext, useContext, useEffect, useReducer, } from "react"

// const ProfileContext = createContext()

// const initialValue = {
//     signup: {
//         firstName: "",
//         lastName: "",
//         email_address: "",
//         password: "",
//     },
//     personalInfo: {
//         phone_number: "",
//         national_ID: "",
//         country: "",
//         city: "",
//         state: "",
//         birth_date: "",
//         description: "",
//         gender: "",
//         profile_image: "",
//     },
//     professionalCred: {
//         years: "",
//         specialization: {},
//         qualification_imgs: [],
//         transformations: [],
//         social_media: {},
//     },
//     packages: [
//         {
//             package_name: "",
//             type: "",
//             price: 0,
//             duration: "",
//             subscribers_limit: "",
//             active: false,
//         }
//     ],
// }

// // Function to get data from local storage or return initial value
// function getInitialProfileData() {
//     const storedData = localStorage.getItem('profileData');
//     if (storedData) {
//         return JSON.parse(storedData);
//     }
//     return initialValue;
// };

// function reducer(state, action) {
//     switch (action.type) {
//         case 'signup/setData': return { ...state, signup: { ...state.signup, ...action.payload } }
//         case 'profile/personalInfo': return { ...state, personalInfo: { ...state.personalInfo, ...action.payload } }
//         case 'profile/professionalCred/qualifactions/img': return { ...state, professionalCred: { ...state.professionalCred, qualification_imgs: [...state.professionalCred?.qualification_imgs, action.payload] } }
//         case 'profile/professionalCred/transformation/img': return { ...state, professionalCred: { ...state.professionalCred, transformations: [...state.professionalCred?.transformations, { ...action.payload }] } }
//         default: return state;
//     }
// }

// function CreatingprofileProvider({ children }) {
//     const [state, dispatch] = useReducer(reducer, getInitialProfileData())

//     // Effect to update local storage when state change
//     useEffect(() => {
//         console.log(state)
//         localStorage.setItem('profileData', JSON.stringify(state))
//     }, [state]);

//     return (
//         <ProfileContext.Provider value={
//             {
//                 state,
//                 dispatch
//             }
//         }>
//             {children}
//         </ProfileContext.Provider>
//     )
// }

// function useProfile() {
//     const context = useContext(ProfileContext)
//     if (!context) throw new Error("The context has been used outside the provider")
//     return context;
// }

// export { CreatingprofileProvider, useProfile }
