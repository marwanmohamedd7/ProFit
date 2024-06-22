import { useCurrentUser } from "../context/UserProvider";
import DashboardAdminLayout from "../features/common/dashboard/admin/DashboardAdminLayout";
import DashboardTrainerLayout from "../features/common/dashboard/trainer/DashboardTrainerLayout";

function Dashboard() {
    const { userRole } = useCurrentUser();
    return userRole === "trainer" ? <DashboardTrainerLayout /> : <DashboardAdminLayout />
}

export default Dashboard
