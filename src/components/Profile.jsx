
// import auntyKey from '../AboutImg/auntyKey.png'
// import favicon from '../AboutImg/favicon.jpg'
// import profileLogoStart from '../AboutImg/profileLogoStart.jpg'


const Profile = () => {
    return (
        <>
             <div className='flex justify-center items-center bg-white h-screen flex-col gap-6 '>
                <div>

                    {/* <img src={profileLogoStart} alt="" className='w-[20rem]' /> */}
                </div>
                <div className=''>
                    <p className=' lg:text-4xl md:text-2xl xl:text-5xl sm:text-[1.5rem] font-bold text-blue-900 mb-4 font-monospace '>WELCOME TO INDO ORGANICS PRIVATE LIMITED</p>
                </div>
                <div className='flex gap-5 '>
                    <div className='h-8 w-8 bg-blue-900 rounded-full animate-bounce [animation-delay:-0.3s]'></div>
                    <div className='h-8 w-8 bg-blue-900 rounded-full animate-bounce [animation-delay:-0.15s]'></div>
                    <div className='h-8 w-8 bg-blue-900 rounded-full animate-bounce'></div>
                </div>
            </div> 
        </>
    );
};

export default Profile;