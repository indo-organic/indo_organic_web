import '../styles/Product.scss'
import productImg from '../assets/image2.jpg'
import { FaArrowDown } from "react-icons/fa";

const Products = () => {
  return (
    <>
    
    <div className="product">
      <div className="product_text">
        Our product
      </div>
      <div className="product_box">
        <div className="product_box_1">
              <img src={productImg} alt="" />
              <p className='p_b_t'>agrochemical</p>
        </div>
        <div className="product_box_2">
        <img src={productImg} alt="" />
          <p className='p_b_t'>biostimulant</p>
        </div>
      </div>


         <div className="product_extra_text">
         "Indo Organics was established with the vision of creating a beneficial influence within the farming community."

         <FaArrowDown />

         </div>





    </div>
    </>
  )
}

export default Products