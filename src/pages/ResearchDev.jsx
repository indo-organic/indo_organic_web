import certificationLogo1 from '../CertificationLogo/certificationLogo1.jpg'
import certificationLogo2 from '../CertificationLogo/certificationLogo2.jpg'
import certificationLogo3 from '../CertificationLogo/certificationLogo3.jpg'



const ResearchDev = () => {

  return (
    <>
      <div className="flex  gap-4 w-[100%] h-[20rem] bg-cover bg-fixed bg-top justify-center items-center m-auto"
        style={{ backgroundImage: "url(https://s3-ap-south-1.amazonaws.com/ricedigitals3bucket/AUPortalContent/2020/04/30115809/imgblog231.jpg)" }}>

        <div className="absolute inset-0 flex flex-col items-center justify-center">
          <h2 className="text-white text-3xl font-bold uppercase">research and Development</h2>
          <h2 className="flex gap-4 text-white py-2">
            <p>Home  &#9702;</p>
            <p>Company  &#9702;</p>
            <p>Research and Dev  &#9702;</p>
          </h2>
        </div>
      </div>
      <section className="">
        <div className="container max-w-xl p-6 mx-auto space-y-12 lg:px-8 lg:max-w-7xl">


          <div className="grid lg:gap-8 lg:grid-cols-2 lg:items-center">
            <div>
              <div className="mt-4 space-y-12">


                <div className="flex">

                  <div className="ml-4">

                    <p className="mt-2 text-[1.2rem]">Sustainable Agriculture is what the World is working on
                      and we in India have equally embraced the strategies
                      and sciences to develop products which can ensure
                      sustained Profitability, Eco-system and Quality of Life for
                      farmers.
                    </p>
                  </div>
                </div>
                <div className="flex">

                  <div className="ml-4">

                    <p className="mt-2 text-[1.2rem]">Indo Organics Pvt. Ltd. has begun its journey with a
                      Possibility of Future with the same mission. Our strategy
                      rests on promise and commitment to provide consistent
                      quality, continuous availability and ever-growing profitability for our channel partners
                    </p>
                  </div>
                </div>
                <div className="flex">

                  <div className="ml-4">

                    <p className="mt-2 text-[1.2rem]">IOL in technical collaboration with Indogulf Cropsciences USA Corp, Orlando, introduces a mix of Organic products
                      and a range of non-organic pesticides, fungicides, plant nutrients, crop boosters and energizers. The focus is simple
                      and clear – Farmer to get a better yield of a quality crop. The product matrix has been developed as per the stage of the
                      crop and the farmer is being educated about this through markings on the pack design.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div aria-hidden="true" className="mt-10 lg:mt-0    ">
              <img width="600" height="600" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcREUyru3TGAWSTKLnDpLjMCvfLcLiIJJKM0f-6s-8ba8w&s" alt="About Us Image" className="mx-auto rounded-lg shadow-lg dark-bg-gray-500" style={{ color: 'green' }} />
            </div>
          </div>


          <div className="grid grid-cols-2 gap-8 md:grid-cols-6 lg:grid-cols-5">
          <div className="flex items-center justify-center col-span-1 md:col-span-2 lg:col-span-1">
            <img src={certificationLogo1} className="h-40" alt="" />

          </div>
          <div className="flex items-center justify-center col-span-1 md:col-span-2 lg:col-span-1">
            <img src={certificationLogo2} className="h-40" alt="" />

          </div>
          <div className="flex items-center justify-center col-span-1 md:col-span-2 lg:col-span-1">
            <img src={certificationLogo3} className="h-40" alt="" />

          </div>
        </div>
        </div>



       

      </section>



    </>
  )
}

export default ResearchDev




// import { Link } from "react-router-dom"
// const ResearchDev = () => {
//   return (
//     <>
// <div className="flex  gap-4 w-[100%] h-[20rem] bg-cover bg-fixed bg-bottom justify-center items-center m-auto "
//         style={{ backgroundImage:  "url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTz7EsGhn4ranKqAhX3bIjriXEQEPxG_rzvgw&s')"}}>

//         <div className=" flex flex-col items-center justify-center ">
//           <h2 className="text-white text-3xl font-bold uppercase">Research and Development</h2>
//           <h2 className="flex gap-4 text-white py-2">
//             <Link to='/' className="hover:text-white">Home  &#9702;</Link>

//             <p>Research and Development  &#9702;</p>
//           </h2>

//         </div>

//       </div>






//       <div className="bg-white py-24 sm:py-32">
//         <div className="mx-auto max-w-7xl px-6 lg:px-8">
//           <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-3">
//             <div>
//               <h2 className="text-lg font-semibold leading-8 tracking-tight text-black">Research and Development at Indo Organics Pvt. Ltd.</h2>

//               <p className="mt-6 text-base leading-7 text-gray-600">At Indo Organics Pvt. Ltd., we prioritize continuous research and development to drive innovation in the agrochemical industry. Our R&D efforts are aimed at developing cutting-edge solutions that enhance agricultural productivity while promoting environmental sustainability and ensuring food security for future generations. Here's how we approach research and development:</p>
//             </div>
//             <dl className="col-span-2 grid grid-cols-1 gap-x-8 gap-y-10 text-base leading-7 text-gray-600 sm:grid-cols-2 lg:gap-y-16">

