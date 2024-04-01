import { createContext, useContext, useState } from "react"

const UserContext = createContext()

function UserProvider({ children }) {
    const [userId, setUserId] = useState(null)
    const [userRole, setUserRole] = useState(null)
    const [userToken, setUserToken] = useState(null)
    return (
        <UserContext.Provider value={{ userId, userRole, userToken, setUserId, setUserRole, setUserToken }}>
            {children}
        </UserContext.Provider>
    )
}

function useCurrentUser() {
    const context = useContext(UserContext);
    if (context === undefined) throw new Error("Current User provider has been used outside the context")
    return context;
}

export { UserProvider, useCurrentUser }
