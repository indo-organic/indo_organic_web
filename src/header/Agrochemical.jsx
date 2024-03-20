import { Link } from "react-router-dom"


const Agrochemical = () => {
  return (
    <>
      <div className="agrochemical text-3xl text-center mt-8 uppercase ">
        agrochemical
      </div>
      <section class="text-gray-600 body-font">
        <div class="container px-5 py-24 mx-auto">
          <p className="text-2xl p-3 capitalize">insecticide</p>
          <div class="flex flex-wrap -m-4">
            <div class="lg:w-1/4 md:w-1/2 p-4 w-full">
              <a class="block relative h-48 rounded overflow-hidden">
                <img class="object-cover object-center w-full h-full block" src="https://dummyimage.com/420x260" />
              </a>
              <div class="mt-4">
                <h3 class="text-gray-500 text-xs tracking-widest title-font mb-1">Service</h3>
                <div className="flex justify-evenly">

                  <h2 class="text-gray-900 title-font text-lg font-medium">Rukka</h2>
                  <Link to='/rukka' class="mt-1">
                    Learn more
                  </Link>
                </div>

              </div>
            </div>
            <div class="lg:w-1/4 md:w-1/2 p-4 w-full">
              <a class="block relative h-48 rounded overflow-hidden">
                <img alt="ecommerce" class="object-cover object-center w-full h-full block" src="https://dummyimage.com/421x261" />
              </a>
              <div class="mt-4">
                <h3 class="text-gray-500 text-xs tracking-widest title-font mb-1">Service</h3>
                <div className="flex justify-around">
                  <h2 class="text-gray-900 title-font text-lg font-medium">Alaska</h2>

                  <Link to='/alaska' class="mt-1">
                    Learn more
                  </Link>
                </div>
              </div>
            </div>
            <div class="lg:w-1/4 md:w-1/2 p-4 w-full">
              <a class="block relative h-48 rounded overflow-hidden">
                <img alt="ecommerce" class="object-cover object-center w-full h-full block" src="https://dummyimage.com/422x262" />
              </a>
              <div class="mt-4">
                <h3 class="text-gray-500 text-xs tracking-widest title-font mb-1">Service</h3>
                <h2 class="text-gray-900 title-font text-lg font-medium">Cyphones</h2>
                <Link to='/cyphones' class="mt-1">
                  Learn more
                </Link>
              </div>
            </div>
            <div class="lg:w-1/4 md:w-1/2 p-4 w-full">
              <a class="block relative h-48 rounded overflow-hidden">
                <img alt="ecommerce" class="object-cover object-center w-full h-full block" src="https://dummyimage.com/423x263" />
              </a>
              <div class="mt-4">
                <h3 class="text-gray-500 text-xs tracking-widest title-font mb-1">service</h3>
                <h2 class="text-gray-900 title-font text-lg font-medium">Indoxam</h2>
                <Link to='/indoxam' class="mt-1">
                  Learn more
                </Link>
              </div>
            </div>
            <div className="flex justify-center text-center  w-full">

              <Link to='/insecticide' className="mt-4 p-3  text-decoration-none text-black text-3xl border-2 ">See all products</Link>
            </div>
          </div>
        </div>
      </section>


      <section class="text-gray-600 body-font">
        <div class="container px-5 py-24 mx-auto">
          <p className="text-2xl p-3 capitalize">insecticide</p>
          <div class="flex flex-wrap -m-4">
            <div class="lg:w-1/4 md:w-1/2 p-4 w-full">
              <a class="block relative h-48 rounded overflow-hidden">
                <img class="object-cover object-center w-full h-full block" src="https://dummyimage.com/420x260" />
              </a>
              <div class="mt-4">
                <h3 class="text-gray-500 text-xs tracking-widest title-font mb-1">Service</h3>
                <div className="flex justify-evenly">

                  <h2 class="text-gray-900 title-font text-lg font-medium">Rukka</h2>
                  <Link to='/rukka' class="mt-1">
                    Learn more
                  </Link>
                </div>

              </div>
            </div>
            <div class="lg:w-1/4 md:w-1/2 p-4 w-full">
              <a class="block relative h-48 rounded overflow-hidden">
                <img alt="ecommerce" class="object-cover object-center w-full h-full block" src="https://dummyimage.com/421x261" />
              </a>
              <div class="mt-4">
                <h3 class="text-gray-500 text-xs tracking-widest title-font mb-1">Service</h3>
                <div className="flex justify-around">
                  <h2 class="text-gray-900 title-font text-lg font-medium">Alaska</h2>

                  <Link to='/alaska' class="mt-1">
                    Learn more
                  </Link>
                </div>
              </div>
            </div>
            <div class="lg:w-1/4 md:w-1/2 p-4 w-full">
              <a class="block relative h-48 rounded overflow-hidden">
                <img alt="ecommerce" class="object-cover object-center w-full h-full block" src="https://dummyimage.com/422x262" />
              </a>
              <div class="mt-4">
                <h3 class="text-gray-500 text-xs tracking-widest title-font mb-1">Service</h3>
                <h2 class="text-gray-900 title-font text-lg font-medium">Cyphones</h2>
                <Link to='/cyphones' class="mt-1">
                  Learn more
                </Link>
              </div>
            </div>
            <div class="lg:w-1/4 md:w-1/2 p-4 w-full">
              <a class="block relative h-48 rounded overflow-hidden">
                <img alt="ecommerce" class="object-cover object-center w-full h-full block" src="https://dummyimage.com/423x263" />
              </a>
              <div class="mt-4">
                <h3 class="text-gray-500 text-xs tracking-widest title-font mb-1">service</h3>
                <h2 class="text-gray-900 title-font text-lg font-medium">Indoxam</h2>
                <Link to='/indoxam' class="mt-1">
                  Learn more
                </Link>
              </div>
            </div>
            <div className="flex justify-center text-center  w-full">

              <Link to='/insecticide' className="mt-4 p-3  text-decoration-none text-black text-3xl border-2 ">See all products</Link>
            </div>
          </div>
        </div>
      </section>

      <section class="text-gray-600 body-font">
        <div class="container px-5 py-24 mx-auto">
          <p className="text-2xl p-3 capitalize">fungicide</p>
          <div class="flex flex-wrap -m-4">
            <div class="lg:w-1/4 md:w-1/2 p-4 w-full">
              <a class="block relative h-48 rounded overflow-hidden">
                <img class="object-cover object-center w-full h-full block" src="https://dummyimage.com/420x260" />
              </a>
              <div class="mt-4">
                <h3 class="text-gray-500 text-xs tracking-widest title-font mb-1">Service</h3>
                <div className="flex justify-evenly">

                  <h2 class="text-gray-900 title-font text-lg font-medium">Rukka</h2>
                  <Link to='/rukka' class="mt-1">
                    Learn more
                  </Link>
                </div>

              </div>
            </div>
            <div class="lg:w-1/4 md:w-1/2 p-4 w-full">
              <a class="block relative h-48 rounded overflow-hidden">
                <img alt="ecommerce" class="object-cover object-center w-full h-full block" src="https://dummyimage.com/421x261" />
              </a>
              <div class="mt-4">
                <h3 class="text-gray-500 text-xs tracking-widest title-font mb-1">Service</h3>
                <div className="flex justify-around">
                  <h2 class="text-gray-900 title-font text-lg font-medium">Alaska</h2>

                  <Link to='/alaska' class="mt-1">
                    Learn more
                  </Link>
                </div>
              </div>
            </div>
            <div class="lg:w-1/4 md:w-1/2 p-4 w-full">
              <a class="block relative h-48 rounded overflow-hidden">
                <img alt="ecommerce" class="object-cover object-center w-full h-full block" src="https://dummyimage.com/422x262" />
              </a>
              <div class="mt-4">
                <h3 class="text-gray-500 text-xs tracking-widest title-font mb-1">Service</h3>
                <h2 class="text-gray-900 title-font text-lg font-medium">Cyphones</h2>
                <Link to='/cyphones' class="mt-1">
                  Learn more
                </Link>
              </div>
            </div>
            <div class="lg:w-1/4 md:w-1/2 p-4 w-full">
              <a class="block relative h-48 rounded overflow-hidden">
                <img alt="ecommerce" class="object-cover object-center w-full h-full block" src="https://dummyimage.com/423x263" />
              </a>
              <div class="mt-4">
                <h3 class="text-gray-500 text-xs tracking-widest title-font mb-1">service</h3>
                <h2 class="text-gray-900 title-font text-lg font-medium">Indoxam</h2>
                <Link to='/indoxam' class="mt-1">
                  Learn more
                </Link>
              </div>
            </div>
            <div className="flex justify-center text-center  w-full">

              <Link to='/insecticide' className="mt-4 p-3  text-decoration-none text-black text-3xl border-2 ">See all products</Link>
            </div>
          </div>
        </div>
      </section>


    </>
  )
}

export default Agrochemical