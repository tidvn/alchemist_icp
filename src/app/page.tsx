// "use client";
// import React from "react";
// // import { useNavigate } from "react-router-dom";
// import { Button } from "flowbite-react";
// import { Swiper, SwiperSlide } from "swiper/react";
// import { Parallax } from "react-scroll-parallax";
// import Atropos from "atropos/react";

// // import { getSiteUrl } from "../libs/links";
// import TeamMember from "../components/Member/TeamMember";
// import CoinPrice from "../components/CoinMarket/CoinPrice";
// import SubscriptionForm from "../components/Forms/SubscriptionForm";
// import Circular2 from "../components/Circulars/Circular2";
// import Circular1 from "../components/Circulars/Circular1";
// import Circular3 from "../components/Circulars/Circular3";
// import Circular4 from "../components/Circulars/Circular4";
// import Circular5 from "../components/Circulars/Circular5";
// import Circular6 from "../components/Circulars/Circular6";
// import Circular7 from "../components/Circulars/Circular7";
// import CardLayout1 from "../components/Card/CardLayout1";
// import CardLayout2 from "../components/Card/CardLayout2";

// import members from "../data/member.json";
// import advisors from "../data/advisors.json";
// import prices from "../data/prices.json";

// function LandingPage() {
//   // const navigate = useNavigate();

//   return (
//     <>
//       <section
//         className="section relative z-10 py-12 overflow-hidden"
//         id="section-main"
//       >
//         <div className="absolute z-0 top-0 left-0">
//           <Parallax speed={10}>
//             <img
//               src="/img/banners/main-homepage-bgleft.png"
//               width="1224"
//               height="1097"
//               loading="lazy"
//               alt=""
//               style={{ width: 612 }}
//             />
//           </Parallax>
//         </div>

//         <div className="absolute z-0 top-0 right-0">
//           <Parallax speed={-10}>
//             <img
//               src="/img/banners/main-homepage-bgright.png"
//               width="1358"
//               height="1156"
//               loading="lazy"
//               alt=""
//               style={{ width: 679 }}
//             />
//           </Parallax>
//         </div>

//         <div className="relative z-0 mb-4 lg:mb-0">
//           <div className="lg:flex lg:flex-row-reverse">
//             <div className="flex-shrink-0">
//               <Atropos shadow={false} highlight={false} rotateTouch={false}>
//                 <img
//                   src="/img/main-banner-1.png"
//                   width="1427"
//                   height="1040"
//                   loading="lazy"
//                   alt=""
//                   style={{ width: 713 }}
//                 />
//               </Atropos>
//             </div>
//           </div>
//         </div>

//         <div className="lg:absolute inset-0 z-40 lg:flex justify-start items-center">
//           <div className="container">
//             <div className="">
//               <div className="text-center lg:text-left">
//                 <h1 className="font-bold text-xxl lg:text-5xl !leading-1.5 lg:mb-1">
//                   <span className="text-neutral1">Alchemist</span>
//                   <br />
//                   <span className="text-gradient-1">All For Traders</span>
//                 </h1>

//                 <p className="text-sm lg:text-lg text-neutral3 mb-10 lg:mb-20">
//                   A data-driven platform <br />
//                   Valuable insights that help you make better decisions
//                 </p>

//                 <Button
//                   pill
//                   size="lg"
//                   // onClick={() =>
//                   //   navigate(getSiteUrl("/academy/start-learning"))
//                   // }
//                 >
//                   <span className="button__bg"></span>
//                   <svg
//                     className="mr-3"
//                     width="30"
//                     height="30"
//                     viewBox="0 0 30 30"
//                     fill="none"
//                     xmlns="http://www.w3.org/2000/svg"
//                   >
//                     <circle cx="15" cy="15" r="15" fill="white" />
//                     <path
//                       fillRule="evenodd"
//                       clipRule="evenodd"
//                       d="M16.8288 21.9515H13.902C13.3166 21.9515 12.7298 21.1298 12.2381 19.9569L10.2434 21.9515L9.51172 21.2198V18.293L11.2554 16.5493C11.0776 15.604 10.9751 14.6762 10.9751 13.9027C10.9751 10.9759 13.1703 7.31738 15.3654 7.31738C17.5605 7.31738 19.7556 10.9759 19.7556 13.9027C19.7556 14.6769 19.6532 15.604 19.4754 16.5493L21.219 18.293V21.2198L20.4873 21.9515L18.4927 19.9569C18.001 21.1298 17.4149 21.9515 16.8288 21.9515ZM15.3654 20.4881H14.1837C14.1371 20.4296 14.0934 20.3687 14.0527 20.3059C13.7988 19.9166 13.5259 19.3071 13.2778 18.5623C12.7715 17.0418 12.4385 15.1869 12.4385 13.9027C12.4385 11.5627 14.2268 8.7808 15.3654 8.7808C16.5039 8.7808 18.2922 11.5627 18.2922 13.9027C18.2922 15.1869 17.9593 17.0425 17.4529 18.5623C17.2042 19.3071 16.932 19.9159 16.6773 20.3059C16.6369 20.3687 16.5934 20.4295 16.5471 20.4881H15.3654ZM15.3654 14.6345C15.7535 14.6345 16.1257 14.4803 16.4002 14.2058C16.6746 13.9314 16.8288 13.5592 16.8288 13.171C16.8288 12.7829 16.6746 12.4107 16.4002 12.1363C16.1257 11.8618 15.7535 11.7076 15.3654 11.7076C14.9773 11.7076 14.605 11.8618 14.3306 12.1363C14.0561 12.4107 13.902 12.7829 13.902 13.171C13.902 13.5592 14.0561 13.9314 14.3306 14.2058C14.605 14.4803 14.9773 14.6345 15.3654 14.6345Z"
//                       fill="#1A64F0"
//                     />
//                   </svg>
//                   Get Started Now
//                 </Button>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>

