import '../styles/Top.scss'
import { IoIosCall } from "react-icons/io";
import { MdEmail } from "react-icons/md";

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
            {/* <div className="top">

                <div className="top_right">


                    News

                </div>
                <div className="top_left">

                    <div className="top_left_no">
                        <div className="top_left_no_icon">
                            <IoIosCall />
                        </div>
                        <div className="top_left_no_91" onClick={handlePhoneClick}>
                            011 4550 0067
                        </div>
                    </div>
                    <div className="top_left_email">

                        <div className="top_left_email_icon">
                            <MdEmail />
                        </div>
                        <div className="top_left_email_e" onClick={handleEmailClick}>
                            info@indoorganics.in
                        </div>

                    </div>
                </div>
            </div> */}



            {/* <div className="w-full h-10 bg-green-800 text-black flex justify-around items-center lg:block md:hidden sm:hidden">
                <div className="weather">
                    weather
                </div>
                <div className="flex">

                    <div className="top_left_no">
                        <div className="top_left_no_icon">
                            <IoIosCall />
                        </div>
                        <div className="top_left_no_91" onClick={handlePhoneClick}>
                            011 4550 0067
                        </div>
                    </div>
                    <div className="top_left_email">

                        <div className="top_left_email_icon">
                            <MdEmail />
                        </div>
                        <div className="top_left_email_e" onClick={handleEmailClick}>
                            info@indoorganics.in
                        </div>

                    </div>
                </div>

            </div> */}


<footer class="bg-pink-50 py-4 px-4 shadow-md z-10 flex justify-content-center align-items-center dark:bg-slate-900 dark:text-white ">
    <div class="text-sm text-gray-600 dark:text-gray-300">Welcome to Indo Organics</div>
    <div class="flex ml-auto gap-4">
        <a href="#" class="text-gray-700 hover:text-gray-900 dark:text-gray-500 hover:dark:text-gray-700">
        info@indoorganics.in
        </a>
        <a href="#" class="text-gray-700 hover:text-gray-900 dark:text-gray-500 hover:dark:text-gray-700">
        + 011-49059099/45500067
        </a>
    </div>
</footer>
        </>
    )
}

export default Top

