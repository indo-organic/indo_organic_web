import '../styles/faq.scss'
import React, { useState } from 'react';
const Faqs = () => {
  const [answersVisibility, setAnswersVisibility] = useState(Array(4).fill(false));
  const toggleAnswer = (index) => {
    const updatedVisibility = [...answersVisibility];
    updatedVisibility[index] = !updatedVisibility[index];
    setAnswersVisibility(updatedVisibility);
  };
  return (
    <>
    

        <section className="py-10 bg-gray-50 sm:py-16 lg:py-24">
          <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
            <div className="max-w-2xl mx-auto text-center">
              <h2 className="text-3xl font-bold leading-tight text-black sm:text-4xl lg:text-5xl">
                Frequently asked questions
              </h2>
            </div>
            <div className="max-w-3xl mx-auto mt-8 space-y-4 md:mt-16">
              {[1, 2, 3, 4].map((index) => (
                <div
                  key={index}
                  className="transition-all duration-200 bg-white border border-gray-200 shadow-lg cursor-pointer hover:bg-gray-50"
                >
                  <button
                    type="button"
                    onClick={() => toggleAnswer(index - 1)}
                    className="flex items-center justify-between w-full px-4 py-5 sm:p-6"
                  >
                    <span className="flex text-lg font-semibold text-black">
                      {`How can I get started?`}
                    </span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      className={`w-6 h-6 text-gray-400 transform ${answersVisibility[index - 1] ? '' : 'rotate-180'}`}
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                    </svg>
                  </button>
                  <div
                    style={{ display: answersVisibility[index - 1] ? 'block' : 'none' }}
                    className="px-4 pb-5 sm:px-6 sm:pb-6"
                  >
                    <p>
                      {`Getting started is easy! Sign up for an account, and you'll have access to our platform's features. No credit card required for the initial signup.`}
                    </p>
                  </div>
                </div>
              ))}
            </div>
            <p className="text-center text-gray-600 text-base mt-9">
              Still have questions?{' '}
              <span className="cursor-pointer font-medium text-tertiary transition-all duration-200 hover:text-tertiary focus:text-tertiary hover:underline">
                Contact our support
              </span>
            </p>
          </div>
        </section>
      


    </>
  )
}

export default Faqs