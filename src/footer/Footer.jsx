
// import '../styles/Footer.scss'
// import { Link } from 'react-router-dom'

// const Footer = () => {
//     return (
//         <>
//             <div className="footer">
//                 <div className="footer_1">
//                     <div className="footer_address">
//                         <p className='f_a'>Address</p>
//                         <p>M3, Aradhana Bhawan, Commercial Complex, Azadpur, Delhi-110033</p>
//                     </div>
//                     <div className="footer_email">
//                         <p className='f_e'>email</p>
//                         <p> info@indoorganics.in</p>
//                     </div>
//                     <div className="footer_phone">
//                         <p className='f_p'>phone</p>
//                         <p>+ 011-49059099/45500067</p>
//                     </div>
//                 </div>
//                 <div className="footer_2">
//                     <p className='footer_2_about'> company</p>

//                     <Link to='/aboutUs' className='footer_links_tag'>About us</Link>
//                     <Link to='/researchDev' className='footer_links_tag'>R & D</Link>
//                     <Link to='/career' className='footer_links_tag'>career</Link>
//                     <Link to='/vision' className='footer_links_tag'>Vision</Link>
//                     <Link to='/mission' className='footer_links_tag'>Mission</Link>
//                     <Link to='/BoardOfDirector' className='footer_links_tag'>Board of directors</Link>
//                     <Link to='/testimonial' className='footer_links_tag'>Testimonials</Link>
//                     <Link to='/trialProduct' className='footer_links_tag'>Product Trials & Testing</Link>

//                 </div>
//                 <div className="footer_3">
//                     <p className='footer_3_quick_links'>Quick Links</p>
//                     <Link to='/news' className='footer_links_tag'>news</Link>
//                     <Link to='/career' className='footer_links_tag'>career</Link>
//                     <Link to='/termsCondition' className='footer_links_tag'>terms & conditions</Link>
//                     <Link to='/privacyPolicy' className='footer_links_tag'>privacy policy</Link>
//                     <Link to='/returnPolicy' className='footer_links_tag'>return policy</Link>


//                 </div>
//                <div className="footer_4">
//                     <p className='footer_4_our_business'>our business</p>
//                     <Link to='/researchDev' className='footer_links_tag'>R & D</Link>
//                     <Link to='/Domestic' className='footer_links_tag'>Domestic</Link>
//                     <Link to='/International' className='footer_links_tag'>International</Link>

//                 </div> 
//             </div>
//             <div className="footer_bottom">
//                 <div className="f_b_l">
//                     Copyright ©2016. Indo Organics Pvt. Ltd. All Rights Reserved
//                 </div>
//                 <div className="f_b_r">
//                     <Link to='/faqs'>
//                     FAQ's
//                     </Link>
//                 </div>

//             </div>



//         </>
//     )
// }

// export default Footer






//   2nd footer


import React from "react";

