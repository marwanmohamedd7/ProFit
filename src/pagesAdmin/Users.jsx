import Title from "../ui/Title";
import BreadCrumbs from "../ui/BreadCrumbs";
import SystemUsers from "../features/Admin/system users/SystemUsers";


function Users() {
  return (
    <div className="divide-y space-y-4">
      <div>
        <BreadCrumbs />
        <Title />
      </div>
      <SystemUsers />
    </div>
  );
}

export default Users;
