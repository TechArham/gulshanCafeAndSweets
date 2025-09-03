// import React from "react";
// import Image from "next/image";
// const SingleMenu = ({header,title,foodImage,foodName,price,description,sideImage}) => {
//   return (
//     <div>
//       <div className="min-h-screen bg-gradient-to-br from-orange-50 to-red-50 text-black relative overflow-hidden">
//         <div className="grid grid-cols-1 md:grid-cols-12 gap-20 min-h-screen">
//           {/* Main Content */}
//           <div className="col-span-12 md:col-span-8 py-10 px-6 md:px-12 lg:py-20 z-10 relative">
//             <div className="max-w-4xl mx-auto">
//               {/* Header */}
//               <div className="text-center mb-10 mx-auto">
//                 <h1 className="text-4xl md:text-5xl font-light tracking-[0.3em] mb-3 uppercase">
//                   {header}
//                 </h1>
//                 <p className="text-xl md:text-2xl text-red-700 font-serif italic mb-5">
//                   {title}
//                 </p>
//                 <div className="w-18 h-1 bg-red-700 text-center mx-auto"></div>
//               </div>

//               {/* Menu Grid */}
//               <div className="grid grid-cols-1 md:grid-cols-2 gap-x-6 md:gap-x-16 gap-y-8 lg:px-10">
//                 {menuItems.map((item) => (
//                   <div key={item.id} className="flex items-start space-x-4">
//                     {/* Food Image */}
//                     <div className="flex-shrink-0 w-16 h-16 rounded-full overflow-hidden">
//                       <Image
//                         src={foodImage}
//                         alt='Food Image'
//                         width={64}
//                         height={64}
//                         className="w-full h-full object-cover"
//                       />
//                     </div>

//                     {/* Content */}
//                     <div className="flex-1 min-w-0">
//                       <div className="flex items-start justify-between mb-2">
//                         <h3 className="text-lg font-semibold text-gray-600 font-oswald">
//                           {foodName}
//                         </h3>
//                         <span className="text-lg font-semibold text-red-700 ml-4 flex-shrink-0">
//                           {price}
//                         </span>
//                       </div>
//                       <p className="text-sm font-medium text-gray-400 leading-relaxed">
//                         {description}
//                       </p>
//                     </div>
//                   </div>
//                 ))}
//               </div>
//             </div>
//           </div>

//           {/* Side Image */}
//           <div className="col-span-12 md:col-span-4 relative">
//             <Image
//               src={sideImage}
//               alt="Food background"
//               fill
//               className="object-cover"
//               priority
//             />
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default SingleMenu;
