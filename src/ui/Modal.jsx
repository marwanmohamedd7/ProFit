import { cloneElement, createContext, useContext, useState } from "react"
import { HiXMark } from "react-icons/hi2";
import { createPortal } from "react-dom";
import useOutSideClick from "../hooks/useOutSideClick";
import { useDarkMode } from "../context/DarkModeProvider";
import styles from "../styles/styles";

const ModalContext = createContext()

function Modal({ children }) {
  const colors = styles();
  const { isDarkMode } = useDarkMode();
  const [openName, setOpenName] = useState("")
  const close = () => setOpenName("");
  const open = setOpenName
  return (
    <ModalContext.Provider value={{ open, close, openName, colors, isDarkMode }}>
      {children}
    </ModalContext.Provider>
  )
}

function Open({ opens: openWindow, children }) {
  const { open } = useContext(ModalContext)
  return (
    cloneElement(children, {
      onClick: (e) => {
        e.stopPropagation();
        e.preventDefault();
        open(openWindow)
      }
    })
  )
}

function Window({ opens: openWindow, children }) {
  const { openName, close, colors, isDarkMode } = useContext(ModalContext);
  const ref = useOutSideClick(close)
  if (openName !== openWindow) return null
  return (
    createPortal(
      <div className={`fixed h-dvh w-full backdrop-blur-sm inset-0 ${isDarkMode ? `bg-opacity-40` : `bg-opacity-60`} ${colors.bg_black} z-50 overflow-y-auto`} id="my-modal">
        <div ref={ref} className={`fixed top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] transition-all duration-1000 px-4 pb-4 border shadow-lg rounded-md divide-y ${isDarkMode ? `${colors.bg_slate_900} ${colors.border_gray_700} divide-gray-700` : `${colors.bg_white}`}`}>
          <div className="flex items-center justify-between">
            <h3 className={`mr-8 text-lg leading-6 font-bold px-2 py-4 capitalize ${isDarkMode ? colors.text_white : colors.text_gray_900}`}>{openWindow.split("-").join(" ")}</h3>
            <button onClick={(e) => {
              e.stopPropagation();
              e.preventDefault();
              close();
            }} className={`ml-8 text-lg font-bold hover:font-semibold p-1 rounded-md transition-all duration-300 ${isDarkMode ? `${colors.text_gray_400} hover:${colors.bg_gray_600} hover:${colors.text_gray_300}` : `${colors.text_gray_500} hover:${colors.bg_gray_300} hover:${colors.text_gray_600}`}`}><HiXMark /></button>
          </div>
          {cloneElement(children, { onCloseModal: close })}
        </div>
      </div>,
      document.body
    )
  )
}

Modal.Open = Open
Modal.Window = Window

export default Modal