const Footer = () => {
  return (
    <>
    

      <footer className=" relative z-10 bg-green-950 pb-10 pt-20  lg:pb-20 lg:pt-[120px]">
        <div className="container">
          <div className="-mx-4 flex flex-wrap">
            <div className="w-full px-4 sm:w-2/3 lg:w-3/12">
              <div className="mb-10 w-full">

                <h4 className=" pl-9 mb-9 text-3xl font-semibold  text-white">
                  Address
                </h4>
                <p className="p-9   text-base text-body-color text-white">
                  M3, Aradhana Bhawan, Commercial Complex, Azadpur, Delhi-110033
                </p>
                <p className="flex p-1 flex-col items-center text-sm font-medium text-dark text-white">

                  {/* <span className="text-[1rem] p-3">+ 011-49059099/45500067</span> */}
                  {/* <span className="text-[1rem]">info@indoorganics.in</span> */}
                </p>
              </div>
            </div>



            <LinkGroup header="About us">
              <NavLink link="/vision" label="Vision" />
              <NavLink link="/mission" label="Mission" />
              <NavLink link="/testimonial" label="Testimonials" />
              <NavLink link="/trialProduct" label="product trials & testing" />
            </LinkGroup>
            <LinkGroup header="Quick Links">
              <NavLink link="/news" label="News" />
              <NavLink link="/career" label="Career" />
              <NavLink link="/termsCondition" label="Terms & Conditions" />
              <NavLink link="/privacyPolicy" label="Privacy Policy" />
            </LinkGroup>
            <LinkGroup header="Our business">
              <NavLink link="/researchDev" label="R & D" />
              <NavLink link="/Domestics" label="Domestic" />
              <NavLink link="/International" label="International" />
              <NavLink link="/faqs" label="Faq's" />
            </LinkGroup>

            <div className="w-full px-4 sm:w-1/2 lg:w-3/12">
              <div className="mb-10 w-full">
                <h4 className="mb-9 text-lg font-semibold text-white">
                  Follow Us On
                </h4>
                <div className="mb-6 flex items-center ">
                  <a
                    href="https://www.facebook.com/iolindia/"
                    className=" hover:bg-green-900 mr-3 flex h-8 w-8 items-center justify-center rounded-full border border-stroke text-dark hover:border-primary hover:bg-primary hover:text-white  dark:border-dark-3 text-white dark:hover:border-primary sm:mr-4 lg:mr-3 xl:mr-4"
                  >
                    <svg
                      width="8"
                      height="16"
                      viewBox="0 0 8 16"
                      className="fill-current text-white"
                    >
                      <path d="M7.43902 6.4H6.19918H5.75639V5.88387V4.28387V3.76774H6.19918H7.12906C7.3726 3.76774 7.57186 3.56129 7.57186 3.25161V0.516129C7.57186 0.232258 7.39474 0 7.12906 0H5.51285C3.76379 0 2.54609 1.44516 2.54609 3.5871V5.83226V6.34839H2.10329H0.597778C0.287819 6.34839 0 6.63226 0 7.04516V8.90323C0 9.26452 0.243539 9.6 0.597778 9.6H2.05902H2.50181V10.1161V15.3032C2.50181 15.6645 2.74535 16 3.09959 16H5.18075C5.31359 16 5.42429 15.9226 5.51285 15.8194C5.60141 15.7161 5.66783 15.5355 5.66783 15.3806V10.1419V9.62581H6.13276H7.12906C7.41688 9.62581 7.63828 9.41935 7.68256 9.10968V9.08387V9.05806L7.99252 7.27742C8.01466 7.09677 7.99252 6.89032 7.85968 6.68387C7.8154 6.55484 7.61614 6.42581 7.43902 6.4Z" />
                    </svg>
                  </a>
                  <a
                    href="/twitter"
                    className="hover:bg-green-900 mr-3 flex h-8 w-8 items-center justify-center rounded-full border border-stroke text-dark hover:border-primary hover:bg-primary hover:text-white dark:border-dark-3 text-white dark:hover:border-primary sm:mr-4 lg:mr-3 xl:mr-4"
                  >
                    <svg
                      width="16"
                      height="12"
                      viewBox="0 0 16 12"
                      className="fill-current text-white"
                    >
                      <path d="M14.2194 2.06654L15.2 0.939335C15.4839 0.634051 15.5613 0.399217 15.5871 0.2818C14.8129 0.704501 14.0903 0.845401 13.6258 0.845401H13.4452L13.3419 0.751468C12.7226 0.258317 11.9484 0 11.1226 0C9.31613 0 7.89677 1.36204 7.89677 2.93542C7.89677 3.02935 7.89677 3.17025 7.92258 3.26419L8 3.73386L7.45806 3.71037C4.15484 3.61644 1.44516 1.03327 1.00645 0.587084C0.283871 1.76125 0.696774 2.88845 1.13548 3.59296L2.0129 4.90802L0.619355 4.20352C0.645161 5.18982 1.05806 5.96477 1.85806 6.52838L2.55484 6.99804L1.85806 7.25636C2.29677 8.45401 3.27742 8.94716 4 9.13503L4.95484 9.36986L4.05161 9.93346C2.60645 10.8728 0.8 10.8024 0 10.7319C1.62581 11.7652 3.56129 12 4.90323 12C5.90968 12 6.65806 11.9061 6.83871 11.8356C14.0645 10.2857 14.4 4.41487 14.4 3.2407V3.07632L14.5548 2.98239C15.4323 2.23092 15.7935 1.8317 16 1.59687C15.9226 1.62035 15.8194 1.66732 15.7161 1.6908L14.2194 2.06654Z" />
                    </svg>
                  </a>
                  <a
                    href="https://youtube.com/@indoorganics?si=Rs0ayidzuF5wt_cH"
                    className="hover:bg-green-900 mr-3 flex h-8 w-8 items-center justify-center rounded-full border border-stroke text-dark hover:border-primary hover:bg-primary hover:text-white dark:border-dark-3 text-white dark:hover:border-primary sm:mr-4 lg:mr-3 xl:mr-4"
                  >
                    <svg
                      width="16"
                      height="12"
                      viewBox="0 0 16 12"
                      className="fill-current text-white"
                    >
                      <path d="M15.6645 1.88018C15.4839 1.13364 14.9419 0.552995 14.2452 0.359447C13.0065 6.59222e-08 8 0 8 0C8 0 2.99355 6.59222e-08 1.75484 0.359447C1.05806 0.552995 0.516129 1.13364 0.335484 1.88018C0 3.23502 0 6 0 6C0 6 0 8.79263 0.335484 10.1198C0.516129 10.8664 1.05806 11.447 1.75484 11.6406C2.99355 12 8 12 8 12C8 12 13.0065 12 14.2452 11.6406C14.9419 11.447 15.4839 10.8664 15.6645 10.1198C16 8.79263 16 6 16 6C16 6 16 3.23502 15.6645 1.88018ZM6.4 8.57143V3.42857L10.5548 6L6.4 8.57143Z" />
                    </svg>
                  </a>
                  <a
                    href="https://www.linkedin.com/company/indo-organics-pvt-ltd_find_us_here/"
                    className="hover:bg-green-900 mr-3 flex h-8 w-8 items-center justify-center rounded-full border border-stroke text-dark hover:border-primary hover:bg-primary hover:text-black dark:border-dark-3 text-white dark:hover:border-primary sm:mr-4 lg:mr-3 xl:mr-4"
                  >
                    <svg
                      width="14"
                      height="14"
                      viewBox="0 0 14 14"
                      className="fill-current text-white"
                       
                    >
                      <path d="M13.0214 0H1.02084C0.453707 0 0 0.451613 0 1.01613V12.9839C0 13.5258 0.453707 14 1.02084 14H12.976C13.5432 14 13.9969 13.5484 13.9969 12.9839V0.993548C14.0422 0.451613 13.5885 0 13.0214 0ZM4.15142 11.9H2.08705V5.23871H4.15142V11.9ZM3.10789 4.3129C2.42733 4.3129 1.90557 3.77097 1.90557 3.11613C1.90557 2.46129 2.45002 1.91935 3.10789 1.91935C3.76577 1.91935 4.31022 2.46129 4.31022 3.11613C4.31022 3.77097 3.81114 4.3129 3.10789 4.3129ZM11.9779 11.9H9.9135V8.67097C9.9135 7.90323 9.89082 6.8871 8.82461 6.8871C7.73571 6.8871 7.57691 7.74516 7.57691 8.60323V11.9H5.51254V5.23871H7.53154V6.16452H7.55423C7.84914 5.62258 8.50701 5.08065 9.52785 5.08065C11.6376 5.08065 12.0232 6.43548 12.0232 8.2871V11.9H11.9779Z" />
                    </svg>
                  </a>
                </div>
                <p className="text-base text-white">
                  &copy;Copyright 2016. Indo Organics
                </p>
              </div>
            </div>
          </div>
        </div>
        <div>
          <span className="absolute bottom-0 left-0 z-[-1]">
            <svg
              width={217}
              height={229}
              viewBox="0 0 217 229"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M-64 140.5C-64 62.904 -1.096 1.90666e-05 76.5 1.22829e-05C154.096 5.49924e-06 217 62.904 217 140.5C217 218.096 154.096 281 76.5 281C-1.09598 281 -64 218.096 -64 140.5Z"
                fill="url(#paint0_linear_1179_5)"
              />
              <defs>
                <linearGradient
                  id="paint0_linear_1179_5"
                  x1="76.5"
                  y1={281}
                  x2="76.5"
                  y2="1.22829e-05"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stopColor="#3056D3" stopOpacity="0.08" />
                  <stop offset={1} stopColor="#C4C4C4" stopOpacity={0} />
                </linearGradient>
              </defs>
            </svg>
          </span>
          <span className="absolute right-10 top-10 z-[-1]">
            <svg
              width={75}
              height={75}
              viewBox="0 0 75 75"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M37.5 -1.63918e-06C58.2107 -2.54447e-06 75 16.7893 75 37.5C75 58.2107 58.2107 75 37.5 75C16.7893 75 -7.33885e-07 58.2107 -1.63918e-06 37.5C-2.54447e-06 16.7893 16.7893 -7.33885e-07 37.5 -1.63918e-06Z"
                fill="url(#paint0_linear_1179_4)"
              />
              <defs>
                <linearGradient
                  id="paint0_linear_1179_4"
                  x1="-1.63917e-06"
                  y1="37.5"
                  x2={75}
                  y2="37.5"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stopColor="#13C296" stopOpacity="0.31" />
                  <stop offset={1} stopColor="#C4C4C4" stopOpacity={0} />
                </linearGradient>
              </defs>
            </svg>
          </span>
        </div>
      </footer>
    </>
  );
};

