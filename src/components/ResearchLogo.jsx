import certificationLogo1 from '../CertificationLogo/certificationLogo1.jpg'
import certificationLogo2 from '../CertificationLogo/certificationLogo2.jpg'
import certificationLogo3 from '../CertificationLogo/certificationLogo3.jpg'

const ResearchLogo = () => {
    return (
        <>
            {/* `url(${AboutImg})` */}
            {/* <div className="flex flex-col gap-4 w-[100%] h-[20rem] bg-cover bg-fixed bg-top justify-around items-center m-auto "
                style={{ backgroundImage: 'url("https://media.istockphoto.com/id/990892396/photo/indian-farmer-holding-crop-plant-in-his-wheat-field.jpg?s=612x612&w=0&k=20&c=je5zLlBPEeFplzaSAg_hLryRy2r9AiajSBV_2dd3u_A=")' }}>


                <div className='text-4xl font-bold  text-white' >
                    Quality Certifications
                </div>
                <div className='flex gap-5'>
                    <img src={certificationLogo1} alt="" className='w-40  ' />
                    <img src={certificationLogo2} alt="" className='w-40' />
                    <img src={certificationLogo3} alt="" className='w-40' />
                </div>



            </div> */}






            <div class=" py-6 sm:py-8 lg:py-12">
                <div class="mx-auto max-w-screen-2xl px-4 md:px-8">
                    <div class="mb-4 flex flex-col items-center md:mb-8 lg:flex-row lg:justify-between">
                        <h2 class="mb-2 text-center text-2xl font-bold text-gray-800 lg:mb-0 lg:text-3xl"> Quality Certifications</h2>


                    </div>

                    <div class="grid grid-cols-2 gap-4 rounded-lg md:grid-cols-3 lg:gap-6">

                        <div class="flex h-16 items-center justify-center rounded-lg bg-gray-100 p-4 text-gray-400 sm:h-32">
                           
                            <img src={certificationLogo1} alt="" className='w-[7rem]  ' />

                        </div>

                        <div class="flex h-16 items-center justify-center rounded-lg bg-gray-100 p-4 text-gray-400 sm:h-32">
                           
                            <img src={certificationLogo2} alt="" className='w-[7rem]  ' />

                        </div>

                        <div class="flex h-16 items-center justify-center rounded-lg bg-gray-100 p-4 text-gray-400 sm:h-32">
                           

                            <img src={certificationLogo3} alt="" className='w-[7rem]  ' />

                        </div>


                    </div>
                </div>
            </div>





        </>
    )
}

export default ResearchLogo