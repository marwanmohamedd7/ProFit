import Spinner from "./Spinner"
import { useEffect } from "react"
import { useNavigate } from "react-router-dom"
import { useUser } from "../features/common/authentication/useUser"

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
            if (isAuthenticated === 'admin' && !isLoading) navigate("/admin", { replace: true })
            else if (isAuthenticated === 'trainer' && status === 'accepted' && !isLoading) navigate("/trainer", { replace: true })
            else if (isAuthenticated === 'trainer' && status === 'incomplete' && !isLoading) navigate("/complete-profile", { replace: true });
            // if (isAuthenticated === role && !isLoading && status === "incomplete") navigate(-1, { replace: true });
            else navigate("/login", { replace: true })
        }
        if (isAuthenticated === role && status === "pending" && !isLoading) navigate("/login", { replace: true });
        if (isAuthenticated === role && status === "incomplete" && !isLoading) navigate("/complete-profile", { replace: true });
        // if (isAuthenticated === role && !isLoading && status === "incomplete") navigate(-1, { replace: true });
    }, [isAuthenticated, isLoading, status, role, navigate])

    // 3. While loading, show a spinner
    if (isLoading) return <div className="h-dvh flex justify-center items-center">
        <Spinner />
    </div>

    // 4. If all checks pass, render the children components
    if (isAuthenticated === role && !status && !isLoading) return children;
    if (isAuthenticated === role && status === "accepted" && !isLoading) return children;
    // return children
}

export default ProtectedRoute
