import { createContext, useContext, useEffect, useState } from "react";
import { io } from "socket.io-client";
import { useCurrentUser } from "./UserProvider";

const SocketContext = createContext();

function SocketProvider({ children }) {
    const { userToken } = useCurrentUser();
    const [socket, setSocket] = useState(null);
    const [onlineUsers, setOnlineUsers] = useState([]);

    useEffect(() => {
        if (userToken) {
            const socketInstance = io('https://pro-fit.onrender.com', {
                auth: { token: userToken }
            });
            setSocket(socketInstance);

            // Cleanup on unmount or token change
            return () => {
                socketInstance.close();
                setSocket(null);
            };
        }

    }, [userToken]);

    return (
        <SocketContext.Provider value={{ socket, onlineUsers, setOnlineUsers }}>
            {children}
        </SocketContext.Provider>
    );
}

function useChatSocket() {
    const context = useContext(SocketContext);
    if (context === undefined) throw new Error("useChatSocket must be used within a SocketProvider");
    return context;
}

export { SocketProvider, useChatSocket };