export default Footer;

const LinkGroup = ({ children, header }) => {
  return (
    <>
      <div className="w-full px-4 sm:w-1/2 lg:w-2/12">
        <div className="mb-10 w-full">
          <h4 className="mb-9 text-lg font-semibold text-white">
            {header}
          </h4>
          <ul className="space-y-3">{children}</ul>
        </div>
      </div>
    </>
  );
};

const NavLink = ({ link, label }) => {
  return (


    <li>
      <a
        href={link}
        className="inline-block text-base leading-loose text-body-color hover:text-primary dark:text-dark-6  hover:text-black  text-white "
      >
        {label}
      </a>
    </li>
  );
};




//    3rd footer



// import logo from '../AboutImg/favicon.jpg'
// import React from 'react'
// import { Link } from 'react-router-dom'
// const Footer = () => {
//   return (
//     <>


//       <footer className=" lg:grid lg:grid-cols-5 ">
//         <div className="relative block h-4 lg:col-span-2 lg:h-[50vh] bg-green-900">
//           <img
//             src={logo}
//             alt=""
//             className="absolute inset-0 h-[30vh] w-full object-contain "
//           />

//         </div>

//         <div className="px-4 py-16 sm:px-6 lg:col-span-3 lg:px-8">
//           <div className="grid grid-cols-1 gap-8 sm:grid-cols-2">
//             <div>
//               <p>
//                 <span className="text-xs uppercase tracking-wide text-gray-500"> contact us </span>

