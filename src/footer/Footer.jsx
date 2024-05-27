
//   1nd footer

// import React from "react";

// const Footer = () => {
//   return (
//     <>


//       <footer className=" relative z-10 bg-green-950 pb-10 pt-20  lg:pb-20 lg:pt-[120px]">
//         <div className="container">
//           <div className="-mx-4 flex flex-wrap">
//             <div className="w-full px-4 sm:w-2/3 lg:w-3/12">
//               <div className="mb-10 w-full">

//                 <h4 className=" pl-9 mb-9 text-3xl font-semibold  text-white">
//                   Address
//                 </h4>
//                 <p className="p-9   text-base text-body-color text-white">
//                   M3, Aradhana Bhawan, Commercial Complex, Azadpur, Delhi-110033
//                 </p>
//                 <p className="flex p-1 flex-col items-center text-sm font-medium text-dark text-white">

//                   {/* <span className="text-[1rem] p-3">+ 011-49059099/45500067</span> */}
//                   {/* <span className="text-[1rem]">info@indoorganics.in</span> */}
//                 </p>
//               </div>
//             </div>



//             <LinkGroup header="About us">
//               <NavLink link="/vision" label="Vision" />
//               <NavLink link="/mission" label="Mission" />
//               <NavLink link="/testimonial" label="Testimonials" />
//               <NavLink link="/trialProduct" label="product trials & testing" />
//             </LinkGroup>
//             <LinkGroup header="Quick Links">
//               <NavLink link="/news" label="News" />
//               <NavLink link="/career" label="Career" />
//               <NavLink link="/termsCondition" label="Terms & Conditions" />
//               <NavLink link="/privacyPolicy" label="Privacy Policy" />
//             </LinkGroup>
//             <LinkGroup header="Our business">
//               <NavLink link="/researchDev" label="R & D" />
//               <NavLink link="/Domestics" label="Domestic" />
//               <NavLink link="/International" label="International" />
//               <NavLink link="/faqs" label="Faq's" />
//             </LinkGroup>

