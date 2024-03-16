import '../styles/Product.scss'
import productImg from '../assets/image2.jpg'
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





    </div>
    </>
  )
}

export default Products