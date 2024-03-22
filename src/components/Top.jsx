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
            <div className="top">

                <div className="top_right">
                    {/* right side content here */}
                    
                    News &  Insights

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
            </div>

        </>
    )
}

export default Top