//       <section>
//         <div className="container">
//           <div className="flex justify-center items-center">
//             <Swiper
//               breakpoints={{
//                 0: {
//                   spaceBetween: 16,
//                   slidesPerView: 1.5,
//                 },
//                 480: {
//                   spaceBetween: 16,
//                   slidesPerView: 2.5,
//                 },
//                 720: {
//                   spaceBetween: 16,
//                   slidesPerView: 3.5,
//                 },
//                 920: {
//                   spaceBetween: 50,
//                   slidesPerView: 4.5,
//                 },
//                 1440: {
//                   spaceBetween: 50,
//                   slidesPerView: 7,
//                 },
//               }}
//             >
//               {prices.map((price, index) => (
//                 <SwiperSlide key={index}>
//                   <CoinPrice key={index} coinInfo={price} />
//                 </SwiperSlide>
//               ))}
//             </Swiper>
//           </div>
//         </div>
//       </section>

//       <section className="section py-10 lg:pt-20 lg:pb-32">
//         <div className="container">
//           <header className="section__header text-center mb-6 lg:mb-24">
//             <p className="text-center mb-8" data-aos="zoom-in-up">
//               <img
//                 className="inline-block"
//                 src="/img/logo-circle.svg"
//                 alt=""
//                 width="60"
//                 height="60"
//                 loading="lazy"
//               />
//             </p>

//             <h2 className="section__title mb-2 text-neutral1">
//               Explore endless{" "}
//               <span className="text-primary">possibilities</span>
//             </h2>

//             <p className="section__subtitle">
//               We provide users with various features to connect <br /> and grow
//               their income streams
//             </p>
//           </header>

//           <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
//             <CardLayout1
//               image="/img/illustrations/icon1-1.svg"
//               imageAlt="/img/illustrations/icon1.svg"
//               title="Grow your assets by making more informed decisions"
//               description="Predict trends, develop winning strategies, and access to our in-depth resources."
//             />

//             <CardLayout1
//               image="/img/illustrations/icon2.svg"
//               imageAlt="/img/illustrations/icon2-2.svg"
//               title="Discover 'hidden gem' cryptos"
//               description="Identify potentially game-changing crypto projects on Alchemist Trade & Alchemist Social features"
//             />

//             <CardLayout1
//               image="/img/illustrations/icon3.svg"
//               imageAlt="/img/illustrations/icon3-3.svg"
//               title="Keep up with the market"
//               description="Stay on top of the markets with our most accurate and up-to-date news"
//             />
//           </div>
//         </div>
//       </section>

//       <section className="section bg-gradient-1 text-white pt-[140px] pb-[100px] overflow-hidden">
//         <div className="container">
//           <div className="grid grid-cols-12 items-center lg:gap-8">
//             <div className="col-span-12 lg:col-span-7">
//               <div className="flex gap-8 lg:gap-16 items-center">
//                 <div className="relative z-10 pl-16 lg:pl-24 pt-16 lg:pt-24 pb-4 lg:pb-16">
//                   <div className="absolute z-0 top-0 lg:top-0 left-8 lg:left-0">
//                     <Circular3 spinWhenScroll />
//                   </div>

//                   <div className="absolute z-0 bottom-0 left-3/4 lg:left-1/2">
//                     <Circular4 autoSpin />
//                   </div>

//                   <div className="relative z-20">
//                     <Parallax speed={-5}>
//                       <Atropos
//                         shadow={false}
//                         highlight={false}
//                         rotateTouch={false}
//                       >
//                         <img
//                           src="/img/mockups/mockup1.png"
//                           alt=""
//                           width="520"
//                           height="1292"
//                           style={{ width: 260 }}
//                         />
//                       </Atropos>
//                     </Parallax>
//                   </div>
//                 </div>

//                 <div className="relative z-20 flex flex-col gap-16 pr-12">
//                   <Parallax speed={2}>
//                     <img
//                       className="rounded-lg shadow-4"
//                       src="/img/mockups/card-crypto.png"
//                       alt=""
//                       width="369"
//                       height="380"
//                       style={{ width: 184 }}
//                     />
//                   </Parallax>

//                   <Parallax speed={5}>
//                     <img
//                       className="rounded-lg shadow-4"
//                       src="/img/mockups/card-btc.png"
//                       alt=""
//                       width="410"
//                       height="216"
//                       style={{ width: 205 }}
//                     />
//                   </Parallax>
//                 </div>
//               </div>
//             </div>

//             <div className="col-span-12 lg:col-span-5 mt-16 lg:mt-0">
//               <header>
//                 <h2 className="section__title lg:text-[3.5rem] leading-1.5 mb-2">
//                   <span className="text-secondary">Alchemist</span> Trade
//                 </h2>

//                 <p className="text-neutral4">
//                   Follow and/or Create Trading Algorithms
//                 </p>
//               </header>

//               <ul className="flex flex-col gap-8 divide-custom-y mt-8 xl:max-w-[470px]">
//                 <li className="flex items-center gap-6">
//                   <img
//                     src="/img/illustrations/icon4.svg"
//                     alt=""
//                     width="56"
//                     height="56"
//                   />
//                   <div>
//                     <h4 className="text-lg lg:text-2xl font-bold mb-1 leading-1.5">
//                       Increase your winning rate
//                     </h4>
//                     <p className="text-sm text-neutral4">
//                       Improve the accuracy of the crypto market predictions
//                     </p>
//                   </div>
//                 </li>

