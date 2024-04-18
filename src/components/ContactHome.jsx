// import contactHome from '../assets/contactHome.jpg'
import contactHome from '../assets/biostimulantbg.png'
const ContactHome = () => {
    return (
        <>

            <section class="bg-green-950">
                <div class="container px-6 py-12 mx-auto">
                    <div>
                        <p class="font-medium text-white">Contact us</p>

                        <h1 class="mt-2 text-2xl font-semibold text-white">Get in touch</h1>

                        <p class="mt-3 text-gray-300 ">Our friendly team would love to hear from you.</p>
                    </div>

                    <div class="grid grid-cols-1 gap-12 mt-10 lg:grid-cols-3">
                        <div class="grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-1">

                            <div >
                                <span class="inline-block p-3 text-blue-500 rounded-full bg-blue-100/80 dark:bg-gray-800">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5">
                                        <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                                    </svg>
                                </span>
                                         
                                <h2 class="mt-4 text-base font-medium text-white">Phone</h2>
                                <p class="mt-2 text-sm text-gray-500 dark:text-gray-400">Mon-Fri from 10am to 5pm.</p>
                                <p class="mt-2 text-sm text-blue-500 dark:text-blue-400"> + 011-49059099/  45500067</p>
                             
                            </div>
                            <div>
                                <span class="inline-block p-3 text-blue-500 rounded-full bg-blue-100/80 dark:bg-gray-800">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5">
                                        <path stroke-linecap="round" stroke-linejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                                    </svg>
                                </span>

                                <h2 class="mt-4 text-base font-medium text-white">Email</h2>
                                <p class="mt-2 text-sm text-gray-500 dark:text-gray-400">Our friendly team is here to help.</p>
                                <p class="mt-2 text-sm text-blue-500 dark:text-blue-400"> info@indoorganics.in</p>
                            </div>

                            <div>
                                <span class="inline-block p-3 text-blue-500 rounded-full bg-blue-100/80 dark:bg-gray-800">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5">
                                        <path stroke-linecap="round" stroke-linejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                                        <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                                    </svg>
                                </span>

                                <h2 class="mt-4 text-base font-medium text-white">Office</h2>
                                <p class="mt-2 text-sm text-gray-500 dark:text-gray-400">M3, Aradhana Bhawan, Commercial Complex</p>
                                <p class="mt-2 text-sm text-gray-500 dark:text-gray-400">100, Azadpur, Delhi-110033.</p>
                            </div>


                        </div>

                        <div class="overflow-hidden rounded-lg lg:col-span-2 h-96 lg:h-auto">
                            <iframe width="100%" height="100%" frameborder="0" title="map" marginheight="0" marginwidth="0" scrolling="no" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3499.339275172473!2d77.17552497529209!3d28.70940507562289!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d031c41947203%3A0xe88fd4421f109030!2sIndo%20Organics%20Pvt.%20Ltd.!5e0!3m2!1sen!2sin!4v1710313494240!5m2!1sen!2sin"></iframe>
                        </div>
                    </div>
                </div>
            </section> 




{/* 
            <section class="bg-green-950">
                <div class="container px-6 py-12 mx-auto">
                    <div class="text-center ">
                        <p class="font-medium text-gray-300">Contact us</p>

                        <h1 class="mt-2 text-2xl font-semibold text-white">We’d love to hear from you</h1>

                        <p class="mt-3 text-gray-500 dark:text-gray-400">Chat to our friendly team.</p>
                    </div>

                    <img class="object-cover w-full h-64 mt-10 rounded-lg lg:h-96" src={contactHome} alt="" />

                    <div class="grid grid-cols-1 gap-12 mt-10 lg:grid-cols-3 sm:grid-cols-2 ">
                        <div class="p-4 rounded-lg bg-blue-50 md:p-6 dark:bg-gray-800 text-center">
                            <span class="inline-block p-3 text-blue-500 rounded-lg bg-blue-100/80 dark:bg-gray-700">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                                </svg>
                            </span>

                            <h2 class="mt-4 text-base font-medium text-gray-800 dark:text-white">Chat to sales</h2>
                            <p class="mt-2 text-sm text-gray-500 dark:text-gray-400">Speak to our friendly team.</p>
                            <p class="mt-2 text-sm text-blue-500 dark:text-blue-400">999999=</p>
                        </div>

                        <div class="p-4 rounded-lg bg-blue-50 md:p-6 dark:bg-gray-800 text-center">
                            <span class="inline-block p-3 text-blue-500 rounded-lg bg-blue-100/80 dark:bg-gray-700">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                                </svg>
                            </span>

                            <h2 class="mt-4 text-base font-medium text-gray-800 dark:text-white">Visit us</h2>
                            <p class="mt-2 text-sm text-gray-500 dark:text-gray-400">Visit our office HQ..</p>
                            <p class="mt-2 text-sm text-blue-500 dark:text-blue-400">------------</p>
                        </div>

                        <div class="p-4 rounded-lg bg-blue-50 md:p-6 dark:bg-gray-800 text-center">
                            <span class="inline-block p-3 text-blue-500 rounded-lg bg-blue-100/80 dark:bg-gray-700">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                                </svg>
                            </span>

                            <h2 class="mt-4 text-base font-medium text-gray-800 dark:text-white">Call us</h2>
                            <p class="mt-2 text-sm text-gray-500 dark:text-gray-400">Mon-Fri from 8am to 5pm.</p>
                            <p class="mt-2 text-sm text-blue-500 dark:text-blue-400">--------------------</p>
                        </div>
                    </div>
                </div>
            </section> */}




        </>
    )
}

export default ContactHome