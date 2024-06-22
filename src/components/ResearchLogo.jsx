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






            {/* <div className="flex flex-col gap-4 w-[100%] h-[18rem] bg-cover bg-fixed bg-top justify-around items-center m-auto "
                style={{ backgroundImage: 'url("https://media.istockphoto.com/id/990892396/photo/indian-farmer-holding-crop-plant-in-his-wheat-field.jpg?s=612x612&w=0&k=20&c=je5zLlBPEeFplzaSAg_hLryRy2r9AiajSBV_2dd3u_A=")' }}>
                <div className=" flex items-center justify-center flex-col mx-auto max-w-screen-2xl px-4 md:px-8">
                    <div className="mb-4 flex flex-col items-center md:mb-8 lg:flex-row lg:justify-between">
                        <h2 className="mb-2 text-center text-2xl font-bold text-white lg:mb-0 lg:text-3xl"> Quality Certifications</h2>


                    </div>

                    <div className="grid grid-cols-2 gap-4 rounded-lg md:grid-cols-3 lg:gap-6">

                        <div className="flex h-16 items-center justify-center rounded-lg  p-4 text-gray-400 sm:h-32">
                           
                            <img src={certificationLogo1} alt="" className='w-[8rem] rounded-full ' />

                        </div>

                        <div className="flex h-16 items-center justify-center rounded-lg p-4 text-gray-400 sm:h-32">
                           
                            <img src={certificationLogo2} alt="" className='w-[8rem] rounded-full ' />

                        </div>

                        <div className="flex h-16 items-center justify-center rounded-lg  p-4 text-gray-400 sm:h-32">
                           

                            <img src={certificationLogo3} alt="" className='w-[8rem] rounded-full  ' />

                        </div>


                    </div>
                </div>
            </div> */}


            <section className="w-[100%] h-[90vh]  flex flex-col  items-center justify-center ">

                <div className="w-[95%] h-[90%] bg-yello-400  flex rounded-lg  flex-col ">

                    <div className=" w-[100%] h-[50%]  flex">
                        <div className="w-[50%] h-[100%] flex flex-col items-start mt-8">
                            <p className="pl-3 text-3xl">Qulity test </p>
                            <h2 className="p-3 text-6xl text-bold">Certifications</h2>
                            <p className="p-3">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quod praesentium nesciunt, nihil molestiae corrupti doloribus officia? Explicabo sapiente veritatis cupiditate!</p>
                        </div>
                    </div>


                    {/* <div className=" w-[100%] h-[50%] bg-gray-200 rounded-lg    flex">


                        <div className="w-[50%] h-[100%]  flex items-center justify-start gap-10  ">
                            <div className="w-[45%] h-[96%]  drop-shadow-md rounded-lg flex flex-col justify-around  pl-2 items-center">
                                <img src={certificationLogo1} alt="" className='w-40  ' />
                            </div>
                            <div className="w-[45%] h-[96%]  drop-shadow-md rounded-lg flex flex-col justify-around  pl-2 items-center">
                                <img src={certificationLogo2} alt="" className='w-40  ' />
                            </div>

                        </div>

                        <div className="w-[52%] h-[100%] flex flex-col   pl-6  justify-center items-end ">
                            <div className="w-[97%] h-[96%] flex items-center bg-gray-400 justify-center rounded-lg overflow-hidden">
                                <img src={certificationLogo3} alt="" className='w-40  ' />

                            </div>
                        </div>
                    </div> */}

                    <div className="flex  gap-4 w-[100%] h-[20rem] bg-cover bg-fixed bg-top justify-around items-center m-auto  rounded-lg"
                        style={{ backgroundImage: 'url("https://media.istockphoto.com/id/990892396/photo/indian-farmer-holding-crop-plant-in-his-wheat-field.jpg?s=612x612&w=0&k=20&c=je5zLlBPEeFplzaSAg_hLryRy2r9AiajSBV_2dd3u_A=")' }}>
                        <img src={certificationLogo1} alt="" className='w-40  ' />
                        <img src={certificationLogo2} alt="" className='w-40  ' />
                        <img src={certificationLogo3} alt="" className='w-40  ' />





                    </div>

                </div>





            </section>



        </>
    )
}

export default ResearchLogo