//                 <li className="flex items-center gap-6 pt-8">
//                   <img
//                     src="/img/illustrations/icon5.svg"
//                     alt=""
//                     width="56"
//                     height="56"
//                   />
//                   <div>
//                     <h4 className="text-lg lg:text-2xl font-bold mb-1 leading-1.5">
//                       Keep an eye on the Market
//                     </h4>
//                     <p className="text-sm text-neutral4">
//                       Get notified when a potentially profitable crypto meets
//                       your strategy
//                     </p>
//                   </div>
//                 </li>

//                 <li className="flex items-center gap-6 pt-8">
//                   <img
//                     src="/img/illustrations/icon6.svg"
//                     alt=""
//                     width="56"
//                     height="56"
//                   />
//                   <div>
//                     <h4 className="text-lg lg:text-2xl font-bold mb-1 leading-1.5">
//                       Customize your Trading Algorithms
//                     </h4>
//                     <p className="text-sm text-neutral4">
//                       Adjust the provided formulas or create your own to track
//                       specific trading pairs
//                     </p>
//                   </div>
//                 </li>
//               </ul>
//             </div>
//           </div>
//         </div>
//       </section>

//       <section className="section py-10 lg:pt-[120px] lg:pb-[140px]">
//         <div className="container">
//           <header className="section__header text-center mb-12">
//             <h2 className="section__title text-neutral1">
//               Create your crypto <br />
//               <span className="text-primary">portfolio</span> today
//             </h2>

//             <p className="section__subtitle">
//               Begin your first trade in a few minutes
//             </p>
//           </header>

//           <div className="flex flex-col lg:flex-row justify-center items-center">
//             <Button pill size="lg">
//               <div className="button__bg"></div>
//               <svg
//                 className="mr-3"
//                 width="30"
//                 height="30"
//                 viewBox="0 0 30 30"
//                 fill="none"
//                 xmlns="http://www.w3.org/2000/svg"
//               >
//                 <circle cx="15" cy="15" r="15" fill="white" />
//                 <path
//                   fillRule="evenodd"
//                   clipRule="evenodd"
//                   d="M16.8288 21.9515H13.902C13.3166 21.9515 12.7298 21.1298 12.2381 19.9569L10.2434 21.9515L9.51172 21.2198V18.293L11.2554 16.5493C11.0776 15.604 10.9751 14.6762 10.9751 13.9027C10.9751 10.9759 13.1703 7.31738 15.3654 7.31738C17.5605 7.31738 19.7556 10.9759 19.7556 13.9027C19.7556 14.6769 19.6532 15.604 19.4754 16.5493L21.219 18.293V21.2198L20.4873 21.9515L18.4927 19.9569C18.001 21.1298 17.4149 21.9515 16.8288 21.9515ZM15.3654 20.4881H14.1837C14.1371 20.4296 14.0934 20.3687 14.0527 20.3059C13.7988 19.9166 13.5259 19.3071 13.2778 18.5623C12.7715 17.0418 12.4385 15.1869 12.4385 13.9027C12.4385 11.5627 14.2268 8.7808 15.3654 8.7808C16.5039 8.7808 18.2922 11.5627 18.2922 13.9027C18.2922 15.1869 17.9593 17.0425 17.4529 18.5623C17.2042 19.3071 16.932 19.9159 16.6773 20.3059C16.6369 20.3687 16.5934 20.4295 16.5471 20.4881H15.3654ZM15.3654 14.6345C15.7535 14.6345 16.1257 14.4803 16.4002 14.2058C16.6746 13.9314 16.8288 13.5592 16.8288 13.171C16.8288 12.7829 16.6746 12.4107 16.4002 12.1363C16.1257 11.8618 15.7535 11.7076 15.3654 11.7076C14.9773 11.7076 14.605 11.8618 14.3306 12.1363C14.0561 12.4107 13.902 12.7829 13.902 13.171C13.902 13.5592 14.0561 13.9314 14.3306 14.2058C14.605 14.4803 14.9773 14.6345 15.3654 14.6345Z"
//                   fill="#1A64F0"
//                 />
//               </svg>
//               Create an Account
//             </Button>

//             <div>
//               <div className="vertical-line inline-flex lg:hidden mt-2">
//                 <svg
//                   className="vertical-line__line"
//                   width="2"
//                   height="56"
//                   viewBox="0 0 2 56"
//                   fill="none"
//                   xmlns="http://www.w3.org/2000/svg"
//                 >
//                   <line
//                     x1="0.999756"
//                     y1="4.37114e-08"
//                     x2="0.999753"
//                     y2="56"
//                     stroke="#1A64F0"
//                     strokeWidth="2"
//                     strokeDasharray="10 10"
//                   />
//                 </svg>

//                 <svg
//                   className="vertical-line__arrow"
//                   width="16"
//                   height="9"
//                   viewBox="0 0 16 9"
//                   fill="none"
//                   xmlns="http://www.w3.org/2000/svg"
//                 >
//                   <path
//                     d="M7.29289 8.2071C7.68341 8.59763 8.31658 8.59763 8.7071 8.20711L15.0711 1.84317C15.4616 1.45264 15.4616 0.819477 15.0711 0.428952C14.6806 0.0384263 14.0474 0.0384245 13.6569 0.428948L8 6.08579L2.34316 0.428917C1.95264 0.0383912 1.31948 0.0383895 0.928951 0.428913C0.538426 0.819436 0.538424 1.4526 0.928947 1.84313L7.29289 8.2071ZM7 7.25L7 7.3125L9 7.3125L9 7.25L7 7.25ZM7 7.4375L7 7.5L9 7.5L9 7.4375L7 7.4375Z"
//                     fill="#1A64F0"
//                   />
//                 </svg>
//               </div>

