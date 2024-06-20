import React, { createContext, useContext } from 'react';
import { useDarkMode } from '../context/DarkModeProvider';
import styles from '../styles/styles';
// Sample data with image URLs
const TableContext = createContext();

function Table({ children }) {
  const colors = styles();
  const { isDarkMode } = useDarkMode();
  return (
    <TableContext.Provider value={{ colors, isDarkMode }}>
      <div className="overflow-x-auto">
        <table className="min-w-full text-center rounded-md">
          {children}
        </table>
      </div>
    </TableContext.Provider>
  )
}

function Header({ children, border = false }) {
  const { colors, isDarkMode } = useContext(TableContext);
  return (
    <thead>
      <tr className={`capitalize text-left text-sm border ${!border && "border-x-0"} font-normal ${isDarkMode ? `${colors.bg_slate_900} ${colors.text_white} ${colors.border_gray_700}` : `${colors.bg_gray_50} ${colors.text_gray_900}`}`}>
        {children}
      </tr>
    </thead>
  )
}

function Body({ data, render }) {
  return (
    <tbody>
      {data?.map(render) ?? []}
    </tbody>
  )
}

function Row({ children, rowBgColor, onClick, border = false }) {
  const { colors, isDarkMode } = useContext(TableContext);
  return (
    <tr onClick={onClick} className={`transition-all duration-300 border ${!border && "border-x-0"} ${isDarkMode ? `${colors.text_white} ${rowBgColor ? rowBgColor : `${colors.bg_slate_800} bg-opacity-50 hover:${colors.bg_slate_700}`} ${colors.border_gray_700}` : `${colors.text_gray_700} ${rowBgColor ? rowBgColor : ` ${colors.bg_white} hover:${colors.bg_gray_50}`}`} text-sm text-left cursor-pointer`}>
      {children}
    </tr>
  )
}

function Footer({ children, border = false }) {
  const { colors, isDarkMode } = useContext(TableContext);
  return (
    <tfoot>
      <tr className={`border ${!border && "border-x-0"} ${isDarkMode ? `${colors.bg_slate_900} ${colors.text_white} ${colors.border_gray_700}` : `${colors.bg_gray_50} ${colors.text_gray_600}`}`}>
        {children}
      </tr>
    </tfoot>
  )
}

Table.Header = Header;
Table.Body = Body;
Table.Row = Row;
Table.Footer = Footer;

export default Table;





// function Table() {
//   return (
//     <>
//       <div className="mb-2 flex flex-wrap justify-between items-center gap-2 sm:gap-0" >
//         <form >
//           <input className="py-2 px-4 border rounded-md text-sm sm:w-56 md:w-64 sm:focus:w-64 md:focus:w-72 focus:outline-none focus:ring-2 focus:ring-blue-700 focus:ring-opacity-70  transition-all duration-300 placeholder:text-stone-400" type="text" placeholder="Search..." />
//         </form>
//         <div>
//           <button className="text-sm px-4 py-2 bg-blue-700 font-bold capitalize rounded-md text-gray-50">create new food +</button>
//         </div>
//       </div>
//       <div className=" overflow-x-auto rounded-md">
//         <table className="w-full mx-auto text-center text-sm text-gray-500">
//           <thead className="bg-blue-900 text-gray-50">
//             <tr>
//               <th className="py-2 px-4">Food Details</th>
//               <th className="py-2 px-4">Quantity</th>
//               <th className="py-2 px-4">Calories</th>
//               <th className="py-2 px-4">Protein</th>
//               <th className="py-2 px-4">Fats</th>
//               <th className="py-2 px-4">Carbs</th>
//               <th className="py-2 px-4">Category</th>
//               <th className="py-2 px-4">Actions</th>
//               <th className="py-2 px-4">Actions</th>
//             </tr>
//           </thead>

//           <tbody className="text-center bg-white border-b- border-gray-50 ">
//             <tr >
//               <td className="p-2 flex items-center  gap-1 space-x-3">
//                 <img className="w-12 h-10 rounded-md" src="chicken-unsplash.jpg" alt="" />
//                 <span>
//                   Chicken
//                 </span>
//               </td>
//               <td className="py-2 px-4">100 gram</td>
//               <td className="py-2 px-4">239 Kcal</td>
//               <td className="py-2 px-4">27 g</td>
//               <td className="py-2 px-4">14 g</td>
//               <td className="py-2 px-4">0 g</td>
//               <td className="py-2 px-4">
//                 <span className="bg-blue-100 text-blue-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded">
//                   Chicken
//                 </span>
//               </td>
//               <td className="py-2 px-4">
//                 <span
//                   href="#"
//                   className="text-blue-600 hover:text-blue-900 px-4 py-1 bg-blue-100 rounded-md"
//                 >
//                   Edit
//                   {/* <HiPencil /> */}
//                 </span>
//               </td>
//               <td className="py-2 px-4">
//                 <span
//                   href="#"
//                   className="text-red-600 hover:text-red-900 px-4 py-1 bg-red-100 rounded-md"
//                 >
//                   Delete
//                   {/* <HiTrash /> */}
//                 </span>
//               </td>
//             </tr>
//           </tbody>

//           <tfoot className="bg-grey-100 border rounded-b-md">
//             <tr>
//               <td colSpan="2" className="text-xs p-3 text-grey-50 font-light">showing 1-5 of 5</td>
//             </tr>
//           </tfoot>
//         </table>


//       </div>
//     </>

//   );
// }

// export default Table;

// // import styled from "styled-components";

// // const StyledTable = styled.div`
// //   border: 1px solid var(--color-grey-200);

// //   font-size: 1.4rem;
// //   background-color: var(--color-grey-0);
// //   border-radius: 7px;
// //   overflow: hidden;
// // `;

// // const CommonRow = styled.div`
// //   display: grid;
// //   grid-template-columns: ${(props) => props.columns};
// //   column-gap: 2.4rem;
// //   align-items: center;
// //   transition: none;
// // `;

// // const StyledHeader = styled(CommonRow)`
// //   padding: 1.6rem 2.4rem;

// //   background-color: var(--color-grey-50);
// //   border-bottom: 1px solid var(--color-grey-100);
// //   text-transform: uppercase;
// //   letter-spacing: 0.4px;
// //   font-weight: 600;
// //   color: var(--color-grey-600);
// // `;

// // const StyledRow = styled(CommonRow)`
// //   padding: 1.2rem 2.4rem;

// //   &:not(:last-child) {
// //     border-bottom: 1px solid var(--color-grey-100);
// //   }
// // `;

// // const StyledBody = styled.section`
// //   margin: 0.4rem 0;
// // `;

// // const Footer = styled.footer`
// //   background-color: var(--color-grey-50);
// //   display: flex;
// //   justify-content: center;
// //   padding: 1.2rem;

// //   /* This will hide the footer when it contains no child elements. Possible thanks to the parent selector :has 🎉 */
// //   &:not(:has(*)) {
// //     display: none;
// //   }
// // `;

// // const Empty = styled.p`
// //   font-size: 1.6rem;
// //   font-weight: 500;
// //   text-align: center;
// //   margin: 2.4rem;
// // `;
