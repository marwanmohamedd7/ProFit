function ChatBoxMessageReceived({ message }) {
    return (
        <div className="flex justify-end items-center">
            <div className={`flex flex-col justify-between gap-1.5 w-fit max-w-[47.5%] text-white bg-blue-700 rounded-xl rounded-tl-none px-4 py-3 text-sm`}>
                <p>{message} Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tempora ab aperiam quae ut assumenda officia! Assumenda nihil rerum enim, harum molestias reprehenderit praesentium? Quia praesentium libero asperiores tempore voluptatem sequi?</p>
                <p className={`text-xs text-right`}>4:55 PM</p>
            </div>
        </div>
    )
}

export default ChatBoxMessageReceived
