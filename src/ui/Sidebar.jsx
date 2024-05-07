import Logo from "./Logo";
import MainNav from "./MainNav";

function Sidebar() {
  return (
    <aside className="grid grid-cols-1 grid-rows-[auto_1fr] border-solid border-r border-grey-100 row-span-full">
      <Logo />
      <MainNav />
    </aside>
  );
}

export default Sidebar;
