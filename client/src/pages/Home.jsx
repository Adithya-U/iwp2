// import React from 'react'

// export default function Home() {
//   return (
// <div className="px-5 py-5">
// <div className="px-4 py-5 flex justify-center">    
// <button type="button" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">Rock</button>
// <button type="button" class="py-2.5 px-5 me-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700">Paper</button>
// <button type="button" class="text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700">Scissors</button>
// </div> 
// <div className="flex justify-center mt-5">
//         <div className="bg-blue-200 shadow-md rounded-md p-4 w-64">
//           <h2 className="text-lg font-semibold">User Score</h2>
//           <p className="text-3xl font-bold mt-2">0</p>
//         </div>
//         <div className="bg-gray-200 shadow-md rounded-md p-4 w-64 ml-5">
//           <h2 className="text-lg font-semibold">AI Score</h2>
//           <p className="text-3xl font-bold mt-2">0</p>
//         </div>
//       </div>
// </div>
//   )
// }
// import React, { useState } from 'react';
// import axios from 'axios';

// export default function Home() {
//   const [selectedOption, setSelectedOption] = useState('');

//   const handleClick = async (option) => {
//     setSelectedOption(option);
//     try {
//       const response = await axios.post('http://localhost:5000/play', { option });
//       console.log(response.data); // You can handle the response here
//     } catch (error) {
//       console.error('Error:', error);
//     }
//   };

//   return (
//     <div className="px-5 py-5">
//       <div className="px-4 py-5 flex justify-center">
//         <button
//           type="button"
//           className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
//           onClick={() => handleClick('Rock')}
//         >
//           Rock
//         </button>
//         <button
//           type="button"
//           className="py-2.5 px-5 me-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
//           onClick={() => handleClick('Paper')}
//         >
//           Paper
//         </button>
//         <button
//           type="button"
//           className="text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700"
//           onClick={() => handleClick('Scissors')}
//         >
//           Scissors
//         </button>
//       </div>
//       <div className="flex justify-center mt-5">
//         <div className="bg-blue-200 shadow-md rounded-md p-4 w-64">
//           <h2 className="text-lg font-semibold">User Score</h2>
//           <p className="text-3xl font-bold mt-2">0</p>
//         </div>
//         <div className="bg-gray-200 shadow-md rounded-md p-4 w-64 ml-5">
//           <h2 className="text-lg font-semibold">AI Score</h2>
//           <p className="text-3xl font-bold mt-2">0</p>
//         </div>
//       </div>
//     </div>
//   );
// }
import React, { useState } from 'react';
import axios from 'axios';

export default function Home() {
  const [selectedOption, setSelectedOption] = useState('');
  const [capitalizedOption, setCapitalizedOption] = useState('');

  const handleClick = async (option) => {
    setSelectedOption(option);
    try {
      const response = await axios.post('http://localhost:5000/play', { option });
      setCapitalizedOption(response.data.selected_option); // Set the capitalized text
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <div className="px-5 py-5">
      <div className="px-4 py-5 flex justify-center">
        <button
          type="button"
          className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
          onClick={() => handleClick('Rock')}
        >
          Rock
        </button>
        <button
          type="button"
          className="py-2.5 px-5 me-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
          onClick={() => handleClick('Paper')}
        >
          Paper
        </button>
        <button
          type="button"
          className="text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700"
          onClick={() => handleClick('Scissors')}
        >
          Scissors
        </button>
      </div>
      <div className="flex justify-center mt-5">
        <div className="bg-blue-200 shadow-md rounded-md p-4 w-64">
          <h2 className="text-lg font-semibold">User Score</h2>
          <p className="text-3xl font-bold mt-2">{capitalizedOption}</p> {/* Display capitalized text */}
        </div>
        <div className="bg-gray-200 shadow-md rounded-md p-4 w-64 ml-5">
          <h2 className="text-lg font-semibold">AI Score</h2>
          <p className="text-3xl font-bold mt-2">0</p>
        </div>
      </div>
    </div>
  );
}
