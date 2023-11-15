// import React, { useState } from 'react';
// import axios from 'axios';
  
//   const Registration = () => {
//     const [userName, setUserName] = useState('');
//     const [email, setEmail] = useState('');
//     const [password, setPassword] = useState('');
  
//     const handleRegistration = async () => {
//       try {
//         // Send the data to the server using Axios or another method
//         const response = await axios.post('http://localhost:5000/regester ', {
//           userName,
//           email,
//           password,
//         });
  
//         // Handle the response as per your application's needs
//         alert('Server Response:', response.data);
  
//         // You can also redirect the user to another page after registration
//       } catch (error) {
//         alert('An error occurred during registration:', error);
//       }
//     };

//   return (
//     <div><>
//     {/* component */}
//     <style
//       dangerouslySetInnerHTML={{
//         __html:
//           "@import url('https://api.time.com/wp-content/uploads/2023/03/Worlds-Greatest-Places-Aqaba-Jordan.jpg')"
//       }}
//     />
//     <div className="min-w-screen min-h-screen bg-gray-900 flex items-center justify-center px-5 py-5">
//       <div
//         className="bg-gray-100 text-gray-500 rounded-3xl shadow-xl w-full overflow-hidden"
//         style={{ maxWidth: 1000 }}
//       >
//         <div className="md:flex w-full">
//            <div className="hidden md:block w-1/2 bg-indigo-500 py-10 px-10">
//             <div>
//               <img src="https://www.allen.ac.in/apps2324/assets/images/reset-password.jpg" alt="" />
//             </div>
            
//           </div> 
//           <div className="w-full md:w-1/2 py-10 px-5 md:px-10">
//             <div className="text-center mb-10">
//               <h1 className="font-bold text-3xl text-gray-900">REGISTER</h1>
//               <p>Enter your information to register</p>
//             </div>
//             <div>
//               <div >
//                 <div>
//                 <label htmlFor="userName"    
//                className="text-xs font-semibold px-1"> User Name</label>


//                   <div id='s' className="flex">
//                     <div className="w-10 z-10 pl-1 text-center pointer-events-none flex items-center justify-center">
//                       <i className="mdi mdi-account-outline text-gray-400 text-lg" />
//                     </div>
//                     <input onChange={(e) => setUserName(e.target.value)}
//                       type="text"
//                       className="w-full -ml-10 pl-10 pr-3 py-2 rounded-lg border-2 border-gray-200 outline-none focus:border-indigo-500"
//                       placeholder="Ahmad"
//                     />
//                   </div>
//                 </div>
       
//               </div>
              
//               <div className="flex -mx-3">
//                 <div className="w-full px-3 mb-5">
//                   <label htmlFor=""  className="text-xs font-semibold px-1">
//                     Email
//                   </label>
                  
//                   <div className="flex">
//                     <div className="w-10 z-10 pl-1 text-center pointer-events-none flex items-center justify-center">
//                       <i className="mdi mdi-email-outline text-gray-400 text-lg" />
//                     </div>
//                     <input onChange={(e)=>setEmail(e.target.value)}
//                       type="email"
//                       className="w-full -ml-10 pl-10 pr-3 py-2 rounded-lg border-2 border-gray-200 outline-none focus:border-indigo-500"
//                       placeholder="Ahmad@example.com"
//                     />
//                   </div>
//                 </div>
//               </div>
//               <div className="flex -mx-3">
//                 <div className="w-full px-3 mb-12">
//                   <label htmlFor=""  className="text-xs font-semibold px-1">
//                     Password
//                   </label>
//                   <div className="flex">
//                     <div className="w-10 z-10 pl-1 text-center pointer-events-none flex items-center justify-center">
//                       <i className="mdi mdi-lock-outline text-gray-400 text-lg" />
//                     </div>
//                     <input onChange={(e)=>setPassword(e.target.value)}
//                       type="password"
//                       className="w-full -ml-10 pl-10 pr-3 py-2 rounded-lg border-2 border-gray-200 outline-none focus:border-indigo-500"
//                       placeholder="************"
//                     />
//                   </div>
//                 </div>
//               </div>
//               <div className="flex -mx-3">
//                 <div className="w-full px-3 mb-5">
                  
//                 <form >
//                 {/* ... input fields */}
//                 <button onSubmit={handleRegistration}
//                  type="submit"
//                  className="block w-full max-w-xs mx-auto bg-indigo-500 hover:bg-indigo-700 focus:bg-indigo-700 text-white rounded-lg px-3 py-3 font-semibold">
//                  REGISTER NOW
//                  </button>
//                  </form>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//     {/* BUY ME A BEER AND HELP SUPPORT OPEN-SOURCE RESOURCES */}
//     <div className="flex items-end justify-end fixed bottom-0 right-0 mb-4 mr-4 z-10">
   
//     </div>
//   </>
//   </div>
//   )
// } 

// export default Registration