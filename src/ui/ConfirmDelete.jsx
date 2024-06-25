import { BsExclamationCircleFill } from "react-icons/bs";
import SpinnerMini from "./SpinnerMini";
import { useDarkMode } from "../context/DarkModeProvider";
import styles from "../styles/styles";

function ConfirmDelete({ action ="delete",resourceName, onConfirm, onCloseModal, isLoading }) {
  const colors = styles();
  const { isDarkMode } = useDarkMode();
  return (
    <div className="py-4">
      <div className="flex flex-col justify-center items-center gap-4">
        <span className={`text-4xl ${isDarkMode ? colors.text_gray_200 : colors.text_gray_400}`}><BsExclamationCircleFill /></span>
        <p className={`flex flex-col justify-center items-center gap-1 ${isDarkMode ? colors.text_gray_50 : colors.text_gray_700} font-semibold tracking-wide`}>
          <span>
            Are you sure you want to <strong>{action}</strong> this <strong>{resourceName}</strong> permanently?
          </span>
          <span>This action cannot be undone.</span>
        </p>
        <div className="flex justify-center items-center gap-3 mt-1">
          <button disabled={isLoading} onClick={onConfirm} className={`px-4 py-2 font-bold rounded-lg text-white ${isDarkMode ? `bg-red-900 hover:bg-red-800` : `bg-red-700 hover:bg-red-600`}`}>{isLoading ? <SpinnerMini /> : `Yes, I'm sure`}</button>
          <button disabled={isLoading} onClick={onCloseModal} className={`px-4 py-2 font-bold rounded-lg border ${isDarkMode ? `border-gray-600 text-gray-300 hover:bg-gray-800 hover:text-white` : `border-gray-400 text-gray-700 hover:bg-gray-100 hover:text-gray-900`}`}>No, cancel</button>
        </div>
      </div>
    </div>
  );
}

export default ConfirmDelete;
