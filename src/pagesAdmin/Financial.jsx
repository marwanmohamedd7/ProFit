import Title from "../ui/Title";
import BreadCrumbs from "../ui/BreadCrumbs";
import AdminFinancial from "../features/common/financial/admin/AdminFinancial";

function Financial() {
  return (
    <div className="divide-y">
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
