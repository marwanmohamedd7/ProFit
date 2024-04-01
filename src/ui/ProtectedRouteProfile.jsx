import Spinner from "./Spinner"
import { useUser } from "../features/authentication/useUser"
import { useEffect } from "react"
import { useNavigate } from "react-router-dom"

function ProtectedRouteProfile({ children, role }) {
    const navigate = useNavigate()

    // 1. Load the authenticated user
    const { isLoading, isAuthenticated, status } = useUser()

    // 2. If there is No authenticated user, redirect to login page
    useEffect(function () {
        if (!isAuthenticated && !isLoading) navigate("/login", { replace: true });
        if (isAuthenticated !== role && !isLoading) {
            if (isAuthenticated === "admin") navigate("/admin", { replace: true });
            else navigate("/login", { replace: true });
        }
        if (isAuthenticated === role && !isLoading && status === "pending") navigate("/login", { replace: true });
        if (isAuthenticated === role && !isLoading && status === "accepted") navigate("/trainer", { replace: true });
        // if (isAuthenticated === role && !isLoading && status === "accepted") navigate(-1, { replace: true });
    }, [isAuthenticated, isLoading, status, role, navigate])

    // 3. While loading, show a spinner
    if (isLoading) return <div className="h-dvh flex justify-center items-center">
        <Spinner />
    </div>

    // 4. If all checks pass, render the children components
    if (isAuthenticated === role && !isLoading && status === "incomplete") return children;
}

export default ProtectedRouteProfile
