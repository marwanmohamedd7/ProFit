function Empty({ resource }) {
    return (
        <div className="bg-gray-100 text-center p-1 rounded-md shadow-sm border flex flex-col justify-center items-center gap-2">
            <div>
                <img src="/SearchAnimation.gif" alt="" />
            </div>
            <p className="font-bold text-xl text-blue-900 my-4">No {resource} could be found.</p>
        </div>
    )

}

export default Empty