//               <div className="horizontal-line hidden lg:inline-flex ml-2">
//                 <svg
//                   className="horizontal-line__line"
//                   width="80"
//                   height="2"
//                   viewBox="0 0 80 2"
//                   fill="none"
//                   xmlns="http://www.w3.org/2000/svg"
//                 >
//                   <line
//                     y1="1"
//                     x2="80"
//                     y2="1"
//                     stroke="#1A64F0"
//                     strokeWidth="2"
//                     strokeDasharray="10 10"
//                   />
//                 </svg>

//                 <svg
//                   className="horizontal-line__arrow"
//                   width="10"
//                   height="15"
//                   viewBox="0 0 10 15"
//                   fill="none"
//                   xmlns="http://www.w3.org/2000/svg"
//                 >
//                   <path
//                     d="M8.83211 8.08211C9.22263 7.69158 9.22263 7.05842 8.83211 6.66789L2.46815 0.303932C2.07762 -0.0865921 1.44446 -0.0865921 1.05393 0.303932C0.663408 0.694456 0.663408 1.32762 1.05393 1.71815L6.71079 7.375L1.05393 13.0319C0.663408 13.4224 0.663408 14.0555 1.05393 14.4461C1.44446 14.8366 2.07762 14.8366 2.46815 14.4461L8.83211 8.08211ZM7.875 8.375H7.9375V6.375H7.875V8.375ZM8.0625 8.375H8.125V6.375H8.0625V8.375Z"
//                     fill="#1A64F0"
//                   />
//                 </svg>
//               </div>
//             </div>

//             <Button pill size="lg">
//               <div className="button__bg"></div>
//               <svg
//                 className="mr-3"
//                 width="30"
//                 height="30"
//                 viewBox="0 0 30 30"
//                 fill="none"
//                 xmlns="http://www.w3.org/2000/svg"
//               >
//                 <circle cx="15" cy="15" r="15" fill="white" />
//                 <path
//                   fillRule="evenodd"
//                   clipRule="evenodd"
//                   d="M16.8288 21.9515H13.902C13.3166 21.9515 12.7298 21.1298 12.2381 19.9569L10.2434 21.9515L9.51172 21.2198V18.293L11.2554 16.5493C11.0776 15.604 10.9751 14.6762 10.9751 13.9027C10.9751 10.9759 13.1703 7.31738 15.3654 7.31738C17.5605 7.31738 19.7556 10.9759 19.7556 13.9027C19.7556 14.6769 19.6532 15.604 19.4754 16.5493L21.219 18.293V21.2198L20.4873 21.9515L18.4927 19.9569C18.001 21.1298 17.4149 21.9515 16.8288 21.9515ZM15.3654 20.4881H14.1837C14.1371 20.4296 14.0934 20.3687 14.0527 20.3059C13.7988 19.9166 13.5259 19.3071 13.2778 18.5623C12.7715 17.0418 12.4385 15.1869 12.4385 13.9027C12.4385 11.5627 14.2268 8.7808 15.3654 8.7808C16.5039 8.7808 18.2922 11.5627 18.2922 13.9027C18.2922 15.1869 17.9593 17.0425 17.4529 18.5623C17.2042 19.3071 16.932 19.9159 16.6773 20.3059C16.6369 20.3687 16.5934 20.4295 16.5471 20.4881H15.3654ZM15.3654 14.6345C15.7535 14.6345 16.1257 14.4803 16.4002 14.2058C16.6746 13.9314 16.8288 13.5592 16.8288 13.171C16.8288 12.7829 16.6746 12.4107 16.4002 12.1363C16.1257 11.8618 15.7535 11.7076 15.3654 11.7076C14.9773 11.7076 14.605 11.8618 14.3306 12.1363C14.0561 12.4107 13.902 12.7829 13.902 13.171C13.902 13.5592 14.0561 13.9314 14.3306 14.2058C14.605 14.4803 14.9773 14.6345 15.3654 14.6345Z"
//                   fill="#1A64F0"
//                 />
//               </svg>
//               Connect Wallet
//             </Button>

//             <div>
//               <div className="vertical-line inline-flex lg:hidden mt-2">
//                 <svg
//                   className="vertical-line__line"
//                   width="2"
//                   height="56"
//                   viewBox="0 0 2 56"
//                   fill="none"
//                   xmlns="http://www.w3.org/2000/svg"
//                 >
//                   <line
//                     x1="0.999756"
//                     y1="4.37114e-08"
//                     x2="0.999753"
//                     y2="56"
//                     stroke="#1A64F0"
//                     strokeWidth="2"
//                     strokeDasharray="10 10"
//                   />
//                 </svg>

//                 <svg
//                   className="vertical-line__arrow"
//                   width="16"
//                   height="9"
//                   viewBox="0 0 16 9"
//                   fill="none"
//                   xmlns="http://www.w3.org/2000/svg"
//                 >
//                   <path
//                     d="M7.29289 8.2071C7.68341 8.59763 8.31658 8.59763 8.7071 8.20711L15.0711 1.84317C15.4616 1.45264 15.4616 0.819477 15.0711 0.428952C14.6806 0.0384263 14.0474 0.0384245 13.6569 0.428948L8 6.08579L2.34316 0.428917C1.95264 0.0383912 1.31948 0.0383895 0.928951 0.428913C0.538426 0.819436 0.538424 1.4526 0.928947 1.84313L7.29289 8.2071ZM7 7.25L7 7.3125L9 7.3125L9 7.25L7 7.25ZM7 7.4375L7 7.5L9 7.5L9 7.4375L7 7.4375Z"
//                     fill="#1A64F0"
//                   />
//                 </svg>
//               </div>

