import { createContext, useContext, useState } from "react"

const MainNavContext = createContext()

function MainNavProvider({ children }) {
    const [isOpen, setIsOpen] = useState(true);
    return (
        <MainNavContext.Provider value={{ isOpen, setIsOpen }}>
            {children}
        </MainNavContext.Provider>
    )
}

function useMainNav() {
    const context = useContext(MainNavContext);
    if (context === undefined) throw new Error("useMainNav must be used within a MainNavProvider")
    return context
}

export { MainNavProvider, useMainNav }
