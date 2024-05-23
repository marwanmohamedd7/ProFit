import { useMoveBack } from "../hooks/useMoveBack";
function PageNotFound() {
  const moveBack = useMoveBack();
  return (
    <div className="h-screen bg-gray-50 flex items-center justify-center p-12">
      <div className="bg-white border rounded-md w-3/4 p-12 flex flex-col justify-center items-center gap-4 text-center">
        <div className="w-96 h-96">
          <img className="w-full h-full" src="/error1.png" alt="error" />
        </div>
        <h1 className="text-2xl font-bold text-blue-900">The page you are looking for could not be found 😢</h1>
        <p className="font-sono text-gray-700">wrong path</p>
        <button
          className="px-6 py-2 bg-blue-600 text-white rounded-lg text-lg font-semibold"
          onClick={moveBack}
        >
          <p className="flex justify-center items-center gap-2 text-lg font-bold tracking-wide">
            <span className="pb-0.5 text-xl">&larr;</span>
            <span>Go back</span>
          </p>
        </button>
      </div>
    </div>
  )
}

export default PageNotFound;
