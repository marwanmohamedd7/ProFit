function ChatBoxMessageReceived({ message }) {
    return (
        <div className="flex justify-end items-center">
            <div className="flex flex-col justify-between gap-1.5 w-fit max-w-[45%] text-white bg-blue-700 rounded-xl rounded-tr-none px-4 py-3 text-sm">
                <p>{message} Lorem ipsum dolor sit amet consectetur adipisicing elit. In voluptatem repudiandae, quasi quos facere minima mollitia libero fugiat veritatis earum numquam alias veniam vel tenetur. Pariatur quae accusantium commodi delectus!</p>
                <p className="text-xs text-right">4:55 PM</p>
            </div>
        </div>
    )
}

export default ChatBoxMessageReceived
