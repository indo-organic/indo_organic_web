import '../styles/Product.scss'
import crop_en_img_here from '../assets/slide3.jpg'
const Products = () => {
  return (
    <>

      <div className="product">
        <div className="product_title">
          Our products
        </div>


        <div className="product_4">
          <div className="crop_enhancement">
            <div className="crop_en_img"> 
            <img src={crop_en_img_here} alt="" />
             </div>
            <p className='product_4_text'>Crop enhancement</p>
          </div>
          <div className="fungicide">
            <div className="fungicide_img">
            <img src={crop_en_img_here} alt="" />
            </div>
            <p className='product_4_text'>fungicide</p>
          </div>

          <div className="herbicide">
            <div className="herbicide_img">
            <img src={crop_en_img_here} alt="" />
            </div>
            <p className='product_4_text'>herbicide</p>
          </div>

          <div className="insecticide">
            <div className="insecticide_img">
            <img src={crop_en_img_here} alt="" />
            </div>
            <p className='product_4_text'>insecticide</p>
          </div>
        </div>


      </div>



    </>
  )
}

export default Products