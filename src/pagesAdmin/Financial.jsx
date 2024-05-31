import Title from "../ui/Title";
import BreadCrumbs from "../ui/BreadCrumbs";
import AdminFinancial from "../features/common/financial/admin/AdminFinancial";
import { useDarkMode } from "../context/DarkModeProvider";

function Financial() {
  const { isDarkMode } = useDarkMode();
  return (
    <div className={`divide-y ${isDarkMode && "divide-gray-700"}`}>
      <div className="pb-4">
        <BreadCrumbs />
        <Title />
      </div>
      <div className="py-4">
        <AdminFinancial />
      </div>
    </div>
  )
}

export default Financial;
