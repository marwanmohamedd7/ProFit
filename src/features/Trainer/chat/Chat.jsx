function Chat({ active = "" }) {
    return (
        <button className={`flex justify-between gap-2 p-3 border cursor-pointer rounded-md ${active ? active : "bg-white"}`}>
            <div className="flex items-center gap-3 whitespace-nowrap">
                <div className="h-12 w-12">
                    <img className="h-12 w-12 rounded-full" src={"/uifaces-popular-image.jpg"} alt={"firstName"} />
                </div>
                <div className="flex flex-col justify-center items-start gap-1">
                    <p className="flex items-center gap-1 capitalize text-blue-800 text-sm font-bold">
                        <span>{"marwan"}</span>
                        <span>{"mohamed"}</span>
                    </p>
                    <p className="text-xs text-gray-500">{"eh l akbhar"}</p>
                </div>
            </div>
            <p className="py-2 text-xs text-gray-500 whitespace-nowrap">12:46 AM</p>
        </button>
    )
}

export default Chat
