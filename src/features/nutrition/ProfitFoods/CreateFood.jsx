import Button from "../../../ui/Button"

function CreateFood({ onCloseModal }) {
    const filterAttr =
        [
            {
                label: "Diet Type",
                options: ["select Food Diet Type"]
            },
            {
                label: "Religion Restriction",
                options: ["Select Food Religion Restriction"]
            },

        ]
    return (
        <form className="grid grid-rows-[1fr_auto_auto_auto_auto_auto] divide-y" onSubmit={(e) => e.preventDefault()}>

            <div className="py-3 space-y-3">
                <img className="w-24 h-auto rounded-md" src="/uifaces-popular-image (1).jpg" alt="" />
                <div className="flex flex-wrap justify-center gap-4">
                    <div className="grow w-full md:w-4/12 xl:w-3/12">
                        <label className="block text-sm font-medium capitalize text-gray-700">Food name</label>
                        <input type="text" placeholder="Enter food name" className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" />
                    </div>
                    {filterAttr.map((item, index) => <div key={index} className="grow w-full md:w-4/12 xl:w-3/12">
                        <label className="block text-sm font-medium text-gray-700">{item.label}</label>
                        <select className="mt-1 block w-full px-2 py-1 text-gray-400 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm">
                            {item.options.map((option, index) => <option key={index}>{option}</option>)}
                        </select>
                    </div>)}
                    <div className="grow w-full md:w-4/12 xl:w-3/12">
                        <label className="block text-sm font-medium capitalize text-gray-700">description</label>
                        <input type="text" placeholder="Enter food description" className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" />
                    </div>
                </div>
            </div>

            <div className="capitalize py-3">
                <div className="flex flex-wrap justify-center gap-4">
                    <div className="grow w-full md:w-4/12 xl:w-3/12">
                        <label className="block text-sm font-medium capitalize text-gray-700">Food name</label>
                        <input type="text" placeholder="Enter food name" className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" />
                    </div>
                    {filterAttr.map((item, index) => <div key={index} className="grow w-full md:w-4/12 xl:w-3/12">
                        <label className="block text-sm font-medium text-gray-700">{item.label}</label>
                        <select className="mt-1 block w-full px-2 py-1 text-gray-400 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm">
                            {item.options.map((option, index) => <option key={index}>{option}</option>)}
                        </select>
                    </div>)}
                </div>
            </div>

            <div className="capitalize py-3">
                <div className="flex flex-wrap justify-center gap-4">
                    <div className="grow w-full md:w-4/12 xl:w-3/12">
                        <label className="block text-sm font-medium capitalize text-gray-700">Food name</label>
                        <input type="text" placeholder="Enter food name" className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" />
                    </div>
                    {filterAttr.map((item, index) => <div key={index} className="grow w-full md:w-4/12 xl:w-3/12">
                        <label className="block text-sm font-medium text-gray-700">{item.label}</label>
                        <select className="mt-1 block w-full px-2 py-1 text-gray-400 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm">
                            {item.options.map((option, index) => <option key={index}>{option}</option>)}
                        </select>
                    </div>)}
                </div>
            </div>

            <div className="capitalize py-3">
                <div className="flex justify-center gap-4">
                    {filterAttr.map((item, index) => <div key={index} className="grow w-full md:w-4/12 xl:w-3/12">
                        <label className="block text-sm font-medium text-gray-700">{item.label}</label>
                        <select className="mt-1 block w-full px-2 py-1 text-gray-400 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm">
                            {item.options.map((option, index) => <option key={index}>{option}</option>)}
                        </select>
                    </div>)}
                    {filterAttr.map((item, index) => <div key={index} className="grow w-full md:w-4/12 xl:w-3/12">
                        <label className="block text-sm font-medium text-gray-700">{item.label}</label>
                        <select className="mt-1 block w-full px-2 py-1 text-gray-400 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm">
                            {item.options.map((option, index) => <option key={index}>{option}</option>)}
                        </select>
                    </div>)}
                </div>
            </div>

            <div className="flex justify-start space-x-4 pt-6">
                <Button type="primary" >
                    <span>Add new food</span>
                </Button>
                <Button onclick={onCloseModal} type="reset">
                    <span>cancel</span>
                </Button>
            </div>

        </form>


    )
}
export default CreateFood
