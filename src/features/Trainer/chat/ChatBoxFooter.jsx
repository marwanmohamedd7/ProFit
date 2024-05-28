import { PiPaperPlaneRightFill } from "react-icons/pi"

function ChatBoxFooter() {
    return (
        <div className={`flex justify-between items-center grow gap-2 p-4 cursor-pointer border-t shadow-sm`}>
            <div className="relative w-full">
                <input
                    type="text"
                    className="px-4 py-2 text-grey-darker text-sm
                 placeholder:text-sm rounded-md w-full transition-all duration-300
                 focus:border-blue-600 focus:outline-none focus:ring-1 focus:ring-blue-700 focus:bg-transparent bg-gray-50 text-gray-500 border"
                    placeholder={"write text here..."}
                />
            </div>
            <span className="text-xl p-2 text-blue-700"><PiPaperPlaneRightFill /></span>
        </div>
    )
}

export default ChatBoxFooter
