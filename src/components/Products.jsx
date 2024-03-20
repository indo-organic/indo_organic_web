import { Link } from "react-router-dom"
import protection_img from '../prod_img/protectImg.jpg'
import supplements_img from '../prod_img/supplements.jpg'
import adjuvants_img from '../prod_img/adjuvantsImg.jpg'

const Products = () => {
  return (
    <>
   
  <section className="text-gray-600 body-font">
  <div className="container px-5 py-24 mx-auto">
    <div className="flex flex-wrap sm:-m-4 -mx-4 -mb-10 -mt-4">
      <div className="p-4 md:w-1/3 sm:mb-0 mb-6">
        <div className="rounded-lg h-64 overflow-hidden">
          <img alt="content" className="object-cover object-center h-full w-full" src={protection_img}/>
        </div>
        <h2 className="text-xl font-medium title-font text-gray-900 mt-5">Agrochemical</h2>
        <p className="text-base leading-relaxed mt-2">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Maiores a minus est, labore, iusto laboriosam provident dolor nostrum maxime saepe ea illum ut tempore consequatur nesciunt corporis ipsa, quidem in..</p>
        <Link to='/agrochemical' className="text-indigo-500 inline-flex  items-center mt-3">Learn More
          <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-4 h-4 ml-2" viewBox="0 0 24 24">
            <path d="M5 12h14M12 5l7 7-7 7"></path>
          </svg>
        </Link>
      </div>
      <div className="p-4 md:w-1/3 sm:mb-0 mb-6">
        <div className="rounded-lg h-64 overflow-hidden">
          <img alt="content" className="object-cover object-center h-full w-full" src={supplements_img}/>
        </div>
        <h2 className="text-xl font-medium title-font text-gray-900 mt-5">IOL Speciality</h2>
        <p className="text-base leading-relaxed mt-2">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Error reiciendis quisquam eligendi explicabo nostrum deleniti, voluptatum accusamus deserunt inventore iusto? Voluptates hic ea, est deleniti unde et reprehenderit officiis voluptatum?</p>
        <Link to='/speciality' className="text-indigo-500 inline-flex items-center mt-3">Learn More
          <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-4 h-4 ml-2" viewBox="0 0 24 24">
            <path d="M5 12h14M12 5l7 7-7 7"></path>
          </svg>
        </Link>
      </div>
      <div className="p-4 md:w-1/3 sm:mb-0 mb-6">
        <div className="rounded-lg h-64 overflow-hidden">
          <img alt="content" className="object-cover object-center h-full w-full" src={adjuvants_img}/>
        </div>
        <h2 className="text-xl font-medium title-font text-gray-900 mt-5">Adjuvants</h2>
        <p className="text-base leading-relaxed mt-2">Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio harum, alias nostrum a autem aperiam dolores in tempora dolore accusantium expedita facilis officia, ducimus sunt quos aut id temporibus voluptas!</p>
        < Link to='/adjuvants' className="text-indigo-500 inline-flex items-center mt-3">Learn More
          <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-4 h-4 ml-2" viewBox="0 0 24 24">
            <path d="M5 12h14M12 5l7 7-7 7"></path>
          </svg>
        </Link>
      </div>
    </div>
  </div>
</section>
    
    
    
    
    </>
  )
}

export default Products