//               <div className="horizontal-line hidden lg:inline-flex ml-2">
//                 <svg
//                   className="horizontal-line__line"
//                   width="80"
//                   height="2"
//                   viewBox="0 0 80 2"
//                   fill="none"
//                   xmlns="http://www.w3.org/2000/svg"
//                 >
//                   <line
//                     y1="1"
//                     x2="80"
//                     y2="1"
//                     stroke="#1A64F0"
//                     strokeWidth="2"
//                     strokeDasharray="10 10"
//                   />
//                 </svg>

//                 <svg
//                   className="horizontal-line__arrow"
//                   width="10"
//                   height="15"
//                   viewBox="0 0 10 15"
//                   fill="none"
//                   xmlns="http://www.w3.org/2000/svg"
//                 >
//                   <path
//                     d="M8.83211 8.08211C9.22263 7.69158 9.22263 7.05842 8.83211 6.66789L2.46815 0.303932C2.07762 -0.0865921 1.44446 -0.0865921 1.05393 0.303932C0.663408 0.694456 0.663408 1.32762 1.05393 1.71815L6.71079 7.375L1.05393 13.0319C0.663408 13.4224 0.663408 14.0555 1.05393 14.4461C1.44446 14.8366 2.07762 14.8366 2.46815 14.4461L8.83211 8.08211ZM7.875 8.375H7.9375V6.375H7.875V8.375ZM8.0625 8.375H8.125V6.375H8.0625V8.375Z"
//                     fill="#1A64F0"
//                   />
//                 </svg>
//               </div>
//             </div>

//             <Button pill size="lg">
//               <div className="button__bg"></div>
//               <svg
//                 className="mr-3"
//                 width="30"
//                 height="30"
//                 viewBox="0 0 30 30"
//                 fill="none"
//                 xmlns="http://www.w3.org/2000/svg"
//               >
//                 <circle cx="15" cy="15" r="15" fill="white" />
//                 <path
//                   fillRule="evenodd"
//                   clipRule="evenodd"
//                   d="M16.8288 21.9515H13.902C13.3166 21.9515 12.7298 21.1298 12.2381 19.9569L10.2434 21.9515L9.51172 21.2198V18.293L11.2554 16.5493C11.0776 15.604 10.9751 14.6762 10.9751 13.9027C10.9751 10.9759 13.1703 7.31738 15.3654 7.31738C17.5605 7.31738 19.7556 10.9759 19.7556 13.9027C19.7556 14.6769 19.6532 15.604 19.4754 16.5493L21.219 18.293V21.2198L20.4873 21.9515L18.4927 19.9569C18.001 21.1298 17.4149 21.9515 16.8288 21.9515ZM15.3654 20.4881H14.1837C14.1371 20.4296 14.0934 20.3687 14.0527 20.3059C13.7988 19.9166 13.5259 19.3071 13.2778 18.5623C12.7715 17.0418 12.4385 15.1869 12.4385 13.9027C12.4385 11.5627 14.2268 8.7808 15.3654 8.7808C16.5039 8.7808 18.2922 11.5627 18.2922 13.9027C18.2922 15.1869 17.9593 17.0425 17.4529 18.5623C17.2042 19.3071 16.932 19.9159 16.6773 20.3059C16.6369 20.3687 16.5934 20.4295 16.5471 20.4881H15.3654ZM15.3654 14.6345C15.7535 14.6345 16.1257 14.4803 16.4002 14.2058C16.6746 13.9314 16.8288 13.5592 16.8288 13.171C16.8288 12.7829 16.6746 12.4107 16.4002 12.1363C16.1257 11.8618 15.7535 11.7076 15.3654 11.7076C14.9773 11.7076 14.605 11.8618 14.3306 12.1363C14.0561 12.4107 13.902 12.7829 13.902 13.171C13.902 13.5592 14.0561 13.9314 14.3306 14.2058C14.605 14.4803 14.9773 14.6345 15.3654 14.6345Z"
//                   fill="#1A64F0"
//                 />
//               </svg>
//               Start Buying & Selling
//             </Button>
//           </div>

//           <div className="relative bg-[url(/img/world-map.png)] bg-center bg-no-repeat bg-cover flex items-center justify-center mt-16 lg:pt-0">
//             <div className="absolute z-0 inset-0 overflow-hidden lg:overflow-visible">
//               <div className="absolute -left-3/4 md:-left-1/3 lg:top-8 lg:left-16">
//                 <Circular5 spinWhenScroll />

//                 <div className="absolute bottom-0 right-0">
//                   <Circular7 spinWhenScroll />
//                 </div>
//               </div>

//               <div className="absolute -right-3/4 md:-right-1/3 lg:bottom-0 lg:right-32">
//                 <Circular6 autoSpin />
//               </div>
//             </div>

