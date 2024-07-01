import { IoIosCall } from "react-icons/io";
import { MdEmail } from "react-icons/md";
import { TypeAnimation } from 'react-type-animation';

const Top = () => {
    const phoneNumber = '01145500067';

    const handlePhoneClick = () => {
        window.location.href = `tel:${phoneNumber}`;
    };

    const emailAddress = 'info@indoorganics.in';

    const handleEmailClick = () => {
        window.location.href = `mailto:${emailAddress}`;
    };

    return (



        <section className="bg-[#004d66] min-h-[40px] px-4 py-2 sm:px-8 xl:flex xxl:flex lg:flex md:flex items-center max-sm:flex-col sm:block ">

           
          



            <div className=" text-white">
                <a href="javscript:void(0)" className="text-white text-sm mr-1">
                    <TypeAnimation
                        sequence={[
                            ' नमस्ते',
                            2000,
                            'Hello',
                            2000,
                            'ਸਤ ਸ੍ਰੀ ਅਕਾਲ',
                            2000,
                            'வணக்கம்',
                            2000
                        ]}
                        wrapper="span"
                        speed={50}
                        style={{ display: 'inline-block' }}
                        repeat={Infinity}
                    />
                </a>

            </div>



            <button type="button" className="text-white text-sm ml-auto pl-3" onClick={handlePhoneClick}>
               
                 < IoIosCall  className="w-[16px] h-[16px] mr-3 inline-block"/>
                + 011-49059099/45500067
            </button>
            <span className="border-l h-3 mx-6 max-sm:hidden"></span>


            <button type="button" className="text-white text-sm  pl-3 border-none" onClick={handleEmailClick}>
                
                < MdEmail  className="w-[16px] h-[16px] mr-3 inline-block"/>

                info@indoorganics.in
            </button>




        </section>



       
    )
}

export default Top;