//             <div className="w-full px-4 sm:w-1/2 lg:w-3/12">
//               <div className="mb-10 w-full">
//                 <h4 className="mb-9 text-lg font-semibold text-white">
//                   Follow Us On
//                 </h4>
//                 <div className="mb-6 flex items-center ">
//                   <a
//                     href="https://www.facebook.com/iolindia/"
//                     className=" hover:bg-green-900 mr-3 flex h-8 w-8 items-center justify-center rounded-full border border-stroke text-dark hover:border-primary hover:bg-primary hover:text-white  dark:border-dark-3 text-white dark:hover:border-primary sm:mr-4 lg:mr-3 xl:mr-4"
//                   >
//                     <svg
//                       width="8"
//                       height="16"
//                       viewBox="0 0 8 16"
//                       className="fill-current text-white"
//                     >
//                       <path d="M7.43902 6.4H6.19918H5.75639V5.88387V4.28387V3.76774H6.19918H7.12906C7.3726 3.76774 7.57186 3.56129 7.57186 3.25161V0.516129C7.57186 0.232258 7.39474 0 7.12906 0H5.51285C3.76379 0 2.54609 1.44516 2.54609 3.5871V5.83226V6.34839H2.10329H0.597778C0.287819 6.34839 0 6.63226 0 7.04516V8.90323C0 9.26452 0.243539 9.6 0.597778 9.6H2.05902H2.50181V10.1161V15.3032C2.50181 15.6645 2.74535 16 3.09959 16H5.18075C5.31359 16 5.42429 15.9226 5.51285 15.8194C5.60141 15.7161 5.66783 15.5355 5.66783 15.3806V10.1419V9.62581H6.13276H7.12906C7.41688 9.62581 7.63828 9.41935 7.68256 9.10968V9.08387V9.05806L7.99252 7.27742C8.01466 7.09677 7.99252 6.89032 7.85968 6.68387C7.8154 6.55484 7.61614 6.42581 7.43902 6.4Z" />
//                     </svg>
//                   </a>
//                   <a
//                     href="/twitter"
//                     className="hover:bg-green-900 mr-3 flex h-8 w-8 items-center justify-center rounded-full border border-stroke text-dark hover:border-primary hover:bg-primary hover:text-white dark:border-dark-3 text-white dark:hover:border-primary sm:mr-4 lg:mr-3 xl:mr-4"
//                   >
//                     <svg
//                       width="16"
//                       height="12"
//                       viewBox="0 0 16 12"
//                       className="fill-current text-white"
//                     >
//                       <path d="M14.2194 2.06654L15.2 0.939335C15.4839 0.634051 15.5613 0.399217 15.5871 0.2818C14.8129 0.704501 14.0903 0.845401 13.6258 0.845401H13.4452L13.3419 0.751468C12.7226 0.258317 11.9484 0 11.1226 0C9.31613 0 7.89677 1.36204 7.89677 2.93542C7.89677 3.02935 7.89677 3.17025 7.92258 3.26419L8 3.73386L7.45806 3.71037C4.15484 3.61644 1.44516 1.03327 1.00645 0.587084C0.283871 1.76125 0.696774 2.88845 1.13548 3.59296L2.0129 4.90802L0.619355 4.20352C0.645161 5.18982 1.05806 5.96477 1.85806 6.52838L2.55484 6.99804L1.85806 7.25636C2.29677 8.45401 3.27742 8.94716 4 9.13503L4.95484 9.36986L4.05161 9.93346C2.60645 10.8728 0.8 10.8024 0 10.7319C1.62581 11.7652 3.56129 12 4.90323 12C5.90968 12 6.65806 11.9061 6.83871 11.8356C14.0645 10.2857 14.4 4.41487 14.4 3.2407V3.07632L14.5548 2.98239C15.4323 2.23092 15.7935 1.8317 16 1.59687C15.9226 1.62035 15.8194 1.66732 15.7161 1.6908L14.2194 2.06654Z" />
//                     </svg>
//                   </a>
//                   <a
//                     href="https://youtube.com/@indoorganics?si=Rs0ayidzuF5wt_cH"
//                     className="hover:bg-green-900 mr-3 flex h-8 w-8 items-center justify-center rounded-full border border-stroke text-dark hover:border-primary hover:bg-primary hover:text-white dark:border-dark-3 text-white dark:hover:border-primary sm:mr-4 lg:mr-3 xl:mr-4"
//                   >
//                     <svg
//                       width="16"
//                       height="12"
//                       viewBox="0 0 16 12"
//                       className="fill-current text-white"
//                     >
//                       <path d="M15.6645 1.88018C15.4839 1.13364 14.9419 0.552995 14.2452 0.359447C13.0065 6.59222e-08 8 0 8 0C8 0 2.99355 6.59222e-08 1.75484 0.359447C1.05806 0.552995 0.516129 1.13364 0.335484 1.88018C0 3.23502 0 6 0 6C0 6 0 8.79263 0.335484 10.1198C0.516129 10.8664 1.05806 11.447 1.75484 11.6406C2.99355 12 8 12 8 12C8 12 13.0065 12 14.2452 11.6406C14.9419 11.447 15.4839 10.8664 15.6645 10.1198C16 8.79263 16 6 16 6C16 6 16 3.23502 15.6645 1.88018ZM6.4 8.57143V3.42857L10.5548 6L6.4 8.57143Z" />
//                     </svg>
//                   </a>
//                   <a
//                     href="https://www.linkedin.com/company/indo-organics-pvt-ltd_find_us_here/"
//                     className="hover:bg-green-900 mr-3 flex h-8 w-8 items-center justify-center rounded-full border border-stroke text-dark hover:border-primary hover:bg-primary hover:text-black dark:border-dark-3 text-white dark:hover:border-primary sm:mr-4 lg:mr-3 xl:mr-4"
//                   >
//                     <svg
//                       width="14"
//                       height="14"
//                       viewBox="0 0 14 14"
//                       className="fill-current text-white"