//                 <a href="#" className="block text-2xl font-medium text-gray-900 hover:opacity-75 sm:text-3xl">
//                   M3, Aradhana Bhawan, Commercial Complex, Azadpur, Delhi-110033
//                 </a>
//               </p>

//               <ul className="mt-8 space-y-1 text-sm text-gray-700">
//                 <li>+ 011-49059099/45500067</li>
//                 <li>info@indoorganics.in</li>
//               </ul>

//               <ul className="mt-8 flex gap-6">
//                 <li>
//                   <a
//                     href="#"
//                     rel="noreferrer"
//                     target="_blank"
//                     className="text-gray-700 transition hover:opacity-75"
//                   >
//                     <span className="sr-only">Facebook</span>

//                     <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
//                       <path
//                         fillRule="evenodd"
//                         d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
//                         clipRule="evenodd"
//                       />
//                     </svg>
//                   </a>
//                 </li>

//                 <li>
//                   <a
//                     href="#"
//                     rel="noreferrer"
//                     target="_blank"
//                     className="text-gray-700 transition hover:opacity-75"
//                   >
//                     <span className="sr-only">Instagram</span>

//                     <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
//                       <path
//                         fillRule="evenodd"
//                         d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"
//                         clipRule="evenodd"
//                       />
//                     </svg>
//                   </a>
//                 </li>

