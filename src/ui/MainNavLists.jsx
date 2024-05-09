import { useMainNav } from "../context/MainNavProvider";
import Button from "./Button";

function MainNavLists({ data: {
  title,
  btns
} }) {
  const { isOpen } = useMainNav();

  return (
    <li className="rounded">
      <div className="p-0 sm:p-1 flex flex-col gap-1.5">
        <span className="text-sm text-gray-400 block">{isOpen ? title : ""}</span>
        {btns.map((btn, index) => <Button customeStyle="mx-auto" key={index} to={btn.to} type={btn.type}>
          <p className="flex justify-center items-center gap-2">
            <span className={isOpen ? `text-xl` : `text-2xl`}>{btn.icon}</span>
            {isOpen && <span className="">{btn.name?.replaceAll("-", " ")}</span>}
          </p>
        </Button>)}
      </div>
    </li>
  );
}

export default MainNavLists;
