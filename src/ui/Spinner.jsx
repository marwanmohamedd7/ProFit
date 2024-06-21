import { useDarkMode } from "../context/DarkModeProvider";
import styles from "../styles/styles";

function Spinner() {
  const colors = styles();
  const { isDarkMode } = useDarkMode();
  const borderColor = isDarkMode ? colors.border_blue_600 : colors.border_blue_700;

  return (
    <div className={`w-full h-full flex justify-center items-center py-4 bg-transparent`}>
      <div className="spinner">
        <div className={`double-bounce1 ${borderColor}`}></div>
        <div className={`double-bounce2 ${borderColor}`}></div>
      </div>
      <style jsx>{`
        .spinner {
          width: 40px;
          height: 40px;
          position: relative;
        }
        .double-bounce1, .double-bounce2 {
          width: 100%;
          height: 100%;
          border-radius: 50%;
          background-color: ${!isDarkMode ? "#1D4ED8" : "#2563EB"};
          opacity: 0.6;
          position: absolute;
          top: 0;
          left: 0;
          animation: sk-bounce 2.0s infinite ease-in-out;
        }
        .double-bounce2 {
          animation-delay: -1.0s;
        }
        @keyframes sk-bounce {
          0%, 100% {
            transform: scale(0);
          }
          50% {
            transform: scale(1.0);
          }
        }
      `}</style>
    </div>
  );
  
  // return (
  //   <div className={`w-full h-full flex justify-center items-center py-4 bg-transparent`}>
  //     <div className={`w-12 h-12 border-t-4 border-b-4 ${!isDarkMode && colors.border_blue_700} opacity-90 border-brand-600 rounded-full animate-spin`}></div>
  //   </div>
  // )
}

export default Spinner;
