import { Outlet } from "react-router-dom";
import AppLayout from "./AppLayout";

function Trainer() {
    return <AppLayout><Outlet /></AppLayout>
}

export default Trainer
