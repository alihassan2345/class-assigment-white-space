// "use client";
// import { useState } from "react";
// import { IoChatbubbleOutline } from "react-icons/io5";
// import { CiMail } from "react-icons/ci";
// import { IoVideocamOutline } from "react-icons/io5";
// import { IoCameraOutline } from "react-icons/io5";
// import { IoSettingsOutline } from "react-icons/io5";
// import { IoHomeOutline } from "react-icons/io5";
// import { RiAccountCircleLine } from "react-icons/ri";
// import { IoMicOutline } from "react-icons/io5";
// import { RxCross2 } from "react-icons/rx";
// const iconsArray = [
//   [
//     { tag: <IoCameraOutline className="h-3/5 w-3/5" />, id: 7 },
//     { tag: <CiMail className="h-3/5 w-3/5" />, id: 3 },
//   ],
//   [
//     { tag: <RiAccountCircleLine className="h-3/5 w-3/5" />, id: 1 },
//     { tag: <IoMicOutline className="h-3/5 w-3/5" />, id: 5 },
//   ],
//   [
//     { tag: <IoHomeOutline className="h-3/5 w-3/5" />, id: 0 },
//     { tag: <IoVideocamOutline className="h-3/5 w-3/5" />, id: 4 },
//   ],
//   [
//     { tag: <IoSettingsOutline className="h-3/5 w-3/5" />, id: 6 },
//     { tag: <IoChatbubbleOutline className="h-3/5 w-3/5" />, id: 2 },
//   ],
// ];

// const page = () => {
//   const [angles] = useState<number[]>([
//     45, 90, 135, 180, 225, 270, 315, 360,
//   ]);
//   const [target, setTarget] = useState(7);
//   const [change, setChange] = useState(false);
//   const [display, setdisplay] = useState(false);
//   const [delayedDisplay, setDelayedDisplay] = useState(false);
//   const openOptions = () => {
//     setChange((val) => !val);
//     setdisplay((val) => !val);
//     setTimeout(() => {
//       setDelayedDisplay((val) => !val)
//     }, 100);
//   }
//   return (
//     <main className="relative h-screen w-full bg-[#F8D7AC]">
//         <div className={`h-20 w-20 z-10 ${display ? "bg-[#212236]" : "bg-white"} rounded-full absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex items-center justify-center cursor-pointer`}
//         onClick={() => openOptions()}>
//           <RxCross2 className={`h-3/5 w-3/5 duration-300 ${display ? "text-white": "text-[#212236] rotate-[225deg]"}`} />
//         </div>
//       <section className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 ${change ? "h-52 w-52" : "h-0 w-0"} bg-white rounded-full duration-500`}>
//         <div
//           className={`absolute top-1/2 left-1/2 h-[120%] w-14 py-[1px] ${delayedDisplay ? "inline-block" : "hidden"}`}
//           style={{
//             transform: `translate(-50%, -50%) rotateZ(${angles[target]}deg)`,
//             transition: `transform 0.3s cubic-bezier(0.76, 0, 0.24, 1)`
//           }}
//         >
//           <span className="h-14 w-14 rounded-full bg-[#05FF70] border-4 border-black flex"></span>
//         </div>
//         {["rotate-0", "rotate-90", "rotate-45", "-rotate-45"].map(
//           (val, ind) => (
//             <div
//               key={ind}
//               className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-52 w-14 items-center justify-between flex-col py-[1px] bg-red-600 ${val} ${delayedDisplay ? "flex" : "hidden"}`}
//             >
//               {iconsArray[ind].map((element, ind) => {
//                 const stabalitiy: string =
//                   val.charAt(0) === "-" ? val.slice(1) : "-" + val; 
//                 return (
//                     <span
//                       onClick={() => setTarget(element.id)}
//                       key={ind }
//                       className={`h-14 w-14 rounded-full flex items-center justify-center cursor-pointer duration-300 ${stabalitiy} ${
//                         element.id === target ?
//                         `${(element.id > 1 && element.id < 6) ? "translate-y-5" : "-translate-y-5"}`
//                         : "translate-y-0"
//                       }`}>
//                       {element.tag}
//                     </span>
//                 );
//               })}
//             </div>
//           )
//         )}
//       </section>
//     </main>
//   );
// };

// export default page;