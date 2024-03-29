import React from 'react'
import alaska from '../prod_img/alaska.jpg'
const Hightlights = () => {
    return (
        <>
            <div className="carousel carousel-center max-w-md p-4 space-x-4 bg-neutral rounded-box">
                <div className="carousel-item">
                    <img src={alaska} className="rounded-box" />
                </div>
                <div className="carousel-item">
                    <img src={alaska} className="rounded-box" />
                </div>
                <div className="carousel-item">
                    <img src="https://daisyui.com/images/stock/photo-1572635148818-ef6fd45eb394.jpg" className="rounded-box" />
                </div>
                <div className="carousel-item">
                    <img src="https://daisyui.com/images/stock/photo-1494253109108-2e30c049369b.jpg" className="rounded-box" />
                </div>
                <div className="carousel-item">
                    <img src="https://daisyui.com/images/stock/photo-1550258987-190a2d41a8ba.jpg" className="rounded-box" />
                </div>
                <div className="carousel-item">
                    <img src="https://daisyui.com/images/stock/photo-1559181567-c3190ca9959b.jpg" className="rounded-box" />
                </div>
                <div className="carousel-item">
                    <img src="https://daisyui.com/images/stock/photo-1601004890684-d8cbf643f5f2.jpg" className="rounded-box" />
                </div>
            </div>


        </>
    )
}

export default Hightlights