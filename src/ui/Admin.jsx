import { Outlet } from "react-router-dom"
import AppLayout from "./AppLayout"

function Admin() {
    return <AppLayout><Outlet /></AppLayout>
}

export default Admin
