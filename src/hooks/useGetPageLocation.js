import { useLocation } from "react-router-dom";

export function useGetPageLocation() {
  const { pathname } = useLocation();
  // Splitting the URL into an
  let pathNames = pathname.split("/").filter((x) => x);
  const [, ...values] = pathNames;
  pathNames = values.map((x) => x.split("-").join(" "));
  return { pathNames };
}
