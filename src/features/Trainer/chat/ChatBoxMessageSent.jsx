import ImageViewer from "../../../ui/ImageViewer";
import { formatTime } from "../../../utils/helpers";

function ChatBoxMessageSent({ message }) {
    const { content, createdAt, images } = message ?? {};
    return (
        <div className="flex justify-end items-center">
            <div className={`flex flex-col justify-between gap-1.5 w-fit max-w-[30%] text-white bg-blue-700 rounded-xl rounded-tr-none px-3 py-1.5 text-sm`}>
                {images && images.length > 0 && images.map((image, index) => {
                    const imageSrc = Object.keys(message).includes("conversationId") ? `data:image/jpeg;base64,${image}` : image;
                    return (
                        <ImageViewer imageURL={imageSrc}>
                            {/* // Display sent image */}
                            <img key={index} src={imageSrc} alt="Sent" className="max-w-full rounded-lg" />
                        </ImageViewer>
                    )
                })}
                <p>{content}</p>
                <p className={`text-xs text-right`}>{formatTime(createdAt)}</p>
            </div>
        </div>
    );
}

export default ChatBoxMessageSent;
