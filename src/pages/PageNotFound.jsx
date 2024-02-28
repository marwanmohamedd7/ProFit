import { useMoveBack } from "../hooks/useMoveBack";
import Button from "../ui/Button";
function PageNotFound() {
  const moveBack = useMoveBack();
  return <div className="p-2 flex flex-col gap-6 items-center justify-center h-screen">
    <h1 className="text-2xl font-bold text-blue-900">The page you are looking for could not be found 😢</h1>
    <Button onClick={moveBack} size="large">
      <span>&larr;</span>
      <span>Go back</span>
    </Button>
  </div>;
}

export default PageNotFound;
