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
        
        <div className="bg-green-100 py-3 px-[10rem]  z-10 flex  justify-between lg:items-center ">
            <div className="text-sm font-bold text-black  sm:mb-0">
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
            </div>
            <div className="flex flex-col sm:flex-row items-center gap-4 cursor-pointer font-bold">
                <div className="text-gray-700 hover:text-gray-900 dark:text-gray-500 hover:dark:text-gray-700 text-[13px] flex items-center" onClick={handleEmailClick}>
                    <MdEmail className="mr-1" />
                    info@indoorganics.in
                </div>
                <div className="text-gray-700 hover:text-gray-900 dark:text-gray-500 hover:dark:text-gray-700 text-[13px] flex items-center" onClick={handlePhoneClick}>
                    <IoIosCall className="mr-1" />
                    + 011-49059099/45500067
                </div>
            </div>
        </div>
    )
}

export default Top;


