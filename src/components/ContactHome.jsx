import contactHome from '../assets/contactHome.jpg'
const ContactHome = () => {
    return (
        <>

            {/* <section className="w-full h-[60vh] bg-green-900 flex lg:justify-center text-white  gap-2">

                <div className="w-[40%] bg-yellow-300">

                    <div>
                        <h1 className="text-3xl py-3 font-bold">get in touch </h1>
                        <p className="pt-2 text-xl ">location</p>
                   

                    </div>

                    <div className='w-[70%] h-[25vh] pt-3'>
                        <img src="https://images.ctfassets.net/hrltx12pl8hq/28ECAQiPJZ78hxatLTa7Ts/2f695d869736ae3b0de3e56ceaca3958/free-nature-images.jpg?fit=fill&w=1200&h=630" alt="" />
                    </div>

                </div>

                <div className="w-[40%]  pl-5">
                    <div>
                        <h1 className="text-3xl py-3 font-bold">visit us</h1>
                        <p className="pt-2 text-xl ">location</p>
                        <p className="pt-2 text-xl ">location</p>
                        <p className="pt-2 text-xl ">location</p>

                    </div>


                    <div>
                        <iframe className='w-[70%] h-[25vh] pt-3' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3499.339275172473!2d77.17552497529209!3d28.70940507562289!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d031c41947203%3A0xe88fd4421f109030!2sIndo%20Organics%20Pvt.%20Ltd.!5e0!3m2!1sen!2sin!4v1710313494240!5m2!1sen!2sin" frameborder="0"></iframe>

                    </div>


                </div>


            </section> */}



            <section className="inset-1  flex flex-col w-[100%] h-[50vh] bg-cover bg-fixed bg-center justify-center items-center m-auto "
                style={{ backgroundImage: 'url(https://plus.unsplash.com/premium_photo-1674471600152-c5af3e3274f7?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8d2hpdGUlMjB0aGVtZXxlbnwwfHwwfHx8MA%3D%3D)'   }}
            >

                 <p className="text-black text-3xl font-extrabold uppercase py-3">Grow with us, thrive tomorrow</p>
                 <p className="px-[6rem] text-black text-center pb-4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae voluptatem impedit quas, sint aliquam corporis explicabo natus inventore vel quis facere rerum quos dolorem assumenda voluptas quidem veritatis maiores culpa!</p>
                   <p className="border-2 border-black bg-transparent text-black p-2 border-r-2 cursor-pointer">Contact us</p>

            </section>






        </>
    )
}

export default ContactHome