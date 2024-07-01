
import aboutImg4 from '../AboutImg/about4.jpg'
import AboutImg from '../AboutImg/aboutImg3.jpg'
import { Link } from 'react-router-dom'
import AOS from 'aos';
import 'aos/dist/aos.css';
import React, { useEffect } from 'react';

const AboutUs = () => {
    useEffect(() => {
        AOS.init({ duration: 1000 });
    }, []);
    return (
        <>

            <div className="flex  gap-4 w-[100%] h-[20rem] bg-cover bg-no-repeat bg-fixed bg-bottom justify-center items-center m-auto "
                style={{ backgroundImage: `url(${AboutImg})` }}>

                <div className=" flex flex-col items-center justify-center ">
                    <h2 className="text-white text-3xl font-bold uppercase">About us</h2>
                    <h2 className="flex gap-4 text-white py-2">
                        <Link to='/' className="hover:text-blue-900">Home  &#9702;</Link>
                        <p>Company  &#9702;</p>
                        <p >Our Story  &#9702;</p>
                    </h2>

                </div>

            </div>




            <div className="flex  gap-4 w-[100%] min-h-[38rem] bg-cover bg-no-repeat bg-fixed bg-center  "
                style={{ backgroundImage: 'url("https://img.freepik.com/premium-photo/plant-white-pot-sits-wooden-table_445983-19213.jpg")' }}>

                <div className='flex  justify-center w-[100%] py-1  text-black'>

                    <div className='w-[90%] '>
                       
                        <div className='p-4 py-[3rem]' data-aos="fade-left">
                            <p className='py-2 text-3xl text-blue-900 font-bold'>About Indo Organics </p>
                            <p className='pt-3'></p>
                            <p className='pt-3'></p>
                            <p className='pt-3'></p>
                            <p className='pt-3'></p>
                        </div>

                        <div className='p-4 py-[3rem]' data-aos="fade-left">
                            <p className='py-2 text-3xl text-blue-900 font-bold'>Our Mission</p>
                            <p className='pt-3  ' >At Indo Organics, our mission is to empower farmers with cutting-edge agrochemical solutions that boost crop yield, improve quality, and promote sustainable farming practices. We are committed to fostering a healthier and more productive agricultural ecosystem by offering products that are not only effective but also environmentally responsible.</p>
                        </div>
                    </div>
                </div>




            </div>





            {/* <div className='flex  justify-center w-[100%] py-1  text-black'>

                    <div className='w-[90%] '>
                        <div className='p-4 py-[3rem]' data-aos="fade-down-left">
                            <p className='py-2 text-3xl text-blue-900 font-bold'>WHO WE ARE ?
                            </p>
                            <p className='py-1 ' >&#9702; Established in 2010 in association with Indogulf Cropsciences PTY, LTD, Australia.</p>
                            <p className='pt-3' >&#9702; One of the leading players in the Indian crop industry. We are pioneers in Biostimulants and safe agricultural inputs</p>
                            <p className='pt-3  ' >&#9702; Focuses on manufacturing and marketing of Green Technology based Plant health and Nutritional Products.</p>
                            <p className='pt-3 ' >&#9702; Has introduced a mix of organic products range including plant nutrients, Biostimulants, crop boosters and
                                energizers.</p>
                            <p className='pt-3 ' >&#9702; Has developed Product matrix as per the stage of the crop focusing on the farmers to get a better yield of a quality
                                product.</p>

                        </div>

                        <div className='p-4 py-[3rem]' data-aos="fade-left">
                            <p className='py-2 text-3xl text-blue-900 font-bold'>PHILOSOPHY
                            </p>
                            <p className='text-l  font-bold'>Key- A Symbol of Our Promise</p>
                            <p className='py-1 '>&#9702; Our mascot is small Key which we believe is Key to Success</p>
                            <p className='pt-3'>&#9702; For us Key is nothing but attitude, which is embedded in all its positivity among our team members and our way of doing business</p>
                            <p className='pt-3 ' >&#9702; The attitude to create possibilities of success and growth for all associated with our company.
                            </p>
                            <p className='pt-3 ' >&#9702; This is the Key to growth which will be the differentiation.</p>
                        </div>
                    </div>
                </div> */}

















            {/* <section class="relative min-h-screen flex flex-col justify-center bg-slate-50 overflow-hidden">
    <div class="w-full max-w-6xl mx-auto px-4 md:px-6 py-24">
        <div class="flex flex-col justify-center divide-y divide-slate-200 [&>*]:py-16">

            <div class="w-full max-w-3xl mx-auto">
            
             
                <div class="-my-6">

                   
                    <div class="relative pl-8 sm:pl-32 py-6 group">
                    
                        <div class="font-medium text-indigo-500 mb-1 sm:mb-0">The origin</div>
                      ->
                        <div class="flex flex-col sm:flex-row items-start mb-1 group-last:before:hidden before:absolute before:left-2 sm:before:left-0 before:h-full before:px-px before:bg-slate-300 sm:before:ml-[6.5rem] before:self-start before:-translate-x-1/2 before:translate-y-3 after:absolute after:left-2 sm:after:left-0 after:w-2 after:h-2 after:bg-indigo-600 after:border-4 after:box-content after:border-slate-50 after:rounded-full sm:after:ml-[6.5rem] after:-translate-x-1/2 after:translate-y-1.5">
                            <time class="sm:absolute left-0 translate-y-0.5 inline-flex items-center justify-center text-xs font-semibold uppercase w-20 h-6 mb-3 sm:mb-0 text-emerald-600 bg-emerald-100 rounded-full">May, 2020</time>
                            <div class="text-xl font-bold text-slate-900">Acme was founded in Milan, Italy</div>
                        </div>
                      
                        <div class="text-slate-500">Pretium lectus quam id leo. Urna et pharetra pharetra massa massa. Adipiscing enim eu neque aliquam vestibulum morbi blandit cursus risus.</div>
                    </div>
                    
             
                    <div class="relative pl-8 sm:pl-32 py-6 group">
                      
                        <div class="font-medium text-indigo-500 mb-1 sm:mb-0">The milestone</div>
                        <!-- Vertical line (::before) ~ Date ~ Title ~ Circle marker (::after) -->
                        <div class="flex flex-col sm:flex-row items-start mb-1 group-last:before:hidden before:absolute before:left-2 sm:before:left-0 before:h-full before:px-px before:bg-slate-300 sm:before:ml-[6.5rem] before:self-start before:-translate-x-1/2 before:translate-y-3 after:absolute after:left-2 sm:after:left-0 after:w-2 after:h-2 after:bg-indigo-600 after:border-4 after:box-content after:border-slate-50 after:rounded-full sm:after:ml-[6.5rem] after:-translate-x-1/2 after:translate-y-1.5">
                            <time class="sm:absolute left-0 translate-y-0.5 inline-flex items-center justify-center text-xs font-semibold uppercase w-20 h-6 mb-3 sm:mb-0 text-emerald-600 bg-emerald-100 rounded-full">May, 2021</time>
                            <div class="text-xl font-bold text-slate-900">Reached 5K customers</div>
                        </div>
                        <!-- Content -->
                        <div class="text-slate-500">Pretium lectus quam id leo. Urna et pharetra pharetra massa massa. Adipiscing enim eu neque aliquam vestibulum morbi blandit cursus risus.</div>
                    </div>
                    
                    <!-- Item #3 -->
                    <div class="relative pl-8 sm:pl-32 py-6 group">
                        <!-- Purple label -->
                        <div class="font-medium text-indigo-500 mb-1 sm:mb-0">The acquisitions</div>
                        <!-- Vertical line (::before) ~ Date ~ Title ~ Circle marker (::after) -->
                        <div class="flex flex-col sm:flex-row items-start mb-1 group-last:before:hidden before:absolute before:left-2 sm:before:left-0 before:h-full before:px-px before:bg-slate-300 sm:before:ml-[6.5rem] before:self-start before:-translate-x-1/2 before:translate-y-3 after:absolute after:left-2 sm:after:left-0 after:w-2 after:h-2 after:bg-indigo-600 after:border-4 after:box-content after:border-slate-50 after:rounded-full sm:after:ml-[6.5rem] after:-translate-x-1/2 after:translate-y-1.5">
                            <time class="sm:absolute left-0 translate-y-0.5 inline-flex items-center justify-center text-xs font-semibold uppercase w-20 h-6 mb-3 sm:mb-0 text-emerald-600 bg-emerald-100 rounded-full">May, 2022</time>
                            <div class="text-xl font-bold text-slate-900">Acquired various companies, inluding Technology Inc.</div>
                        </div>
                        <!-- Content -->
                        <div class="text-slate-500">Pretium lectus quam id leo. Urna et pharetra pharetra massa massa. Adipiscing enim eu neque aliquam vestibulum morbi blandit cursus risus.</div>
                    </div>
                    
                    <!-- Item #4 -->
                    <div class="relative pl-8 sm:pl-32 py-6 group">
                        <!-- Purple label -->
                        <div class="font-medium text-indigo-500 mb-1 sm:mb-0">The IPO</div>
                        <!-- Vertical line (::before) ~ Date ~ Title ~ Circle marker (::after) -->
                        <div class="flex flex-col sm:flex-row items-start mb-1 group-last:before:hidden before:absolute before:left-2 sm:before:left-0 before:h-full before:px-px before:bg-slate-300 sm:before:ml-[6.5rem] before:self-start before:-translate-x-1/2 before:translate-y-3 after:absolute after:left-2 sm:after:left-0 after:w-2 after:h-2 after:bg-indigo-600 after:border-4 after:box-content after:border-slate-50 after:rounded-full sm:after:ml-[6.5rem] after:-translate-x-1/2 after:translate-y-1.5">
                            <time class="sm:absolute left-0 translate-y-0.5 inline-flex items-center justify-center text-xs font-semibold uppercase w-20 h-6 mb-3 sm:mb-0 text-emerald-600 bg-emerald-100 rounded-full">May, 2023</time>
                            <div class="text-xl font-bold text-slate-900">Acme went public at the New York Stock Exchange</div>
                        </div>
                        <!-- Content -->
                        <div class="text-slate-500">Pretium lectus quam id leo. Urna et pharetra pharetra massa massa. Adipiscing enim eu neque aliquam vestibulum morbi blandit cursus risus.</div>
                    </div>

                </div>
                <!-- End: Vertical Timeline #1 -->
                
            </div>

        </div>
    </div>
</section> */}



            {/* <section class="relative min-h-screen flex flex-col justify-center bg-slate-50 overflow-hidden">
    <div class="w-full max-w-6xl mx-auto px-4 md:px-6 py-24">
        <div class="flex flex-col justify-center divide-y divide-slate-200 [&>*]:py-16">


            <div class="w-full max-w-3xl mx-auto">
            
                <!-- Vertical Timeline #2 -->
                <div class="space-y-8 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-slate-300 before:to-transparent">

                    <!-- Item #1 -->
                    <div class="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
                        <!-- Icon -->
                        <div class="flex items-center justify-center w-10 h-10 rounded-full border border-white bg-slate-300 group-[.is-active]:bg-emerald-500 text-slate-500 group-[.is-active]:text-emerald-50 shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2">
                            <svg class="fill-current" xmlns="http://www.w3.org/2000/svg" width="12" height="10">
                                <path fill-rule="nonzero" d="M10.422 1.257 4.655 7.025 2.553 4.923A.916.916 0 0 0 1.257 6.22l2.75 2.75a.916.916 0 0 0 1.296 0l6.415-6.416a.916.916 0 0 0-1.296-1.296Z" />
                            </svg>
                        </div>
                        <!-- Card -->
                        <div class="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] bg-white p-4 rounded border border-slate-200 shadow">
                            <div class="flex items-center justify-between space-x-2 mb-1">
                                <div class="font-bold text-slate-900">Order Placed</div>
                                <time class="text-xs font-medium text-indigo-500">08/06/2023</time>
                            </div>
                            <div class="text-slate-500">Pretium lectus quam id leo. Urna et pharetra aliquam vestibulum morbi blandit cursus risus.</div>
                        </div>
                    </div>
                    
                    <!-- Item #2 -->
                    <div class="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
                        <!-- Icon -->
                        <div class="flex items-center justify-center w-10 h-10 rounded-full border border-white bg-slate-300 group-[.is-active]:bg-emerald-500 text-slate-500 group-[.is-active]:text-emerald-50 shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2">
                            <svg class="fill-current" xmlns="http://www.w3.org/2000/svg" width="12" height="10">
                                <path fill-rule="nonzero" d="M10.422 1.257 4.655 7.025 2.553 4.923A.916.916 0 0 0 1.257 6.22l2.75 2.75a.916.916 0 0 0 1.296 0l6.415-6.416a.916.916 0 0 0-1.296-1.296Z" />
                            </svg>
                        </div>
                        <!-- Card -->
                        <div class="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] bg-white p-4 rounded border border-slate-200 shadow">
                            <div class="flex items-center justify-between space-x-2 mb-1">
                                <div class="font-bold text-slate-900">Order Shipped</div>
                                <time class="text-xs font-medium text-indigo-500">09/06/2023</time>
                            </div>
                            <div class="text-slate-500">Pretium lectus quam id leo. Urna et pharetra aliquam vestibulum morbi blandit cursus risus.</div>
                        </div>
                    </div>
                    
                    <!-- Item #3 -->
                    <div class="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
                        <!-- Icon -->
                        <div class="flex items-center justify-center w-10 h-10 rounded-full border border-white bg-slate-300 group-[.is-active]:bg-emerald-500 text-slate-500 group-[.is-active]:text-emerald-50 shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2">
                            <svg class="fill-current" xmlns="http://www.w3.org/2000/svg" width="12" height="10">
                                <path fill-rule="nonzero" d="M10.422 1.257 4.655 7.025 2.553 4.923A.916.916 0 0 0 1.257 6.22l2.75 2.75a.916.916 0 0 0 1.296 0l6.415-6.416a.916.916 0 0 0-1.296-1.296Z" />
                            </svg>
                        </div>
                        <!-- Card -->
                        <div class="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] bg-white p-4 rounded border border-slate-200 shadow">
                            <div class="flex items-center justify-between space-x-2 mb-1">
                                <div class="font-bold text-slate-900">In Transit</div>
                                <time class="text-xs font-medium text-indigo-500">10/06/2023</time>
                            </div>
                            <div class="text-slate-500">Pretium lectus quam id leo. Urna et pharetra aliquam vestibulum morbi blandit cursus risus.</div>
                        </div>
                    </div>
                    
                    <!-- Item #4 -->
                    <div class="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
                        <!-- Icon -->
                        <div class="flex items-center justify-center w-10 h-10 rounded-full border border-white bg-slate-300 group-[.is-active]:bg-emerald-500 text-slate-500 group-[.is-active]:text-emerald-50 shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2">
                            <svg class="fill-current" xmlns="http://www.w3.org/2000/svg" width="12" height="10">
                                <path fill-rule="nonzero" d="M10.422 1.257 4.655 7.025 2.553 4.923A.916.916 0 0 0 1.257 6.22l2.75 2.75a.916.916 0 0 0 1.296 0l6.415-6.416a.916.916 0 0 0-1.296-1.296Z" />
                            </svg>
                        </div>
                        <!-- Card -->
                        <div class="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] bg-white p-4 rounded border border-slate-200 shadow">
                            <div class="flex items-center justify-between space-x-2 mb-1">
                                <div class="font-bold text-slate-900">Out of Delivery</div>
                                <time class="text-xs font-medium text-indigo-500">12/06/2023</time>
                            </div>
                            <div class="text-slate-500">Pretium lectus quam id leo. Urna et pharetra aliquam vestibulum morbi blandit cursus risus.</div>
                        </div>
                    </div>
                    
                    <!-- Item #5 -->
                    <div class="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group">
                        <!-- Icon -->
                        <div class="flex items-center justify-center w-10 h-10 rounded-full border border-white bg-slate-300 group-[.is-active]:bg-emerald-500 text-slate-500 group-[.is-active]:text-emerald-50 shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2">
                            <svg class="fill-current" xmlns="http://www.w3.org/2000/svg" width="12" height="12">
                                <path d="M12 10v2H7V8.496a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5V12H0V4.496a.5.5 0 0 1 .206-.4l5.5-4a.5.5 0 0 1 .588 0l5.5 4a.5.5 0 0 1 .206.4V10Z" />
                            </svg>
                        </div>
                        <!-- Card -->
                        <div class="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] bg-white p-4 rounded border border-slate-200 shadow">
                            <div class="flex items-center justify-between space-x-2 mb-1">
                                <div class="font-bold text-slate-900">Delivered</div>
                                <time class="text-xs font-medium text-amber-500">Exp. 12/08/2023</time>
                            </div>
                            <div class="text-slate-500">Pretium lectus quam id leo. Urna et pharetra aliquam vestibulum morbi blandit cursus risus.</div>
                        </div>
                    </div>

                </div>
                <!-- End: Vertical Timeline #2 -->

            </div>

        </div>
    </div>
</section> */}

        </>
    )
}

export default AboutUs