//             <div className="relative z-10 flex gap-4 justify-center items-center">
//               <div className="self-center hidden lg:block">
//                 <Parallax speed={3}>
//                   <div className="sm-card text-[#BD47FB]">
//                     <div className="sm-card__icon">
//                       <svg
//                         width="36"
//                         height="36"
//                         viewBox="0 0 36 36"
//                         fill="none"
//                         xmlns="http://www.w3.org/2000/svg"
//                       >
//                         <path
//                           d="M3 33H33"
//                           stroke="#BD47FB"
//                           strokeWidth="2.5"
//                           strokeMiterlimit="10"
//                           strokeLinecap="round"
//                           strokeLinejoin="round"
//                         />
//                         <path
//                           d="M14.625 6V33H21.375V6C21.375 4.35 20.7 3 18.675 3H17.325C15.3 3 14.625 4.35 14.625 6Z"
//                           stroke="#BD47FB"
//                           strokeWidth="2.5"
//                           strokeLinecap="round"
//                           strokeLinejoin="round"
//                         />
//                         <path
//                           d="M4.5 15V33H10.5V15C10.5 13.35 9.9 12 8.1 12H6.9C5.1 12 4.5 13.35 4.5 15Z"
//                           stroke="#BD47FB"
//                           strokeWidth="2.5"
//                           strokeLinecap="round"
//                           strokeLinejoin="round"
//                         />
//                         <path
//                           d="M25.5 22.5V33H31.5V22.5C31.5 20.85 30.9 19.5 29.1 19.5H27.9C26.1 19.5 25.5 20.85 25.5 22.5Z"
//                           stroke="#BD47FB"
//                           strokeWidth="2.5"
//                           strokeLinecap="round"
//                           strokeLinejoin="round"
//                         />
//                       </svg>
//                     </div>

//                     <div className="sm-card__content">
//                       <h4>+15%</h4>
//                       <p>Average Profit</p>
//                     </div>
//                   </div>
//                 </Parallax>
//               </div>

//               <div className="">
//                 <Parallax speed={5}>
//                   <Atropos shadow={false} highlight={false} rotateTouch={false}>
//                     <img
//                       src="/img/mockups/mockup2.png"
//                       width="1278"
//                       height="1260"
//                       alt=""
//                       style={{ width: 639 }}
//                     />
//                   </Atropos>
//                 </Parallax>
//               </div>

//               <div className="self-stretch hidden lg:block">
//                 <div className="flex flex-col h-full justify-between pb-16">
//                   <div></div>

//                   <Parallax speed={-3}>
//                     <div className="sm-card text-[#11CABE] relative -left-6">
//                       <div className="sm-card__icon">
//                         <svg
//                           width="36"
//                           height="36"
//                           viewBox="0 0 36 36"
//                           fill="none"
//                           xmlns="http://www.w3.org/2000/svg"
//                         >
//                           <path
//                             d="M10.3198 27.2251V24.1201"
//                             stroke="#11CABE"
//                             strokeWidth="2.5"
//                             strokeLinecap="round"
//                           />
//                           <path
//                             d="M18 27.2246V21.0146"
//                             stroke="#11CABE"
//                             strokeWidth="2.5"
//                             strokeLinecap="round"
//                           />
//                           <path
//                             d="M25.6802 27.2245V17.8945"
//                             stroke="#11CABE"
//                             strokeWidth="2.5"
//                             strokeLinecap="round"
//                           />
//                           <path
//                             d="M25.6798 8.77539L24.9898 9.58539C21.1648 14.0554 16.0348 17.2204 10.3198 18.6454"
//                             stroke="#11CABE"
//                             strokeWidth="2.5"
//                             strokeLinecap="round"
//                           />
//                           <path
//                             d="M21.2852 8.77539H25.6802V13.1554"
//                             stroke="#11CABE"
//                             strokeWidth="2.5"
//                             strokeLinecap="round"
//                             strokeLinejoin="round"
//                           />
//                           <path
//                             d="M13.5 33H22.5C30 33 33 30 33 22.5V13.5C33 6 30 3 22.5 3H13.5C6 3 3 6 3 13.5V22.5C3 30 6 33 13.5 33Z"
//                             stroke="#11CABE"
//                             strokeWidth="2.5"
//                             strokeLinecap="round"
//                             strokeLinejoin="round"
//                           />
//                         </svg>
//                       </div>

//                       <div className="sm-card__content">
//                         <h4>+25%</h4>
//                         <p>Total Profit</p>
//                       </div>
//                     </div>
//                   </Parallax>

//                   <Parallax speed={3}>
//                     <div className="sm-card text-[#1A64F0]">
//                       <div className="sm-card__icon">
//                         <svg
//                           width="36"
//                           height="36"
//                           viewBox="0 0 36 36"
//                           fill="none"
//                           xmlns="http://www.w3.org/2000/svg"
//                         >
//                           <path
//                             d="M27.7495 18.9746V24.5246C27.7495 29.2046 23.3845 32.9996 17.9995 32.9996C12.6145 32.9996 8.24951 29.2046 8.24951 24.5246V18.9746C8.24951 23.6546 12.6145 26.9996 17.9995 26.9996C23.3845 26.9996 27.7495 23.6546 27.7495 18.9746Z"
//                             stroke="#1A64F0"
//                             strokeWidth="2.5"
//                             strokeLinecap="round"
//                             strokeLinejoin="round"
//                           />
//                           <path
//                             d="M27.7495 11.475C27.7495 12.84 27.3745 14.1 26.7145 15.18C25.1095 17.82 21.8095 19.5 17.9995 19.5C14.1895 19.5 10.8895 17.82 9.28452 15.18C8.62452 14.1 8.24951 12.84 8.24951 11.475C8.24951 9.135 9.3445 7.02 11.0995 5.49C12.8695 3.945 15.2995 3 17.9995 3C20.6995 3 23.1295 3.945 24.8995 5.475C26.6545 7.02 27.7495 9.135 27.7495 11.475Z"
//                             stroke="#1A64F0"
//                             strokeWidth="2.5"
//                             strokeLinecap="round"
//                             strokeLinejoin="round"
//                           />
//                           <path
//                             d="M27.7495 11.475V18.975C27.7495 23.655 23.3845 27 17.9995 27C12.6145 27 8.24951 23.655 8.24951 18.975V11.475C8.24951 6.795 12.6145 3 17.9995 3C20.6995 3 23.1295 3.945 24.8995 5.475C26.6545 7.02 27.7495 9.135 27.7495 11.475Z"
//                             stroke="#1A64F0"
//                             strokeWidth="2.5"
//                             strokeLinecap="round"
//                             strokeLinejoin="round"
//                           />
//                         </svg>
//                       </div>

