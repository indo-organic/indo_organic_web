

const News = () => {
    return (
        <>

            <div className="flex flex-col  gap-4 w-[100%] min-h-[50rem] bg-cover bg-fixed bg-center justify-center items-center m-auto "
                style={{ backgroundImage: 'url(https://img.freepik.com/free-vector/abstract-background-with-squares_23-2148995948.jpg)' }}>

                <div className="text-center pt-[2rem] ">
                    <h1 className="font-[900] text-4xl mb-1 text-green-700">Headlines & Articles</h1>

                </div>

                <div className="max-w-screen-xl mx-auto p-5 sm:p-10 md:p-16 relative">
                    <div className="grid grid-cols-1 sm:grid-cols-12 gap-5">

                        <div className="sm:col-span-5">
                            <a href="https://www.thehindubusinessline.com/economy/agri-business/will-basmati-farmers-be-able-to-sell-crop-above-non-basmati-paddy/article68304564.ece" target="blank">
                                <div
                                    className="bg-cover text-center overflow-hidden"
                                    style={{ minHeight: '300px', backgroundImage: "url('https://bl-i.thgim.com/public/incoming/djxuay/article68263989.ece/alternates/LANDSCAPE_1200/IMG_BL14_Basmati_rice_2_1_9FCDDCCF.jpg')" }}
                                    title="news"
                                >
                                </div>
                            </a>
                            <div className="mt-3 bg-white rounded-b lg:rounded-b-none lg:rounded-r flex flex-col justify-between leading-normal">
                                <div>
                                    <a
                                        href="https://www.thehindubusinessline.com/economy/agri-business/will-basmati-farmers-be-able-to-sell-crop-above-non-basmati-paddy/article68304564.ece" target="blank"
                                        className="text-xs text-indigo-600 uppercase font-medium hover:text-gray-900 transition duration-500 ease-in-out"
                                    >
                                        Agri Business
                                    </a>
                                    <a
                                        href="#"
                                        className="block text-gray-900 font-bold text-2xl mb-2 hover:text-indigo-600 transition duration-500 ease-in-out"
                                    >
                                        Basmati paddy growers look for premium, but it may dampen exports
                                    </a>
                                    <p className="text-gray-700 text-base mt-2">


                                        Farmers seek higher returns as Chhattisgarh buys common variety paddy at ₹3,100/quintal; Odisha to follow suit
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="sm:col-span-7 grid grid-cols-2 lg:grid-cols-3 gap-5">
                            <div>
                                <a href="https://www.downtoearth.org.in/news/agriculture/why-is-wheat-procurement-low-despite-bumper-production--96223" target="blank">
                                    <div
                                        className="h-40 bg-cover text-center overflow-hidden"
                                        style={{ backgroundImage: "url('https://cdn.downtoearth.org.in/library/large/2024-05-18/0.48174000_1716037971_gnjfb29w4aaiigj.jpg')" }}
                                        title="news"
                                    >
                                    </div>
                                </a>
                                <a
                                    href="#"
                                    className="text-gray-900 inline-block font-semibold text-md my-2 hover:text-indigo-600 transition duration-500 ease-in-out"
                                >
                                    Why is wheat procurement low despite bumper production?
                                </a>
                            </div>
                            <div>
                                <a href="https://www.downtoearth.org.in/news/agriculture/bad-year-for-muzaffarpur-s-litchi-farmers-high-temperature-hot-westerly-winds-result-in-high-fruit-drop-95961" target='_blank'>
                                    <div
                                        className="h-40 bg-cover text-center overflow-hidden"
                                        style={{ backgroundImage: "url('https://cdn.downtoearth.org.in/library/large/2024-05-03/0.85552200_1714739625_istock-1404212348.jpg')" }}
                                        title="news"
                                    >
                                    </div>
                                </a>
                                <a
                                    href="#"
                                    className="text-gray-900 inline-block font-semibold text-md my-2 hover:text-indigo-600 transition duration-500 ease-in-out"
                                >
                                    Bad year for Muzaffarpur’s litchi farmers? High temperature, hot westerly winds result in high fruit drop
                                </a>
                            </div>
                            <div>
                                <a href="https://www.downtoearth.org.in/coverage/agriculture/dte-coverage-pink-bollworm-s-cotton-curse-in-india-s-north-zone-92549" target="blank">
                                    <div
                                        className="h-40 bg-cover text-center overflow-hidden"
                                        style={{ backgroundImage: "url('https://cdn.downtoearth.org.in/library/large/2023-10-19/0.32407400_1697716582_btcotton19.jpg')" }}
                                        title=""
                                    >
                                    </div>
                                </a>
                                <a
                                    href="#"
                                    className="text-gray-900 inline-block font-semibold text-md my-2 hover:text-indigo-600 transition duration-500 ease-in-out"
                                >DTE Coverage: Pink bollworm’s cotton curse in India's North Zone
                                </a>
                            </div>

                            <div>
                                <a href="https://www.thehindubusinessline.com/economy/agri-business/pm-modi-releases-20000-crore-for-926-crore-farmers-under-pm-kisan-samman-nidhi-scheme/article68303900.ece">
                                    <div
                                        className="h-40 bg-cover text-center overflow-hidden"
                                        style={{ backgroundImage: "url('https://bl-i.thgim.com/public/incoming/dce01v/article68305114.ece/alternates/LANDSCAPE_1200/20240618208L.jpg')" }}
                                        title=""
                                    >
                                    </div>
                                </a>
                                <a
                                    href="#"
                                    className="text-gray-900 inline-block font-semibold text-md my-2 hover:text-indigo-600 transition duration-500 ease-in-out"
                                >
                                    PM Modi releases ₹20,000 crore for 9.26 crore farmers under PM Kisan Samman Nidhi Scheme
                                </a>
                            </div>





                        </div>

                    </div>
                </div>



            </div>


        </>
    )
}

export default News