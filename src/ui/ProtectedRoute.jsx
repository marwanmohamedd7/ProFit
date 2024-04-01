import Spinner from "./Spinner"
import { useUser } from "../features/authentication/useUser"
import { useEffect } from "react"
import { useNavigate } from "react-router-dom"

function ProtectedRoute({ children, role }) {
    const navigate = useNavigate()

    // 1. Load the authenticated user
    // isAuthenticated: returns the role of the authenticated user (which user is logged in)
    const { isLoading, isAuthenticated, status } = useUser()

    // 2. If there is No authenticated user, redirect to login page
    useEffect(function () {
        if (!isAuthenticated && !isLoading) navigate("/login", { replace: true })
        // if he tries to access a restricted route without being authorized for accessing it?
        if (isAuthenticated !== role && !isLoading) {
            if (isAuthenticated === 'admin') navigate("/admin", { replace: true })
            else if (isAuthenticated === 'trainer' && status === 'accepted') navigate("/trainer", { replace: true })
            else if (isAuthenticated === 'trainer' && status === 'incomplete') navigate("/complete-profile", { replace: true });
        // if (isAuthenticated === role && !isLoading && status === "incomplete") navigate(-1, { replace: true });
            else navigate("/login", { replace: true })
        }
        if (isAuthenticated === role && !isLoading && status === "pending") navigate("/login", { replace: true });
        if (isAuthenticated === role && !isLoading && status === "incomplete") navigate("/complete-profile", { replace: true });
        // if (isAuthenticated === role && !isLoading && status === "incomplete") navigate(-1, { replace: true });
    }, [isAuthenticated, isLoading, status, role, navigate])

    // 3. While loading, show a spinner
    if (isLoading) return <div className="h-dvh flex justify-center items-center">
        <Spinner />
    </div>

    // 4. If all checks pass, render the children components
    if (isAuthenticated === role && !isLoading && !status) return children;
    if (isAuthenticated === role && !isLoading && status === "accepted") return children;
}

export default ProtectedRoute
