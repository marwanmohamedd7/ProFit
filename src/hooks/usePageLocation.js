import { useLocation, useParams } from "react-router-dom";

export function usePageLocation() {
  const { id } = useParams();
  const { pathname } = useLocation();
  // Splitting the URL into an
  let pathName = pathname.split("/").filter((x) => x && x !== id);
  const [, ...values] = pathName;
  let prevPath =
    "/" +
    pathname
      .split("/")
      .filter((x) => x)
      .slice(0, -1)
      .join("/");
  pathName = values.map((x) => x.split("-").join(" "));
  return { pathName, prevPath };
}