//                       <div className="sm-card__content">
//                         <h4>600+</h4>
//                         <p>Cryptocurrencies</p>
//                       </div>
//                     </div>
//                   </Parallax>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>

//       <section className="section bg-gradient-1 text-white pt-16 pb-16">
//         <div className="container">
//           <div className="flex flex-col lg:flex-row justify-between items-center gap-6">
//             <div>
//               <header>
//                 <h2 className="section__title leading-1.5">
//                   <span className="text-secondary">Trade</span> anywhere,
//                   <br /> anytime
//                 </h2>

//                 <p className="section__subtitle text-neutral4">
//                   Stay on top of the market with our app and desktop client.
//                 </p>
//               </header>

//               <div className="hidden lg:flex gap-4 items-center mt-16">
//                 <a href="#">
//                   <img
//                     className="rounded-xl shadow-3"
//                     src="/img/appstore.svg"
//                     alt="App Store"
//                     width="241"
//                     height="72"
//                   />
//                 </a>

//                 <a href="#">
//                   <img
//                     className="rounded-xl shadow-3"
//                     src="/img/googleplay.svg"
//                     alt="Google Play"
//                     width="241"
//                     height="72"
//                   />
//                 </a>
//               </div>
//             </div>

//             <div className="flex-shrink-0">
//               <div className="relative">
//                 <Parallax speed={3}>
//                   <img
//                     src="/img/mockups/mockup3.png"
//                     width="1228"
//                     height="1116"
//                     alt=""
//                     style={{ width: 614 }}
//                   />
//                 </Parallax>

//                 <svg
//                   className="hidden lg:inline-block absolute bottom-0 left-0"
//                   width="481"
//                   height="49"
//                   viewBox="0 0 481 49"
//                   fill="none"
//                   xmlns="http://www.w3.org/2000/svg"
//                 >
//                   <g filter="url(#filter0_b_41_1348)">
//                     <ellipse
//                       cx="240.5"
//                       cy="24.5"
//                       rx="240.5"
//                       ry="24.5"
//                       fill="url(#paint0_radial_41_1348)"
//                     />
//                   </g>
//                   <defs>
//                     <filter
//                       id="filter0_b_41_1348"
//                       x="-2"
//                       y="-2"
//                       width="485"
//                       height="53"
//                       filterUnits="userSpaceOnUse"
//                       colorInterpolationFilters="sRGB"
//                     >
//                       <feFlood floodOpacity="0" result="BackgroundImageFix" />
//                       <feGaussianBlur
//                         in="BackgroundImageFix"
//                         stdDeviation="1"
//                       />
//                       <feComposite
//                         in2="SourceAlpha"
//                         operator="in"
//                         result="effect1_backgroundBlur_41_1348"
//                       />
//                       <feBlend
//                         mode="normal"
//                         in="SourceGraphic"
//                         in2="effect1_backgroundBlur_41_1348"
//                         result="shape"
//                       />
//                     </filter>
//                     <radialGradient
//                       id="paint0_radial_41_1348"
//                       cx="0"
//                       cy="0"
//                       r="1"
//                       gradientUnits="userSpaceOnUse"
//                       gradientTransform="translate(240.5 24.5) rotate(90) scale(24.5 240.5)"
//                     >
//                       <stop stopColor="white" stopOpacity="0.23" />
//                       <stop offset="1" stopColor="#D9D9D9" stopOpacity="0" />
//                     </radialGradient>
//                   </defs>
//                 </svg>
//               </div>
//             </div>

//             <div className="flex gap-4 items-center lg:hidden">
//               <a href="#">
//                 <img
//                   className="rounded-xl shadow-3"
//                   src="/img/appstore.svg"
//                   alt="App Store"
//                   width="241"
//                   height="72"
//                 />
//               </a>

//               <a href="#">
//                 <img
//                   className="rounded-xl shadow-3"
//                   src="/img/googleplay.svg"
//                   alt="Google Play"
//                   width="241"
//                   height="72"
//                 />
//               </a>
//             </div>
//           </div>
//         </div>
//       </section>

//       <section className="section py-10 lg:py-30">
//         <div className="container">
//           <header className="section__header text-center mb-12">
//             <h2 className="section__title text-neutral1">
//               Need <span className="text-primary">help?</span>
//             </h2>

//             <p className="section__subtitle">
//               You can find us and send any questions, any time
//             </p>
//           </header>

//           <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 lg:gap-6">
//             <CardLayout2
//               image="/img/illustrations/icon7.svg"
//               imageAlt="/img/illustrations/icon7-7.svg"
//               title="FAQs"
//               description="View FAQs for further information on specific features."
//             >
//               <a className="card1__more-link" href="#">
//                 Read More
//               </a>
//             </CardLayout2>

