import '../styles/coHome.scss'
import { Link } from 'react-router-dom'
const ContactHome = () => {
    return (
        <>

            <section className="flex  gap-4 w-[100%] min-h-[20rem] bg-cover bg-fixed bg-bottom justify-center items-center m-auto "
                style={{ backgroundImage: 'url(https://www.deere.co.in/assets/images/region-1/industries/agriculture/in_agriculture_hero_1366x347.jpg)' }}>

                <div className="w-[80%] h-[20rem]  flex flex-col items-center justify-center gap-5 uppercase font-serif">
                    <p className='text-white text-[3rem] font-[900]'>grow with us, thrive tomorrow</p>
                  
                    <Link to='/contact' className="relative inline-flex items-center justify-start px-6 py-3 overflow-hidden font-medium transition-all bg-green-500 rounded-xl group">
                        <span className="absolute top-0 right-0 inline-block w-4 h-4 transition-all duration-500 ease-in-out bg-green-700 rounded group-hover:-mr-4 group-hover:-mt-4">
                            <span className="absolute top-0 right-0 w-5 h-5 rotate-45 translate-x-1/2 -translate-y-1/2 bg-white"></span>
                        </span>
                        <span className="absolute bottom-0 left-0 w-full h-full transition-all duration-500 ease-in-out delay-200 -translate-x-full translate-y-full bg-green-900 rounded-2xl group-hover:mb-12 group-hover:translate-x-0"></span>
                        <span className="relative w-full text-left text-white transition-colors duration-200 ease-in-out group-hover:text-white">Contact us</span>
                    </Link>


                </div>

            </section>




        </>
    )
}

export default ContactHome