import { useMainNav } from "../context/MainNavProvider";
import Button from "./Button";

function MainNavLists({ data: {
  title,
  btns
} }) {
  const { isOpen } = useMainNav();

  return (
    <li className="rounded py-1">
      <div className="flex flex-col gap-2">
        {isOpen && <span className="text-sm text-gray-400 block sm:px-0.5">{title}</span>}
        {btns.map((btn, index) => <Button key={index} to={btn.to} type={btn.type}>
          <p className="flex justify-center items-center gap-2">
            <span className={isOpen ? `text-xl` : `sm:text-2xl text-xl`}>{btn.icon}</span>
            {isOpen && <span className="">{btn.name?.replaceAll("-", " ")}</span>}
          </p>
        </Button>)}
      </div>
    </li>
  );
}

export default MainNavLists;