//                 <li>
//                   <a
//                     href="#"
//                     rel="noreferrer"
//                     target="_blank"
//                     className="text-gray-700 transition hover:opacity-75"
//                   >
//                     <span className="sr-only">Twitter</span>

//                     <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
//                       <path
//                         d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84"
//                       />
//                     </svg>
//                   </a>
//                 </li>




//               </ul>
//             </div>

//             <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
//               <div>
//                 <p className="font-medium text-gray-900">Services</p>

//                 <div className="mt-6 space-y-4 text-sm flex flex-col">


//                   <Link to='/researchDev' lassName="text-gray-700 transition hover:opacity-75">
//                     Agrochemical
//                   </Link>


//                   <Link to='' lassName="text-gray-700 transition hover:opacity-75">
//                     Bio stimulant
//                   </Link>


//                   <Link to='' lassName="text-gray-700 transition hover:opacity-75">
//                     micro nutrient
//                   </Link>


//                   <Link to='' lassName="text-gray-700 transition hover:opacity-75">
//                     others
//                   </Link>





//                 </div>
//               </div>

//               <div>
//                 <p className="font-medium text-gray-900">Company</p>

//                 <ul className="mt-6 space-y-4 text-sm">
//                   <li>
//                     <a href="#" className="text-gray-700 transition hover:opacity-75"> About </a>
//                   </li>

//                   <li>
//                     <a href="#" className="text-gray-700 transition hover:opacity-75"> R & D</a>
//                   </li>

//                   <li>
//                     <a href="#" className="text-gray-700 transition hover:opacity-75"> Career</a>
//                   </li>

//                   <li>
//                     <a href="#" className="text-gray-700 transition hover:opacity-75"> Vision</a>
//                   </li>

//                   <li>
//                     <a href="#" className="text-gray-700 transition hover:opacity-75"> Mission</a>
//                   </li>
//                 </ul>
//               </div>
//             </div>
//           </div>

//           <div className="mt-12 border-t border-gray-100 pt-12">
//             <div className="sm:flex sm:items-center sm:justify-between">
//               <div className="flex flex-wrap gap-4 text-xs">
//                 <Link to='/termsCondition' className="text-gray-500 transition hover:opacity-75">
//                   Terms & Conditions
//                 </Link>

//                 <Link to='/termsCondition' className="text-gray-500 transition hover:opacity-75">
//                   Privacy Policy
//                 </Link>

//                 <Link to='/faqs' className="text-gray-500 transition hover:opacity-75">
//                   Faq's
//                 </Link>
//               </div>

//               <p className="mt-8 text-xs text-gray-500 sm:mt-0">
//                 &copy; Copyright ©2016. Indo Organics Pvt. Ltd. All Rights Reserved
//               </p>
//             </div>
//           </div>
//         </div>
//       </footer>



//     </>
//   )
// }

// export default Footer




