import React from 'react'
import { Link } from "react-router-dom"
const Adjuvants = () => {
  return (
    <>
    
    
    <div className="flex flex-wrap my-12">
            <div className="lg:w-1/4 md:w-1/2 p-4 w-full ">
              <a className="block relative h-48 rounded overflow-hidden text-center justify-center pl-10">
                {/* <img className="object-cover object-center w-[30%] h-[20vh] block" src={rukkaImg} /> */}
              </a>
              <div className="mt-4">
                <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">General</h3>
                <div className="flex justify-around">
                  <h2 className="text-gray-900 title-font text-lg font-medium">Combo-B</h2>
                  <Link to='/comboB' className="mt-1">
                    Learn more
                  </Link>
                </div>

              </div>
            </div>
            
        
           
          </div>
    </>
  )
}

export default Adjuvants