//                     >
//                       <path d="M13.0214 0H1.02084C0.453707 0 0 0.451613 0 1.01613V12.9839C0 13.5258 0.453707 14 1.02084 14H12.976C13.5432 14 13.9969 13.5484 13.9969 12.9839V0.993548C14.0422 0.451613 13.5885 0 13.0214 0ZM4.15142 11.9H2.08705V5.23871H4.15142V11.9ZM3.10789 4.3129C2.42733 4.3129 1.90557 3.77097 1.90557 3.11613C1.90557 2.46129 2.45002 1.91935 3.10789 1.91935C3.76577 1.91935 4.31022 2.46129 4.31022 3.11613C4.31022 3.77097 3.81114 4.3129 3.10789 4.3129ZM11.9779 11.9H9.9135V8.67097C9.9135 7.90323 9.89082 6.8871 8.82461 6.8871C7.73571 6.8871 7.57691 7.74516 7.57691 8.60323V11.9H5.51254V5.23871H7.53154V6.16452H7.55423C7.84914 5.62258 8.50701 5.08065 9.52785 5.08065C11.6376 5.08065 12.0232 6.43548 12.0232 8.2871V11.9H11.9779Z" />
//                     </svg>
//                   </a>
//                 </div>
//                 <p className="text-base text-white">
//                   &copy;Copyright 2016. Indo Organics
//                 </p>
//               </div>
//             </div>
//           </div>
//         </div>
//         <div>
//           <span className="absolute bottom-0 left-0 z-[-1]">
//             <svg
//               width={217}
//               height={229}
//               viewBox="0 0 217 229"
//               fill="none"
//               xmlns="http://www.w3.org/2000/svg"
//             >
//               <path
//                 d="M-64 140.5C-64 62.904 -1.096 1.90666e-05 76.5 1.22829e-05C154.096 5.49924e-06 217 62.904 217 140.5C217 218.096 154.096 281 76.5 281C-1.09598 281 -64 218.096 -64 140.5Z"
//                 fill="url(#paint0_linear_1179_5)"
//               />
//               <defs>
//                 <linearGradient
//                   id="paint0_linear_1179_5"
//                   x1="76.5"
//                   y1={281}
//                   x2="76.5"
//                   y2="1.22829e-05"
//                   gradientUnits="userSpaceOnUse"
//                 >
//                   <stop stopColor="#3056D3" stopOpacity="0.08" />
//                   <stop offset={1} stopColor="#C4C4C4" stopOpacity={0} />
//                 </linearGradient>
//               </defs>
//             </svg>
//           </span>
//           <span className="absolute right-10 top-10 z-[-1]">
//             <svg
//               width={75}
//               height={75}
//               viewBox="0 0 75 75"
//               fill="none"
//               xmlns="http://www.w3.org/2000/svg"
//             >
//               <path
//                 d="M37.5 -1.63918e-06C58.2107 -2.54447e-06 75 16.7893 75 37.5C75 58.2107 58.2107 75 37.5 75C16.7893 75 -7.33885e-07 58.2107 -1.63918e-06 37.5C-2.54447e-06 16.7893 16.7893 -7.33885e-07 37.5 -1.63918e-06Z"
//                 fill="url(#paint0_linear_1179_4)"
//               />
//               <defs>
//                 <linearGradient
//                   id="paint0_linear_1179_4"
//                   x1="-1.63917e-06"
//                   y1="37.5"
//                   x2={75}
//                   y2="37.5"
//                   gradientUnits="userSpaceOnUse"
//                 >
//                   <stop stopColor="#13C296" stopOpacity="0.31" />
//                   <stop offset={1} stopColor="#C4C4C4" stopOpacity={0} />
//                 </linearGradient>
//               </defs>
//             </svg>
//           </span>
//         </div>
//       </footer>
//     </>
//   );
// };

