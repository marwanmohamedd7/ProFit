function MainNavLists({ title, children }) {
  return (
    <li className="rounded">
      <div className="p-0 sm:p-1 flex flex-col gap-1.5">
        <span className="text-sm text-gray-400 block">{title}</span>
        {children}
      </div>
    </li>
  );
}

export default MainNavLists;
