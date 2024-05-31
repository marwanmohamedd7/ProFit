import Title from "../ui/Title";
import BreadCrumbs from "../ui/BreadCrumbs";
import SystemUsers from "../features/Admin/system users/SystemUsers";
import { useDarkMode } from "../context/DarkModeProvider";


function Users() {
  const { isDarkMode } = useDarkMode();
  return (
    <div className={`space-y-4 ${isDarkMode && "divide-gray-700"}`}>
      <div>
        <BreadCrumbs />
        <Title />
      </div>
      <div className="space-y-4">
        <SystemUsers />
      </div>
    </div>
  );
}

export default Users;
