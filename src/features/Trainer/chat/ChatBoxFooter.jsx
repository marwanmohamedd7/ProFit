import { PiPaperPlaneRightFill } from "react-icons/pi";
import { useDarkMode } from "../../../context/DarkModeProvider";
import { useCallback, useEffect, useRef, useState } from "react";
import styles from "../../../styles/styles";
import { IoClose } from "react-icons/io5";
import { IoCameraOutline } from "react-icons/io5";

function ChatBoxFooter({ onSendMessage, isLoading }) {
    const ref = useRef(null);
    const imageRef = useRef(null); // Reference for the image input
    const colors = styles();
    const { isDarkMode } = useDarkMode();
    const [message, setMessage] = useState('');
    const [image, setImage] = useState(null); // State to hold selected image file
    const [imagePreview, setImagePreview] = useState(null); // State to hold image preview URL

    const handleSendMessage = useCallback(() => {
        onSendMessage(message, image); // Pass image file to send message handler
        setMessage('');
        setImage(null); // Reset image state after sending
        setImagePreview(null); // Reset image preview
        if (imageRef.current) imageRef.current.value = null; // Clear the file input
    }, [message, image, onSendMessage]);

    useEffect(() => {
        function handleKeyPress(e) {
            if (!ref.current) return;
            ref.current.focus();
            if (e.key === 'Enter' && (message || image)) handleSendMessage();
        };

        document.addEventListener('keypress', handleKeyPress);
        return () => document.removeEventListener('keypress', handleKeyPress);

    }, [handleSendMessage, message, image]);

    const handleImageChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            setImage(file); // Update image state when a file is selected
            const reader = new FileReader();
            reader.onloadend = () => {
                setImagePreview(reader.result); // Set image preview URL
            };
            reader.readAsDataURL(file); // Read the image file as base64
        }
    };

    return (
        <div className={`flex flex-col gap-2 p-4 border-t ${isDarkMode ? `${colors.bg_slate_900} ${colors.border_gray_700}` : `${colors.border_gray_200} ${colors.bg_white}`} shadow-sm sticky bottom-0`}>
            {imagePreview && (
                <div className="mb-2 flex justify-between items-start px-1">
                    {/* Display image preview */}
                    <img src={imagePreview} alt="Selected" className="max-w-full max-h-40 rounded-md" />
                    <button
                        onClick={() => {
                            setImage(null);
                            setImagePreview(null);
                            if (imageRef.current) imageRef.current.value = null;
                        }}
                        className={`text-lg ${isDarkMode ? `hover:bg-gray-700 text-gray-400` : `hover:bg-gray-200 text-gray-500`} transition-all duration-300 rounded-full p-0.5`}
                    >
                        <IoClose />
                    </button>
                </div>
            )}
            <div className="relative w-full flex items-center gap-2">
                <input
                    ref={ref}
                    type="text"
                    value={message}
                    disabled={isLoading}
                    onChange={(e) => setMessage(e.target.value)}
                    className={`px-4 py-2 text-grey-darker text-sm placeholder:text-sm rounded-md w-full transition-all duration-300 focus:outline-none focus:ring-1 focus:bg-transparent ${isDarkMode ? `${colors.bg_slate_800} ${colors.border_gray_700} ${colors.text_white} focus:border-blue-500 focus:ring-blue-500 ` : `${colors.bg_gray_50} ${colors.text_gray_700} focus:border-blue-700 focus:ring-blue-700 `} border`}
                    placeholder="Write text here..."
                />
                <input
                    ref={imageRef}
                    type="file"
                    accept="image/*"
                    onChange={handleImageChange} // Handle image selection
                    className="hidden" // Hide the file input
                />
                {/* Button to trigger file input click */}
                <div className="flex justify-center items-center">
                    <button disabled={isLoading} onClick={() => imageRef.current.click()} className={`text-2xl p-2 rounded-full ${isDarkMode?`text-blue-500`:`text-blue-700`}`}><IoCameraOutline /></button>
                    <button disabled={isLoading} onClick={handleSendMessage} className={`text-xl p-2 rounded-full ${isDarkMode?`text-blue-500`:`text-blue-700`}`}><PiPaperPlaneRightFill /></button>
                </div>
            </div>
        </div>
    );
}

export default ChatBoxFooter;
