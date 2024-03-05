import { useNavigate } from "react-router-dom"
import { useGetPageLocation } from "../hooks/useGetPageLocation"

function ProtectedRoute({ children, requiredRole }) {
    const { role } = useGetPageLocation()
    const navigate = useNavigate()
    if (role !== requiredRole) navigate("login")
    return children
}

export default ProtectedRoute
