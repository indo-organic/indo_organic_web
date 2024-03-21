import { Link } from "react-router-dom"

import rukkaImg from '../prod_img/rukka.jpg'
import alaskaImg from '../prod_img/alaskaImg.jpg'
import indoxamImg from '../prod_img/indoxamImg.jpg'
const Agrochemical = () => {
  return (
    <>
      <div className="agrochemical text-3xl text-center mt-8 uppercase ">
        agrochemical
      </div>
      <section className="text-gray-600 body-font ">
        <div className="container px-5 py-20 mx-auto">
          <p className="text-2xl p-3 capitalize">insecticide</p>
          <div className="flex flex-wrap -m-4">
            <div className="lg:w-1/4 md:w-1/2 p-4 w-full ">
              <a className="block relative h-48 rounded overflow-hidden text-center justify-center pl-10">
                <img className="object-cover object-center w-[30%] h-[20vh] block" src={rukkaImg} />
              </a>
              <div className="mt-4">
                <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">Service</h3>
                <div className="flex justify-around">
                  <h2 className="text-gray-900 title-font text-lg font-medium">Rukka</h2>
                  <Link to='/rukka' className="mt-1">
                    Learn more
                  </Link>
                </div>

              </div>
            </div>
            <div className="lg:w-1/4 md:w-1/2 p-4 w-full">
              <a className="block relative h-48 rounded overflow-hidden">
                <img alt="ecommerce"  className="object-cover object-center w-[30%] h-[20vh] block" src={alaskaImg} />
              </a>
              <div className="mt-4">
                <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">Service</h3>
                <div className="flex justify-around">
                  <h2 className="text-gray-900 title-font text-lg font-medium">Alaska</h2>

                  <Link to='/alaska' className="mt-1">
                    Learn more
                  </Link>
                </div>
              </div>
            </div>
            <div className="lg:w-1/4 md:w-1/2 p-4 w-full">
              <a className="block relative h-48 rounded overflow-hidden">
                <img alt="ecommerce" className="object-cover object-center w-[30%] h-[20vh] block" src={alaskaImg} />
              </a>
              <div className="mt-4">
                <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">Service</h3>
                <div className="flex justify-around">

                  <h2 className="text-gray-900 title-font text-lg font-medium">Cyphones</h2>
                  <Link to='/cyphones' className="mt-1">
                    Learn more
                  </Link>
                </div>
              </div>
            </div>
            <div className="lg:w-1/4 md:w-1/2 p-4 w-full">
              <a className="block relative h-48 rounded overflow-hidden">
                <img alt="ecommerce" className="object-cover object-center w-[30%] h-[30vh] block" src={indoxamImg} />
              </a>
              <div className="mt-4">
                <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">service</h3>
                <div className="flex justify-around">

                <h2 className="text-gray-900 title-font text-lg font-medium">Indoxam</h2>
                <Link to='/indoxam' className="mt-1">
                  Learn more
                </Link>
                </div>
              </div>
            </div>
            <div className="flex justify-center text-center  w-full">

              <Link to='/insecticide' className="border border-gray-300 hover:border-green-500 p-3 mt-6">See all products</Link>
            </div>
          </div>
        </div>
      </section>






      <section className="text-gray-600 body-font ">
        <div className="container px-5 py-24 mx-auto">
          <p className="text-2xl p-3 capitalize">fungicide</p>
          <div className="flex flex-wrap -m-4">
            <div className="lg:w-1/4 md:w-1/2 p-4 w-full">
              <a className="block relative h-48 rounded overflow-hidden">
                <img className="object-cover object-center w-full h-full block" src="https://dummyimage.com/420x260" />
              </a>
              <div className="mt-4">
                <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">Generic</h3>
                <div className="flex justify-evenly">

                  <h2 className="text-gray-900 title-font text-lg font-medium">Indo-prime</h2>
                  <Link to='/IndoPrime' className="mt-1">
                    Learn more
                  </Link>
                </div>

              </div>
            </div>

            <div className="lg:w-1/4 md:w-1/2 p-4 w-full">
              <a className="block relative h-48 rounded overflow-hidden">
                <img className="object-cover object-center w-full h-full block" src="https://dummyimage.com/420x260" />
              </a>
              <div className="mt-4">
                <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">Generic</h3>
                <div className="flex justify-evenly">

                  <h2 className="text-gray-900 title-font text-lg font-medium">Tango-plus</h2>
                  <Link to='/tangoPlus' className="mt-1">
                    Learn more
                  </Link>
                </div>

              </div>
            </div>

            <div className="lg:w-1/4 md:w-1/2 p-4 w-full">
              <a className="block relative h-48 rounded overflow-hidden">
                <img className="object-cover object-center w-full h-full block" src="https://dummyimage.com/420x260" />
              </a>
              <div className="mt-4">
                <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">Generic</h3>
                <div className="flex justify-evenly">

                  <h2 className="text-gray-900 title-font text-lg font-medium"> Sulphie</h2>
                  <Link to='/sulphie' className="mt-1">
                    Learn more
                  </Link>
                </div>

              </div>
            </div>


            <div className="lg:w-1/4 md:w-1/2 p-4 w-full">
              <a className="block relative h-48 rounded overflow-hidden">
                <img className="object-cover object-center w-full h-full block" src="https://dummyimage.com/420x260" />
              </a>
              <div className="mt-4">
                <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">Generic</h3>
                <div className="flex justify-evenly">

                  <h2 className="text-gray-900 title-font text-lg font-medium">Valino</h2>
                  <Link to='/valino' className="mt-1">
                    Learn more
                  </Link>
                </div>

              </div>
            </div>











            <div className="flex justify-center text-center  w-full">

              <Link to='/fungicide' className="border border-gray-300 hover:border-green-500 p-3 mt-6">See all products</Link>
            </div>
          </div>
        </div>
      </section>



      <section className="text-gray-600 body-font">
        <div className="container px-5 py-24 mx-auto">
          <p className="text-2xl p-3 capitalize">Herbicide</p>
          <div className="flex flex-wrap -m-4">
            <div className="lg:w-1/4 md:w-1/2 p-4 w-full">
              <a className="block relative h-48 rounded overflow-hidden">
                <img className="object-cover object-center w-full h-full block" src="https://dummyimage.com/420x260" />
              </a>
              <div className="mt-4">
                <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">Service</h3>
                <div className="flex justify-evenly">

                  <h2 className="text-gray-900 title-font text-lg font-medium">Proto-50</h2>
                  <Link to='/proto50' className="mt-1">
                    Learn more
                  </Link>
                </div>

              </div>
            </div>
            <div className="lg:w-1/4 md:w-1/2 p-4 w-full">
              <a className="block relative h-48 rounded overflow-hidden">
                <img className="object-cover object-center w-full h-full block" src="https://dummyimage.com/420x260" />
              </a>
              <div className="mt-4">
                <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">Service</h3>
                <div className="flex justify-evenly">

                  <h2 className="text-gray-900 title-font text-lg font-medium">Emo-10</h2>
                  <Link to='/emo10' className="mt-1">
                    Learn more
                  </Link>
                </div>

              </div>
            </div>

            <div className="lg:w-1/4 md:w-1/2 p-4 w-full">
              <a className="block relative h-48 rounded overflow-hidden">
                <img className="object-cover object-center w-full h-full block" src="https://dummyimage.com/420x260" />
              </a>
              <div className="mt-4">
                <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">Service</h3>
                <div className="flex justify-evenly">

                  <h2 className="text-gray-900 title-font text-lg font-medium">time-up</h2>
                  <Link to='/timeup' className="mt-1">
                    Learn more
                  </Link>
                </div>

              </div>
            </div>

            <div className="lg:w-1/4 md:w-1/2 p-4 w-full">
              <a className="block relative h-48 rounded overflow-hidden">
                <img className="object-cover object-center w-full h-full block" src="https://dummyimage.com/420x260" />
              </a>
              <div className="mt-4">
                <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">Service</h3>
                <div className="flex justify-evenly">

                  <h2 className="text-gray-900 title-font text-lg font-medium">Nirol</h2>
                  <Link to='/nirol' className="mt-1">
                    Learn more
                  </Link>
                </div>

              </div>
            </div>


            <div className="flex justify-center text-center  w-full">

              <Link to='/herbicide' className="border border-gray-300 hover:border-green-500 p-3 mt-6">See all products</Link>
            </div>
          </div>
        </div>
      </section>



    </>
  )
}

export default Agrochemical