// export default Footer;

// const LinkGroup = ({ children, header }) => {
//   return (
//     <>
//       <div className="w-full px-4 sm:w-1/2 lg:w-2/12">
//         <div className="mb-10 w-full">
//           <h4 className="mb-9 text-lg font-semibold text-white">
//             {header}
//           </h4>
//           <ul className="space-y-3">{children}</ul>
//         </div>
//       </div>
//     </>
//   );
// };

// const NavLink = ({ link, label }) => {
//   return (


//     <li>
//       <a
//         href={link}
//         className="inline-block text-base leading-loose text-body-color hover:text-primary dark:text-dark-6  hover:text-black  text-white "
//       >
//         {label}
//       </a>
//     </li>
//   );
// };





import React from 'react'
import { Link } from 'react-router-dom'

import favicon from '../productImgicon/favicon.png'
const Footer = () => {
  return (
    <div className="bg-gray-100">


      <div className="px-4 pt-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 b">
        <div className="grid gap-10 row-gap-6 mb-8 sm:grid-cols-2 lg:grid-cols-4">
          <div className="sm:col-span-2">
            <Link to="/" aria-label="Go home" title="Company" className="inline-flex items-center">

              <img src={favicon} alt="" className="w-8 text-deep-purple-accent-400" />
              <span className="ml-2 text-xl font-bold tracking-wide text-gray-800 uppercase">indo organics</span>
            </Link>
            <div className="mt-6 lg:max-w-sm">
              <p className="text-sm text-gray-800">
                At Indo Organics, we are dedicated to providing high-quality agrochemical solutions to enhance your farming practices.
              </p>
              <p className="mt-4 text-sm text-gray-800">
                Our commitment to innovation and sustainability helps you achieve healthier crops and higher yields while protecting the environment. Join us in cultivating a greener future.
              </p>
            </div>
          </div>
          <div className="space-y-2 text-sm">
            <p className="text-base font-bold tracking-wide text-gray-900">Contacts</p>
            <div className="flex">
              <p className="mr-1 text-gray-800">Phone:</p>
              <a
                href="tel:850-123-5021"
                aria-label="Our phone"
                title="Our phone"
                className="transition-colors duration-300 text-deep-purple-accent-400 hover:text-deep-purple-800"
              >
                + 011-49059099/45500067
              </a>
            </div>
            <div className="flex">
              <p className="mr-1 text-gray-800">Email:</p>
              <a
                href="mailto:info@lorem.mail"
                aria-label="Our email"
                title="Our email"
                className="transition-colors duration-300 text-deep-purple-accent-400 hover:text-deep-purple-800"
              >
                info@indoorganics.in
              </a>
            </div>
            <div className="flex">
              <p className="mr-1 text-gray-800">Address:</p>
              <a
                href="https://maps.app.goo.gl/r6bzwP5rZEyteaVr8"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Our address"
                title="Our address"
                className="  transition-colors duration-300 text-deep-purple-accent-400 hover:text-deep-purple-800"
              >

                <p>M3, Aradhana Bhawan,</p>
                <p> Commercial Complex,</p>
                <p>  Azadpur, Delhi-110033</p>
              </a>
            </div>
          </div>
          <div>
            <span className="text-base font-bold tracking-wide text-gray-900">Social</span>
            <div className="flex items-center mt-1 space-x-3">
              <a
                href="/"
                className="text-gray-500 transition-colors duration-300 hover:text-deep-purple-accent-400"
              >
                <svg viewBox="0 0 24 24" fill="currentColor" className="h-5">
                <path
                  d="M24,4.6c-0.9,0.4-1.8,0.7-2.8,0.8c1-0.6,1.8-1.6,2.2-2.7c-1,0.6-2,1-3.1,1.2c-0.9-1-2.2-1.6-3.6-1.6 c-2.7,0-4.9,2.2-4.9,4.9c0,0.4,0,0.8,0.1,1.1C7.7,8.1,4.1,6.1,1.7,3.1C1.2,3.9,1,4.7,1,5.6c0,1.7,0.9,3.2,2.2,4.1 C2.4,9.7,1.6,9.5,1,9.1c0,0,0,0,0,0.1c0,2.4,1.7,4.4,3.9,4.8c-0.4,0.1-0.8,0.2-1.3,0.2c-0.3,0-0.6,0-0.9-0.1c0.6,2,2.4,3.4,4.6,3.4 c-1.7,1.3-3.8,2.1-6.1,2.1c-0.4,0-0.8,0-1.2-0.1c2.2,1.4,4.8,2.2,7.5,2.2c9.1,0,14-7.5,14-14c0-0.2,0-0.4,0-0.6 C22.5,6.4,23.3,5.5,24,4.6z"
                ></path>
              </svg>
              
              </a>
              <a
                href="/"
                className="text-gray-500 transition-colors duration-300 hover:text-deep-purple-accent-400"
              >
                <svg viewBox="0 0 30 30" fill="currentColor" className="h-6">
                  <circle cx="15" cy="15" r="4"></circle>
                  <path
                    d="M19.999,3h-10C6.14,3,3,6.141,3,10.001v10C3,23.86,6.141,27,10.001,27h10C23.86,27,27,23.859,27,19.999v-10   C27,6.14,23.859,3,19.999,3z M15,21c-3.309,0-6-2.691-6-6s2.691-6,6-6s6,2.691,6,6S18.309,21,15,21z M22,9c-0.552,0-1-0.448-1-1   c0-0.552,0.448-1,1-1s1,0.448,1,1C23,8.552,22.552,9,22,9z"
                  ></path>
                </svg>
              </a>
              <a
                href="/"
                className="text-gray-500 transition-colors duration-300 hover:text-deep-purple-accent-400"
              >
                <svg viewBox="0 0 24 24" fill="currentColor" className="h-5">
                  <path
                    d="M22,0H2C0.895,0,0,0.895,0,2v20c0,1.105,0.895,2,2,2h11v-9h-3v-4h3V8.413c0-3.1,1.893-4.788,4.659-4.788 c1.325,0,2.463,0.099,2.795,0.143v3.24l-1.918,0.001c-1.504,0-1.795,0.715-1.795,1.763V11h4.44l-1,4h-3.44v9H22c1.105,0,2-0.895,2-2 V2C24,0.895,23.105,0,22,0z"
                  ></path>
                </svg>
              </a>
            </div>
            <p className="mt-4 text-sm text-gray-500">
              Thanks for checking us out! We’re glad you’re here. Stay connected by following us on social media and subscribing to our newsletter for the latest updates.
            </p>
          </div>
        </div>
        <div className="flex flex-col-reverse justify-between pt-5 pb-10 border-t lg:flex-row">
          <p className="text-sm text-gray-600">
            © Copyright 2024, All rights reserved.
          </p>
          <ul className="flex flex-col mb-3 space-y-2 lg:mb-0 sm:space-y-0 sm:space-x-5 sm:flex-row">
            <li>
              <Link to="/faqs" className="text-sm text-gray-600 transition-colors duration-300 hover:text-deep-purple-accent-400">F.A.Q</Link>
            </li>
            <li>
              <Link to='/privacyPolicy' className="text-sm text-gray-600 transition-colors duration-300 hover:text-deep-purple-accent-400">Privacy Policy</Link>
            </li>
            <li>
              <Link to="/termsCondition" className="text-sm text-gray-600 transition-colors duration-300 hover:text-deep-purple-accent-400">Terms &amp; Conditions</Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Footer





