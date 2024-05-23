import { useState } from "react";



function InputDropdown({ item: { id, label, options }, register, error, disabled }) {
   
 
   
    // const [city, setcity] = useState(localStorage.getItem('city') || '');
    // const [selectedCountry, setSelectedCountry] = useState('');
    // const [selectedCity, setSelectedCity] = useState('');
    // const [cities, setCities] = useState([]);
  


    // const countries = [
    //   { name: "Egypt", code: "EG", cities: ["Cairo", "Alexandria", "Giza"] },
    //   { name: "Saudi Arabia", code: "SA", cities: ["Riyadh", "Jeddah", "Mecca"] },
    //   { name: "United Arab Emirates", code: "AE", cities: ["Dubai", "Abu Dhabi", "Sharjah"] },
    //   { name: "Lebanon", code: "LB", cities: ["Beirut", "Tripoli", "Sidon"] },
    //   { name: "Qatar", code: "QA", cities: ["Doha", "Al Wakrah", "Al Khor"] },
    //   { name: "Kuwait", code: "KW", cities: ["Kuwait City", "Al Ahmadi", "Hawally"] },
    // ];
  
  
  
    // const handleCountryChange = (e) => {
    //   const countryCode = e.target.value;
    //   setSelectedCountry(countryCode);
  
    //   // Find the country object and update cities
    //   const countryObj = countries.find(country => country.code === countryCode);
    //   setCities(countryObj ? countryObj.cities : []);
    // // };
  
   
   
    return (



<div className="relative flex flex-col gap-1 grow">
    <select disabled={disabled} id={id} {...register} className="capitalize block w-full text-xs sm:text-sm p-1.5 border text-gray-700 border-gray-300 bg-white rounded-md
        focus:outline-none focus:ring-blue-700 focus:border-blue-700">
        {/* <option className="text-gray-400" value="">{label}...</option> */}
        {options.map((option, index) => <option className="text-gray-700 text-sm" key={index} value={option}>{option}</option>)}
        {/* Add options here */}
    </select>
    <label htmlFor={id} className="absolute top-0 start-0 p-1.5 truncate pointer-events-none transition ease-in-out duration-100 border border-transparent text-xs text-gray-700 peer-[:not(:placeholder-shown)] top-0 -translate-y-1/2 text-blue-700 left-2 bg-white peer-focus:text-xs peer-focus:-translate-y-1.5 peer-focus:text-gray-500">{label}</label>
    {error && <span className="text-red-700 text-xs">{error}</span>}
</div>





//           <div className="relative  inline-block w-1/3 me-3">
//             <select className="peer p-4 pe-9 block w-full border-gray-300 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400 dark:focus:ring-gray-600
//             focus:pt-6
//             focus:pb-2
//             [&:not(:placeholder-shown)]:pt-6
//             [&:not(:placeholder-shown)]:pb-2
//             autofill:pt-6
//             autofill:pb-2"
//               value={selectedCountry}
//               onChange={handleCountryChange}
//             >
//               <option value="">Select Country</option>
//               {countries.map((country) => (
//                 <option key={country.code} value={country.code}>{country.name}</option>
//               ))}
//             </select>
//             <label className="absolute top-0 start-0 p-4 h-full truncate pointer-events-none transition ease-in-out duration-100 border border-transparent dark:text-white peer-disabled:opacity-50 peer-disabled:pointer-events-none
// peer-focus:text-xs
// peer-focus:-translate-y-1.5
// peer-focus:text-gray-500
// peer-[:not(:placeholder-shown)]:text-xs
// peer-[:not(:placeholder-shown)]:-translate-y-1.5
// peer-[:not(:placeholder-shown)]:text-gray-500">Country</label>
//           </div>






    )
}

export default InputDropdown
