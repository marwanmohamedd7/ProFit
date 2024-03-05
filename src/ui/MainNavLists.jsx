import Button from "./Button";

function MainNavLists({ data: {
  title,
  btns
} }) {
  return (
    <li className="rounded">
      <div className="p-0 sm:p-1 flex flex-col gap-1.5">
        <span className="text-sm text-gray-400 block">{title}</span>
        {btns.map((btn, index) => <Button key={index} to={btn.to} type={btn.type} name={btn.name}>
          <span className="text-xl">{btn.icon}</span>
        </Button>)}
      </div>
    </li>
  );
}

export default MainNavLists;
