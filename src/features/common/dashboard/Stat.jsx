import { useSearchParams } from "react-router-dom";

function Stat({ icon, title, value, color }) {
  const [searchParams] = useSearchParams();
  const currentFilter = searchParams.get("last") || "7";
  return (
    <div className="flex flex-col justify-between gap-4 rounded-md p-4 border capitalize shadow-md bg-white">
      <p className="flex items-center justify-between gap-2 md:flex-nowrap flex-wrap whitespace-nowrap">
        <span className={`p-1.5 rounded-md ${color}`}>{icon}</span>
        <span className="text-gray-500 text-sm">last {currentFilter} days</span>
      </p>
      <p className="flex flex-col justify-center">
        <span className="text-gray-500 ">{title}</span>
        <span className="text-blue-900 font-bold text-2xl">{value}</span>
      </p>
    </div>
  );
}

export default Stat;
