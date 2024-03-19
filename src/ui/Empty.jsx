function Empty({ resource }) {
    return <div className="bg-gray-100 text-center p-1 rounded-md shadow-sm">
        <p className="font-bold text-xl text-blue-900 my-4">No {resource} could be found.</p>
    </div>;

}

export default Empty
