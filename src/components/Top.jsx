import '../styles/Top.scss'
import { IoIosCall } from "react-icons/io";
import { MdEmail } from "react-icons/md";
import { TypeAnimation } from 'react-type-animation';

const Top = () => {
    const phoneNumber = ' 011 4550 0067'; // Replace with your actual phone number

    const handlePhoneClick = () => {
        window.location.href = `tel:${phoneNumber}`;
    };

    const emailAddress = 'info@indoorganics.in';

    const handleEmailClick = () => {
        window.location.href = `mailto:${emailAddress}`;
    };
    return (
        <>
        
            <footer class="bg-pink-50 py-2 px-4 shadow-md z-10 flex justify-content-center align-items-center dark:bg-slate-900 dark:text-white ">
                <div class="text-sm text-black">
                    <TypeAnimation
                        sequence={[
                            // Same substring at the start will only be typed out once, initially
                           ' नमस्ते' ,
                            2000, // wait 1s before replacing "Mice" with "Hamsters"
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
                <div class="flex ml-auto gap-4">
                    <a href="#" class="text-gray-700 hover:text-gray-900 dark:text-gray-500 hover:dark:text-gray-700 text-[13px]">
                        info@indoorganics.in
                    </a>
                    <a href="#" class="text-gray-700 hover:text-gray-900 dark:text-gray-500 hover:dark:text-gray-700 text-[13px]">
                        + 011-49059099/45500067
                    </a>
                </div>
            </footer>
        </>
    )
}

export default Top

