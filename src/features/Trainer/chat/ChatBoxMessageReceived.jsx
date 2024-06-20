import styles from "../../../styles/styles";
import { useDarkMode } from "../../../context/DarkModeProvider";
import { formatTime } from "../../../utils/helpers";
import ImageViewer from "../../../ui/ImageViewer";

function ChatBoxMessageReceived({ message }) {
    const colors = styles();
    const { isDarkMode } = useDarkMode();
    const { content, createdAt, images } = message ?? {};

    return (
        <div className="flex justify-start items-center">
            <div className={`flex flex-col justify-between gap-1.5 w-fit max-w-[30%] ${isDarkMode ? `${colors.bg_white} bg-opacity-10 ${colors.text_white}` : colors.bg_gray_100} rounded-xl rounded-tl-none px-3 py-1.5 text-sm`}>
                {images && images.length > 0 && images.map((image, index) => (
                    <ImageViewer imageURL={image}>
                        {/* // Display received image */}
                        <img key={index} src={image} alt="Received" className="max-w-full rounded-lg" /> 
                    </ImageViewer>
                ))}
                <p>{content}</p>
                <p className={`text-xs text-right ${isDarkMode ? colors.text_gray_400 : colors.text_gray_500}`}>{formatTime(createdAt)}</p>
            </div>
        </div>
    );
}

export default ChatBoxMessageReceived;
