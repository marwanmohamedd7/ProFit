import Spinner from "./Spinner"
import { useEffect } from "react"
import { useNavigate } from "react-router-dom"
import { useUser } from "../features/common/authentication/useUser"

function ProtectedRouteProfile({ children, role }) {
    const navigate = useNavigate()

    // 1. Load the authenticated user
    const { isLoading, isAuthenticated, status } = useUser()
    isLoading && console.log(isAuthenticated)
    isLoading && console.log(isAuthenticated)
    // 2. If there is No authenticated user, redirect to login page
    useEffect(function () {
        if (!isAuthenticated && !isLoading) navigate("/login", { replace: true });
        if (isAuthenticated !== role && !isLoading) {
            if (isAuthenticated === "admin") navigate("/admin", { replace: true });
            else navigate("/login", { replace: true });
        }
        if (isAuthenticated === role && status === "pending" && !isLoading) navigate("/login", { replace: true });
        if (isAuthenticated === role && status === "accepted" && !isLoading) navigate("/trainer", { replace: true });
        // if (isAuthenticated === role && !isLoading && status === "accepted") navigate(-1, { replace: true });
    }, [isAuthenticated, isLoading, status, role, navigate])

    // 3. While loading, show a spinner
    if (isLoading) return <div className="h-dvh flex justify-center items-center">
        <Spinner />
    </div>

    // 4. If all checks pass, render the children components
    if (isAuthenticated === role && status === "incomplete" && !isLoading) return children;
    // return children
}

export default ProtectedRouteProfile
