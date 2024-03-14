import '../styles/Product.scss'
import thypo from '../assets/thypo.jpg'
const Products = () => {
  return (
    <>
    <div className="product">
       <div className="product_title">
         our products
       </div>

       <div className="product_3">
     <div className="product_one">
        <img src={thypo} alt="" />
     </div>
     <div className="product_two">
     <img src={thypo} alt="" />
     </div>
     <div className="product_three">
     <img src={thypo} alt="" />
     </div>

       </div>

    </div>


    </>
  )
}

export default Products