//               <div className="relative pl-9">
//                 <dt className="font-semibold text-gray-900">
//                   <svg className="absolute top-1 left-0 h-5 w-5 text-indigo-500" x-description="Heroicon name: mini/check" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
//                     <path fill-rule="evenodd" d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z" clip-rule="evenodd"></path>
//                   </svg>
//                   Innovative Product Development:
//                 </dt>
//                 <dd className="mt-2">We invest heavily in researching and developing new agrochemical formulations that meet the evolving needs of modern agriculture.</dd>
//                 <dd className="mt-2">Our focus is on creating products that optimize crop yield and quality while minimizing environmental impact through advanced technologies</dd>
//               </div>







//               <div className="relative pl-9">
//                 <dt className="font-semibold text-gray-900">
//                   <svg className="absolute top-1 left-0 h-5 w-5 text-indigo-500" x-description="Heroicon name: mini/check" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
//                     <path fill-rule="evenodd" d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z" clip-rule="evenodd"></path>
//                   </svg>
//                   Quality Assurance and Testing:
//                 </dt>
//                 <dd className="mt-2">Rigorous quality control measures are implemented at every stage of product development, ensuring that our agrochemicals meet the highest safety and efficacy standards.</dd>
//                 <dd className="mt-2">
//                 Comprehensive testing protocols validate the performance and reliability of our products under various environmental conditions.</dd>
//               </div>

//               <div className="relative pl-9">
//                 <dt className="font-semibold text-gray-900">
//                   <svg className="absolute top-1 left-0 h-5 w-5 text-indigo-500" x-description="Heroicon name: mini/check" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
//                     <path fill-rule="evenodd" d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z" clip-rule="evenodd"></path>
//                   </svg>
//                   Sustainability and Environmental Impact:


//                 </dt>
//                 <dd className="mt-2">We are committed to sustainable agriculture practices. Our R&D efforts prioritize the development of organic and eco-friendly solutions that promote soil health, biodiversity, and ecological balance.
//                 </dd>
//                 <dd className="mt-2">Research initiatives include exploring bio-based ingredients, integrated pest management strategies, and precision agriculture technologies to reduce chemical usage and minimize ecological footprint.</dd>
//               </div>

//               <div className="relative pl-9">
//                 <dt className="font-semibold text-gray-900">
//                   <svg className="absolute top-1 left-0 h-5 w-5 text-indigo-500" x-description="Heroicon name: mini/check" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
//                     <path fill-rule="evenodd" d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z" clip-rule="evenodd"></path>
//                   </svg>
//                   Collaborative Partnerships:
//                 </dt>
//                 <dd className="mt-2">Collaboration with leading agricultural research institutions, universities, and industry experts enhances our R&D capabilities. </dd>
//                 <dd className="mt-2">
//                   These partnerships facilitate knowledge exchange and foster innovation in agricultural science and technology.</dd>
//               </div>

//               <div className="relative pl-9">
//                 <dt className="font-semibold text-gray-900">
//                   <svg className="absolute top-1 left-0 h-5 w-5 text-indigo-500" x-description="Heroicon name: mini/check" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
//                     <path fill-rule="evenodd" d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z" clip-rule="evenodd"></path>
//                   </svg>
//                   Adaptation to Local Needs:
//                 </dt>
//                 <dd className="mt-2">Understanding regional agricultural challenges and adapting our products to local farming practices is a cornerstone of our R&D strategy.</dd>
//                 <dd className="mt-2">Tailoring solutions to diverse agro-climatic zones ensures optimal performance and customer satisfaction.</dd>
//               </div>

//               <div className="relative pl-9">
//                 <dt className="font-semibold text-gray-900">
//                   <svg className="absolute top-1 left-0 h-5 w-5 text-indigo-500" x-description="Heroicon name: mini/check" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
//                     <path fill-rule="evenodd" d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z" clip-rule="evenodd"></path>
//                   </svg>
//                   Future Directions and Technological Advancements:
//                 </dt>
//                 <dd className="mt-2">We are at the forefront of exploring emerging technologies such as biotechnology, nanotechnology, and digital farming tools.</dd>
//                 <dd className="mt-2">These innovations aim to revolutionize agriculture by providing farmers with smart solutions for improved efficiency, resource management, and sustainable crop production.</dd>
//               </div>

//               <div className="relative pl-9">
//                 <dt className="font-semibold text-gray-900">
//                   <svg className="absolute top-1 left-0 h-5 w-5 text-indigo-500" x-description="Heroicon name: mini/check" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
//                     <path fill-rule="evenodd" d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z" clip-rule="evenodd"></path>
//                   </svg>
//                   Commitment to Regulatory Compliance:
//                 </dt>
//                 <dd className="mt-2">Upholding regulatory standards and ensuring compliance with national and international regulations are integral to our R&D process.</dd>
//                 <dd className="mt-2">We conduct thorough assessments to meet safety, environmental, and health guidelines, ensuring responsible stewardship of our products.</dd>
//               </div>



//             </dl>
//           </div>
//         </div>
//       </div>




//     </>
//   )
// }

// export default ResearchDev