//             <CardLayout2
//               image="/img/illustrations/icon8.svg"
//               imageAlt="/img/illustrations/icon8-8.svg"
//               title="Academy"
//               description="Expand your knowledge and improve trading skills for traders of all levels."
//             >
//               <a className="card1__more-link" href="#">
//                 Read More
//               </a>
//             </CardLayout2>

//             <CardLayout2
//               image="/img/illustrations/icon9.svg"
//               imageAlt="/img/illustrations/icon9-9.svg"
//               title="24/7 Support"
//               description="Get immediate assistance from our customer service agents"
//             >
//               <a className="card1__more-link" href="#">
//                 Contact Now
//               </a>
//             </CardLayout2>
//           </div>
//         </div>
//       </section>

//       <section className="section bg-gradient-1 text-white py-10 lg:py-30">
//         <div className="container">
//           <header className="section__header text-center mb-12">
//             <h2 className="section__title">
//               Our <span className="text-secondary">Team</span>
//             </h2>

//             {/* <p className="section__subtitle text-neutral4 text-base">
//               There are a few reasons why you should choose The Alchemist as <br />
//               your cryptocurrency platform
//             </p> */}
//           </header>

//           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6">
//             {members.map((member, index) => (
//               <TeamMember member={member} key={index} index={index} isOnDark />
//             ))}
//           </div>
//         </div>
//       </section>

//       <section className="section py-10 lg:py-30">
//         <div className="container">
//           <header className="section__header text-center mb-12">
//             <h2 className="section__title">
//               Our <span className="text-primary">Advisors</span>
//             </h2>

//             {/* <p className="section__subtitle text-neutral1 text-base">
//               There are a few reasons why you should choose <br />
//               The Alchemist as your cryptocurrency platform
//             </p> */}
//           </header>

//           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6">
//             {advisors.map((member, index) => (
//               <TeamMember member={member} key={index} index={index} />
//             ))}
//           </div>
//         </div>
//       </section>

//       <section className="section bg-gradient-1 text-white py-10 lg:py-30">
//         <div className="container">
//           <header className="section__header text-center mb-8 lg:mb-12">
//             <h2 className="section__title">
//               Our <span className="text-secondary">Backers</span>
//             </h2>

//             <p className="section__subtitle text-neutral4">
//               A list of our collaborations with various partners, <br />
//               please check below
//             </p>
//           </header>

//           <ul className="flex flex-wrap items-center justify-center gap-x-8 gap-y-4 lg:gap-[50px] mx-auto lg:max-w-screen-lg">
//             <li>
//               <img
//                 className="transition hover:scale-125 w-[140px]"
//                 src="/img/backers/BSCS.png"
//                 width="368"
//                 height="140"
//                 alt=""
//                 loading="lazy"
//               />
//             </li>

//             <li>
//               <img
//                 className="transition hover:scale-125 w-[140px]"
//                 src="/img/backers/pancake-swap.png"
//                 width="465"
//                 height="230"
//                 alt=""
//                 loading="lazy"
//               />
//             </li>

//             <li>
//               <img
//                 className="transition hover:scale-125 w-auto h-[70px]"
//                 src="/img/backers/gotbit.webp"
//                 width="315"
//                 height="225"
//                 alt=""
//                 loading="lazy"
//               />
//             </li>

//             <li>
//               <img
//                 className="transition hover:scale-125 w-[160px]"
//                 src="/img/backers/sonorus.png"
//                 width="512"
//                 height="155"
//                 alt=""
//                 loading="lazy"
//               />
//             </li>

//             {/*<li>
//               <img className="transition hover:scale-125 w-[140px]" src="/img/backers/binanceLabs.png" width="280" height="85" alt="" loading="lazy" />
//             </li>

//             <li>
//               <img className="transition hover:scale-125 w-[140px]" src="/img/backers/mexc.png" width="280" height="47" alt="" loading="lazy" />
//             </li>

//             <li>
//               <img className="transition hover:scale-125 w-[140px]" src="/img/backers/tokocrypto.png" width="280" height="57" alt="" loading="lazy" />
//             </li>

//             <li>
//               <img className="transition hover:scale-125 w-[140px]" src="/img/backers/indodax.png" width="280" height="67" alt="" loading="lazy" />
//             </li>

//             <li>
//               <img className="transition hover:scale-125 w-[140px]" src="/img/backers/coingecko.png" width="280" height="75" alt="" loading="lazy" />
//             </li>*/}
//           </ul>
//         </div>
//       </section>

//       <section className="section py-10 lg:py-30 relative z-10">
//         <div className="absolute inset-0 z-0 select-none overflow-hidden flex lg:items-center">
//           <div className="lg:w-[780px] mx-auto flex justify-between pt-8">
//             <div className="absolute left-[-80px] lg:relative lg:left-auto">
//               <Circular1 autoSpin />
//             </div>

//             <div className="mt-8 absolute right-[-70px] lg:relative lg:right-auto">
//               <Circular2 spinWhenScroll />
//             </div>
//           </div>
//         </div>

//         <div className="container ">
//           <div className="relative">
//             <header className="section__header text-center mb-6 lg:mb-12">
//               <h2 className="section__title">
//                 <span className="text-primary">Start</span> earning today
//               </h2>

//               <p className="section__subtitle text-neutral3">
//                 Ready to start trading cryptocurrency?
//               </p>
//             </header>

//             <div className="relative lg:max-w-[460px] mx-auto">
//               <SubscriptionForm />
//             </div>
//           </div>
//         </div>
//       </section>
//     </>
//   );
// }

// export default LandingPage;

// pages/index.js
"use client";
import { redirect } from "next/navigation";

export default function Index() {
  redirect("/home");
}
