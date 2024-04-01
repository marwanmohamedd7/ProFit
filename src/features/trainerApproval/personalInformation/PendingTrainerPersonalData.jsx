import InputFloatingLabel from "../../../ui/InputFloatingLabel"

function PendingTrainerPersonalData() {
    return (
        <div className="container max-w-7xl mx-auto p-4 sm:p-6 bg-white rounded-md border">
            <form className="flex flex-col gap-6" onSubmit={(e) => e.preventDefault()}>

                <div className=" grid gap-4">
                    <h1 className="text-blue-900 font-bold text-lg capitalize">personal information</h1>
                    <img className="w-28 h-auto rounded-md" src="/uifaces-popular-image (1).jpg" alt="" />
                </div>

                <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-4 capitalize">
                    <InputFloatingLabel item={{ id: "first_name", label: "first name", value: "Ahmed" }} />
                    <InputFloatingLabel item={{ id: "last_name", label: "last name", value: "Mohamed" }} />
                    <InputFloatingLabel item={{ id: "email", label: "email", value: "Ahmed@gmail.com" }} />
                </div>

                <div className=" grid grid-cols-2 w-11/12 sm:w-full sm:grid-cols-3 md:grid-cols-4  lg:grid-cols-6 xl:grid-cols-7  gap-4">
                    <label className="block text-sm col-span-full font-medium capitalize text-gray-700">national ID*</label>
                    <div className="flex gap-1">
                        <img className="w-auto h-auto rounded-md" src="/uifaces-popular-image (1).jpg" alt="" />
                        <img className="w-auto h-auto rounded-md" src="/uifaces-popular-image.jpg" alt="" />
                    </div>
                </div>

                <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-4 capitalize">
                    <InputFloatingLabel item={{ id: "national_ID", label: "national ID*", value: "1202125213", type: "number" }} />
                    <InputFloatingLabel item={{ id: "country", label: "country*", value: "Egypt" }} />
                    <InputFloatingLabel item={{ id: "state", label: "state*", value: "Alexandria" }} />
                    <InputFloatingLabel item={{ id: "city", label: "city*", value: "Miami" }} />
                    <InputFloatingLabel item={{ id: "phone_number", label: "phone number*", value: "01009821081", type: "number" }} />
                    <InputFloatingLabel item={{ id: "birth_date", label: "birth date*", value: "Miami", type: "date" }} />
                </div>

                <div className="space-y-1">
                    <label className="block text-sm font-medium capitalize text-gray-700">biography*</label>
                    <textarea placeholder="Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum cumque quidem, doloribus, laboriosam odit repudiandae sint fugit optio id, itaque necessitatibus hic. Expedita vitae cupiditate fuga distinctio atque, earum quo! ipsum dolor sit amet consectetur adipisicing elit. A beatae atque iure obcaecati officiis, totam earum numquam incidunt amet nam." className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" />
                </div>

                <div className="flex flex-col gap-2">
                    <label className="text-sm font-medium capitalize text-gray-700 flex items-center gap-2">
                        <input className="text-blue-900" defaultChecked={true} type="radio" name="myRadio" value="option1" />
                        <span>Male</span>
                    </label>
                    <label className="text-sm font-medium capitalize text-gray-700 flex items-center gap-2">
                        <input type="radio" name="myRadio" value="option2" />
                        <span>Female</span>
                    </label>
                </div>
                
            </form>
        </div>
    )
}
export default PendingTrainerPersonalData

// <div className = "container max-w-7xl mx-auto p-4 sm:p-6 bg-white rounded-md border" >
//     <form className="flex flex-col gap-5" onSubmit={(e) => e.preventDefault()}>

//         <div className=" grid gap-4">
//             <h1 className="text-blue-900 font-bold text-lg capitalize">personal information</h1>
//             <img className="w-28 h-auto rounded-md" src="/marwan.jpg" alt="" />
//         </div>

//         <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-4 capitalize">
//             <div className="space-y-1">
//                 <label className="block text-sm font-medium capitalize text-gray-700">first name</label>
//                 <input type="text" placeholder="Ahmed" className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" />
//             </div>
//             <div className="space-y-1">
//                 <label className="block text-sm font-medium capitalize text-gray-700">last name</label>
//                 <input type="text" placeholder="Mohamed" className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" />
//             </div>
//             <div className="space-y-1">
//                 <label className="block text-sm font-medium capitalize text-gray-700">email</label>
//                 <input type="text" placeholder="Ahmed@gmail.com" className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" />
//             </div>
//         </div>

//         <div className=" grid grid-cols-2 w-11/12 sm:w-full sm:grid-cols-3 md:grid-cols-4  lg:grid-cols-6 xl:grid-cols-7  gap-4">
//             <label className="block text-sm col-span-full font-medium capitalize text-gray-700">national ID*</label>
//             <div className="flex gap-1">
//                 <img className="w-auto h-auto rounded-md" src="/uifaces-popular-image (1).jpg" alt="" />
//                 <img className="w-auto h-auto rounded-md" src="/uifaces-popular-image.jpg" alt="" />
//             </div>
//         </div>

//         <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-4 capitalize">
//             <div className="space-y-1">
//                 <label className="block text-sm font-medium capitalize text-gray-700">national ID*</label>
//                 <input type="text" placeholder="1202125213" className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" />
//             </div>
//             <div className="space-y-1">
//                 <label className="block text-sm font-medium capitalize text-gray-700">country*</label>
//                 <input type="text" placeholder="Egypt" className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" />
//             </div>
//             <div className="space-y-1">
//                 <label className="block text-sm font-medium capitalize text-gray-700">state*</label>
//                 <input type="text" placeholder="Alexandria" className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" />
//             </div>
//             <div className="space-y-1">
//                 <label className="block text-sm font-medium capitalize text-gray-700">city*</label>
//                 <input type="text" placeholder="Miami" className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" />
//             </div>
//             <div className="space-y-1">
//                 <label className="block text-sm font-medium capitalize text-gray-700">phone number*</label>
//                 <input type="number" placeholder="01009821081" className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" />
//             </div>
//             <div className="space-y-1">
//                 <label className="block text-sm font-medium capitalize text-gray-700">birth date*</label>
//                 <input type="date" placeholder="Miami" className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" />
//             </div>
//         </div>

//         <div className="space-y-1">
//             <label className="block text-sm font-medium capitalize text-gray-700">biography*</label>
//             <textarea placeholder="Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum cumque quidem, doloribus, laboriosam odit repudiandae sint fugit optio id, itaque necessitatibus hic. Expedita vitae cupiditate fuga distinctio atque, earum quo! ipsum dolor sit amet consectetur adipisicing elit. A beatae atque iure obcaecati officiis, totam earum numquam incidunt amet nam." className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" />
//         </div>

//         <div className="flex flex-col gap-2">
//             <label className="text-sm font-medium capitalize text-gray-700 flex items-center gap-2">
//                 <input className="text-blue-900" defaultChecked={true} type="radio" name="myRadio" value="option1" />
//                 <span>Male</span>
//             </label>
//             <label className="text-sm font-medium capitalize text-gray-700 flex items-center gap-2">
//                 <input type="radio" name="myRadio" value="option2" />
//                 <span>Female</span>
//             </label>
//         </div>
//     </form>
// </div >