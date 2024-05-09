import React from 'react'
import qrImg from '../carouselImg/qr.png'
import phoneQr from '../carouselImg/phoneQr.png'
const QR = () => {
    return (
        <div className="w-full h-screen flex items-center justify-center">
                 
             <div className='w-[50%] h-screen flex items-center justify-center'>
                       <img src={qrImg} alt="" className='w-[40%]'/>

             </div>

             <div className="w-[50%] h-screen bg-slate-100 flex items-center justify-center">
                <p className='p-10 text-[3rem] font-[700] text-green-700'>We're delighted to announce that our valued customers can now easily explore our comprehensive catalogue</p>
             </div>
             
        </div>
    )
}

export default QR