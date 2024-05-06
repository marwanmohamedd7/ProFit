import { createContext, useCallback, useContext, useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import useOutSideClick from "../hooks/useOutSideClick";
import { HiEllipsisVertical } from "react-icons/hi2";
import { useSearchParams } from "react-router-dom";

const MenusContext = createContext();

function Menus({ children }) {
    const [openId, setOpenId] = useState("");
    const [searchParams] = useSearchParams();
    const [position, setPosition] = useState(null);
    const activeTab = !searchParams.get("day") ? "1" : searchParams.get("day");
    const close = () => setOpenId("");
    const open = setOpenId;
    return (
        <MenusContext.Provider value={{ openId, activeTab, open, close, position, setPosition }}>
            {children}
        </MenusContext.Provider>
    );
}

function Toggle({ id }) {
    const buttonRef = useRef(null);
    const { activeTab, openId, open, close, setPosition } = useContext(MenusContext);

    const updatePosition = useCallback(
        () => {
            if (buttonRef.current) {
                const box = buttonRef.current.getBoundingClientRect();
                setPosition({
                    x: window.innerWidth - box.right,
                    y: box.bottom + 6,
                });
            }
        }, [setPosition]
    )

    function handleClick(e) {
        e.stopPropagation();
        updatePosition(e); // Update position on click
        openId === id ? close() : open(id);
    }
    useEffect(() => {
        if (openId === id) {
            window.addEventListener('scroll', updatePosition, true);
        }

        return () => window.removeEventListener('scroll', updatePosition, true);
    }, [openId, id, updatePosition]);
    return (
        <button
            ref={buttonRef}
            className={`p-1 rounded-md transform translate-x-2 focus:outline-none ${activeTab === id ? `hover:bg-gray-700` : `hover:bg-gray-500`}`}
            onClick={handleClick}
        >
            <HiEllipsisVertical className={`text-xl`} />
        </button>
    );
}

function List({ id, children }) {
    const { openId, close, position } = useContext(MenusContext);
    const ref = useOutSideClick(close, false);
    if (openId !== id) return null;
    return createPortal(
        <ul
            ref={ref}
            className="fixed bg-white shadow-md rounded-md right-0 top-0"
            style={{ right: `${position.x}px`, top: `${position.y}px` }}
        >
            {children}
        </ul>,
        document.body
    );
}

function Button({ icon, children, onClick }) {
    const { close } = useContext(MenusContext);
    function handleClick(e) {
        e.stopPropagation();  // This stops the event from bubbling up to parent elements
        onClick?.();
        close();
    }

    return (
        <li>
            <button
                className="w-full text-left px-4 py-3 font-bold transition duration-200 flex items-center gap-4 hover:bg-gray-100 focus:outline-none text-gray-700"
                onClick={handleClick}
            >
                <span className="text-lg">{icon}</span>
                <span>{children}</span>
            </button>
        </li>
    );
}

function Menu({ children }) {
    return <div className="flex items-center justify-end">{children}</div>;
}

Menus.Menu = Menu;
Menus.Toggle = Toggle;
Menus.List = List;
Menus.Button = Button;

export default Menus;
