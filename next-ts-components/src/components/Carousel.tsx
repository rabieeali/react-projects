// import React, { useState, useEffect } from 'react';
// import Image from 'next/image';

// type CarouselProps = {
//   images: string[];
//   autoplay?: boolean;
//   interval?: number;
// };

// const Carousel: React.FC<CarouselProps> = ({
//   images,
//   autoplay = false,
//   interval = 3000,
// }) => {
//   const [currentSlide, setCurrentSlide] = useState(0);

//   useEffect(() => {
//     let intervalId: number;

//     if (autoplay) {
//       intervalId = setInterval(() => {
//         setCurrentSlide((currentSlide + 1) % images.length);
//       }, interval);
//     }

//     return () => clearInterval(intervalId);
//   }, [autoplay, currentSlide, images.length, interval]);

//   const handlePrevClick = () => {
//     setCurrentSlide((currentSlide - 1 + images.length) % images.length);
//   };

//   const handleNextClick = () => {
//     setCurrentSlide((currentSlide + 1) % images.length);
//   };

//   return (
//     <div className="relative">
//       <div className="overflow-hidden">
//         {images.map((src, index) => (
//           <Image
//             key={src}
//             src={src}
//             alt={`Slide ${index + 1}`}
//             width={640}
//             height={360}
//             layout="responsive"
//             style={{
//               position: 'absolute',
//               top: 0,
//               left: `${index * 100}%`,
//               width: '100%',
//               height: '100%',
//               transition: 'left 0.5s ease-in-out',
//             }}
//           />
//         ))}
//       </div>

//       <div className="absolute top-1/2 left-0 transform -translate-y-1/2 w-full flex items-center justify-between">
//         <button
//           type="button"
//           className="px-4 py-2 text-gray-800 bg-white rounded-full shadow-md hover:shadow-lg focus:outline-none"
//           onClick={handlePrevClick}
//         >
//           Previous
//         </button>

//         <div className="flex space-x-1">
//           {images.map((_, index) => (
//             <button
//               key={index}
//               type="button"
//               className={`w-3 h-3 rounded-full ${
//                 currentSlide === index ? 'bg-gray-900' : 'bg-gray-400'
//               }`}
//               onClick={() => setCurrentSlide(index)}
//             />
//           ))}
//         </div>

//         <button
//           type="button"
//           className="px-4 py-2 text-gray-800 bg-white rounded-full shadow-md hover:shadow-lg focus:outline-none"
//           onClick={handleNextClick}
//         >
//           Next
//         </button>
//       </div>
//     </div>
//   );
// };

// export default Carousel;
