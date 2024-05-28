import Chat from "./Chat"
function AllChats() {
    const active = "bg-blue-50 border-blue-700"
    return (
        <div className="flex flex-col justify-center gap-2">
            <h4 className="capitalize text-sm text-blue-700 font-semibold">all chats</h4>
            <div className="flex flex-col justify-start gap-2 w-80 max-h-[33.25rem] overflow-y-scroll">
                {[1, 2, 8, 1, 1, 1, 8, 9, 7].map((_, index) => <Chat key={index} active={index < 1 ? active : ''} />)}
            </div>
        </div>
    )
}

export default AllChats
