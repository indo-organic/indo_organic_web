import '../styles/Career.scss'

const Career = () => {
  return (
    <>
       <div className="bg-gray-100 min-h-screen py-12 px-4 sm:px-6 lg:px-8 mt-12 ">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-3xl font-extrabold text-center text-gray-900 sm:text-4xl">Join Our Team</h2>
        <p className="mt-4 text-lg text-center text-gray-600">
          We're passionate about agriculture and innovation. If you share our vision and want to make a difference, explore our current openings and start your journey with us.
        </p>

        <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3 lg:gap-8">
          {/* Example Job Listings */}
          <div className="flex flex-col rounded-lg shadow-lg overflow-hidden">
            <div className="px-6 py-4 bg-white">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Senior Agronomist</h3>
              <p className="text-sm text-gray-600">Location: Remote</p>
              <p className="mt-2 text-gray-700">We are seeking an experienced Senior Agronomist to join our team. The ideal candidate will have a deep understanding of crop science and experience working with farmers to improve crop yield and quality.</p>
            </div>
            <div className="px-6 pt-4 pb-2 bg-gray-50">
            <a href="#" className="text-base font-semibold text-indigo-600 hover:text-indigo-500">Not Available &rarr;</a>
            </div>
          </div>

          <div className="flex flex-col rounded-lg shadow-lg overflow-hidden">
            <div className="px-6 py-4 bg-white">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Marketing Manager</h3>
              <p className="text-sm text-gray-600">Location: Delhi</p>
              <p className="mt-2 text-gray-700">We are looking for a creative and analytical Marketing Manager to develop and execute marketing strategies to promote our agrochemical products. The ideal candidate will have experience in agricultural marketing.</p>
            </div>
            <div className="px-6 pt-4 pb-2 bg-gray-50">
              <a href="#" className="text-base font-semibold text-indigo-600 hover:text-indigo-500">Not Available &rarr;</a>
            </div>
          </div>

          <div className="flex flex-col rounded-lg shadow-lg overflow-hidden">
            <div className="px-6 py-4 bg-white">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Chemical Engineer</h3>
              <p className="text-sm text-gray-600">Location: Delhi</p>
              <p className="mt-2 text-gray-700">We are seeking a Chemical Engineer to support our product development efforts. The ideal candidate will have experience in formulation chemistry and a passion for developing innovative solutions for agriculture.</p>
            </div>
            <div className="px-6 pt-4 pb-2 bg-gray-50">
            <a href="#" className="text-base font-semibold text-indigo-600 hover:text-indigo-500">Not Available &rarr;</a>
            </div>
          </div>
        </div>
      </div>
    </div>




    





      <div class="relative h-56 overflow-hidden rounded-lg md:h-96">

        <div class="hidden duration-700 ease-in-out" data-carousel-item>
          <img src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image-1.jpg" class="absolute block max-w-full h-auto -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="" />
        </div>

        <div class="hidden duration-700 ease-in-out" data-carousel-item="active">
          <img src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image-2.jpg" class="absolute block max-w-full h-auto -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="" />

          <div class="hidden duration-700 ease-in-out" data-carousel-item>
            <img src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image-3.jpg" class="absolute block max-w-full h-auto -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="" />
          </div>

          <div class="hidden duration-700 ease-in-out" data-carousel-item>
            <img src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image-4.jpg" class="absolute block max-w-full h-auto -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="" />
          </div>

          <div class="hidden duration-700 ease-in-out" data-carousel-item>
            <img src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image-5.jpg" class="absolute block max-w-full h-auto -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="" />
          </div>
        </div>

        <button type="button" class="absolute top-0 start-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none" data-carousel-prev>
          <span class="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
            <svg class="w-4 h-4 text-white dark:text-gray-800 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
              <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 1 1 5l4 4" />
            </svg>
            <span class="sr-only">Previous</span>
          </span>
        </button>
        <button type="button" class="absolute top-0 end-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none" data-carousel-next>
          <span class="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
            <svg class="w-4 h-4 text-white dark:text-gray-800 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
              <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 9 4-4-4-4" />
            </svg>
            <span class="sr-only">Next</span>
          </span>
        </button>
      </div>


    </>
  )
}

export default Career