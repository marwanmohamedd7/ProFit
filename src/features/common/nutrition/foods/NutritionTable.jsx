import Empty from "../../../../ui/Empty";
import Pagination from "../../../../ui/Pagination";
import Table from "../../../../ui/Table"
import NutritionRow from "./NutritionRow";

function NutritionTable({ foods, count, section, onCloseModal }) {
    if (!count) return <Empty resource="foods" />
    return (
        <Table>
            <Table.Header>
                {
                    section === "food"
                        ?
                        <tr className="capitalize text-left">
                            <th className="px-4 py-2">Food Details</th>
                            <th className="px-4 py-2">Serving</th>
                            <th className="px-4 py-2">Amount/Serving</th>
                            <th className="px-4 py-2">Protein</th>
                            <th className="px-4 py-2">Fats</th>
                            <th className="px-4 py-2">Carbs</th>
                            <th className="px-4 py-2">Calories</th>
                            <th className="px-4 py-2">Category</th>
                            <th className="px-4 py-2">Actions</th>
                        </tr>
                        :
                        <tr className="capitalize text-left">
                            <th className="px-4 py-2">Food Details</th>
                            <th className="px-4 py-2">Serving</th>
                            <th className="px-4 py-2">Protein</th>
                            <th className="px-4 py-2">Fats</th>
                            <th className="px-4 py-2">Carbs</th>
                            <th className="px-4 py-2">Calories</th>
                            <th className="px-4 py-2">Category</th>
                            <th className="px-4 py-2">Add food</th>
                        </tr>
                }

            </Table.Header>
            <Table.Body data={foods} render={(food) => <NutritionRow food={food} key={food._id} section={section} onCloseModal={onCloseModal} />} />
            <Table.Footer>
                <Pagination count={count} />
            </Table.Footer>
        </Table>
    )
}
export default NutritionTable












// import React, { useState } from 'react';

// // Placeholder data - replace with your actual data source
// const initialData = [
//     { id: 1, name: 'Chicken', quantity: '100 grams', calories: '239 Kcal', protein: '27g', fats: '14g', carbs: '0g', category: 'Chicken', imageUrl: 'chicken-unsplash.jpg' },
//     { id: 2, name: 'Egg', quantity: '100 grams', calories: '155 Kcal', protein: '13g', fats: '11g', carbs: '1.1g', category: 'Egg', imageUrl: 'chicken-unsplash.jpg' },
//     { id: 3, name: 'meat', quantity: '100 grams', calories: '155 Kcal', protein: '13g', fats: '11g', carbs: '1.1g', category: 'Egg', imageUrl: 'chicken-unsplash.jpg' },
//     // ... other food items
// ];


// const FoodTable = () => {
//     const [data, setData] = useState(initialData); // Replace with data fetching logic
//     const [searchTerm, setSearchTerm] = useState('');
//     const [currentPage, setCurrentPage] = useState(1);
//     const itemsPerPage = 5;

//     // Search filter function
//     const handleSearch = (event) => {
//         setSearchTerm(event.target.value);
//         setCurrentPage(1); // Reset to the first page on search
//     };

//     // Get current food items
//     const indexOfLastItem = currentPage * itemsPerPage;
//     const indexOfFirstItem = indexOfLastItem - itemsPerPage;
//     const currentFoodItems = data
//         .filter((item) => item.name.toLowerCase().includes(searchTerm.toLowerCase()))
//         .slice(indexOfFirstItem, indexOfLastItem);

//     // Change page
//     const paginate = (pageNumber) => setCurrentPage(pageNumber);

//     return (
//         <div className="container mx-auto px-4 sm:px-8">
//             <div className="py-8">
//                 <div className="flex mb-4 justify-between">
//                     <input
//                         type="text"
//                         className="shadow border rounded py-2 px-3 mr-4 text-grey-darker"
//                         placeholder="Search Food Name"
//                         value={searchTerm}
//                         onChange={handleSearch}
//                     />
//                     <button className="flex items-center bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
//                         Create New Food +
//                     </button>
//                 </div>
//                 <div className="shadow overflow-hidden rounded border-b border-gray-200">
//                     <table className="min-w-full bg-white">
//                         <thead className="bg-blue-100">
//                             <tr>
//                                 <th className="text-left py-3 px-4 uppercase font-semibold text-sm">Food Details</th>
//                                 {/* ... other headers ... */}
//                             </tr>
//                         </thead>
//                         <tbody className="text-gray-700">
//                             {currentFoodItems.map((item, index) => (
//                                 <tr key={index}>
//                                     <td className="text-left py-3 px-4">
//                                         <div className="flex items-center">
//                                             <div className="flex-shrink-0 h-10 w-10">
//                                                 <img className="h-10 w-10 rounded-full" src={item.imageUrl} alt={item.name} />
//                                             </div>
//                                             <div className="ml-3">
//                                                 <div className="text-sm font-medium">{item.name}</div>
//                                             </div>
//                                         </div>
//                                     </td>
//                                     {/* ... other cells ... */}
//                                 </tr>
//                             ))}
//                         </tbody>
//                     </table>
//                 </div>
//                 <div className="flex justify-between items-center mt-4">
//                     <span className="text-sm text-gray-700">
//                         Showing {indexOfFirstItem + 1}-{indexOfLastItem} of {data.length}
//                     </span>
//                     <div className="inline-flex">
//                         <button
//                             onClick={() => paginate(currentPage - 1)}
//                             disabled={currentPage === 1}
//                             className="text-sm bg-gray-300 hover:bg-gray-400 text-gray-800 font-semibold py-2 px-4 rounded-l"
//                         >
//                             Prev
//                         </button>
//                         {/* Render page numbers */}
//                         {Array.from({ length: Math.ceil(data.length / itemsPerPage) }, (_, i) => (
//                             <button
//                                 key={i}
//                                 onClick={() => paginate(i + 1)}
//                                 className={`text-sm ${currentPage === i + 1 ? 'bg-blue-500 text-white' : 'bg-gray-300 hover:bg-gray-400 text-gray-800'}  font-semibold py-2 px-4`}>
//                                 {i + 1}
//                             </button>
//                         ))}
//                         <button
//                             onClick={() => paginate(currentPage + 1)}
//                             disabled={currentPage === Math.ceil(data.length / itemsPerPage)}
//                             className="text-sm bg-gray-300 hover:bg-gray-400 text-gray-800 font-semibold py-2 px-4 rounded-r"
//                         >
//                             Next
//                         </button>
//                     </div>
//                 </div>
//             </div>
//         </div >
//     );
// };

// export default FoodTable;
















