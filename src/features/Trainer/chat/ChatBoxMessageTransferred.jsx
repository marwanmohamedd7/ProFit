function ChatBoxMessageTransferred({ message }) {
    return (
        <div className="flex justify-start items-center">
            <div className="flex flex-col justify-between gap-1.5 w-fit max-w-[45%] bg-gray-100 rounded-xl rounded-tl-none px-4 py-3 text-sm">
                <p>{message} Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tempora ab aperiam quae ut assumenda officia! Assumenda nihil rerum enim, harum molestias reprehenderit praesentium? Quia praesentium libero asperiores tempore voluptatem sequi?</p>
                <p className="text-xs text-right text-gray-500">4:55 PM</p>
            </div>
        </div>
    )
}

export default ChatBoxMessageTransferred
