import { BsExclamationCircleFill } from "react-icons/bs";
import SpinnerMini from "./SpinnerMini";

function ConfirmDelete({ resourceName, onConfirm, onCloseModal, isLoading }) {
  return (
    <div className="py-4">
      <div className="flex flex-col justify-center items-center gap-4">
        <span className="text-4xl text-gray-400"><BsExclamationCircleFill /></span>
        <p className="flex flex-col justify-center items-center gap-1 text-gray-600 font-semibold tracking-wide">
          <span>
            Are you sure you want to delete this <strong>{resourceName}</strong> permanently?
          </span>
          <span>This action cannot be undone.</span>
        </p>
        <div className="flex justify-center items-center gap-3 mt-1">
          <button disabled={isLoading} onClick={onConfirm} className="px-4 py-2 font-bold bg-red-700 rounded-lg text-gray-50 hover:bg-red-600">{isLoading ? <SpinnerMini /> : `Yes, I'm sure`}</button>
          <button disabled={isLoading} onClick={onCloseModal} className="px-4 py-2 font-bold bg-white border border-red-700 rounded-lg text-red-700 hover:bg-gray-50">No, cancel</button>
        </div>
      </div>
    </div>
  );
}

export default ConfirmDelete;
