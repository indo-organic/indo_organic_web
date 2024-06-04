
import React from 'react';

const Faqs = () => {
  return (


    <>
      <div className="relative mx-auto  w-full">
          <img className="h-64 w-full object-cover rounded-md object-bottom" src="https://eos.com/wp-content/uploads/2020/12/green-wheat.jpg.webp" alt="Random image" />
          <div className="absolute inset-0 bg-gray-700 opacity-50 rounded-md"></div>
          <div className="absolute inset-0 flex items-center justify-center">
            <h2 className="text-white text-3xl font-bold">Frequently Ask Questions </h2>
          </div>
        </div>

    <div className="max-w-screen-xl mx-auto px-5 bg-white min-h-screen">
      {/* <div className="flex flex-col items-center">
        <h2 className="font-bold text-5xl mt-5 tracking-tight">FAQ</h2>
        <p className="text-neutral-500 text-xl mt-3">Frequently asked questions</p>
      </div> */}
      <div className="grid divide-y divide-neutral-200 max-w-xl  mt-8">
        {faqData.map((faq, index) => (
          <div key={index} className="py-5">
            <details className="group">
              <summary className="flex justify-between items-center font-medium cursor-pointer list-none">
                <span className='text-xl capitalize font-bold'>{faq.question}</span>
                <span className="transition group-open:rotate-180">
                  <svg
                    fill="none"
                    height="24"
                    shapeRendering="geometricPrecision"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="1.5"
                    viewBox="0 0 24 24"
                    width="24"
                  >
                    <path d="M6 9l6 6 6-6"></path>
                  </svg>
                </span>
              </summary>
              <p className="text-neutral-600 mt-3 group-open:animate-fadeIn text-xl">
                {faq.answer}
              </p>
            </details>
          </div>
        ))}
      </div>
    </div>
    </>
  );
};

const faqData = [
  {
    question: 'what is Agrochemical?',
    answer: 'Agrochemicals are substances used in agriculture to manage or enhance the growth of crops, control pests, and improve soil fertility. They include a wide range of products such as fertilizers, pesticides, herbicides, fungicides, and insecticides. Agrochemicals play a significant role in modern agriculture by helping farmers increase crop yields, protect plants from diseases and pests, and improve overall farm productivity. However, their use can also raise environmental and health concerns if not properly managed.'
  },
  {
    question: 'what is Biostimulants?',
    answer: 'Biostimulants are substances or microorganisms applied to plants, seeds, or the soil to enhance plant growth, development, and stress tolerance. Unlike fertilizers, which provide essential nutrients directly to plants, biostimulants work by promoting natural processes within the plant, such as nutrient uptake, root development, and stress response mechanisms.'
  },
  {
    question: 'what is Insecticide?',
    answer: 'An insecticide is a type of pesticide specifically formulated to kill or control insects. These chemicals are used in agriculture, public health, and residential settings to manage insect pests that damage crops, spread diseases, or pose a nuisance to humans and animals. Insecticides work through various mechanisms, including disrupting the nervous system of insects, interfering with their growth and development, or affecting their ability to reproduce. They come in different forms, such as sprays, dusts, baits, granules, or systemic treatments applied to seeds or soil.'
  },
  {
    question: 'What is Fungicide?',
    answer: 'A fungicide is a type of pesticide designed to control, prevent, or eradicate fungal diseases in plants. Fungal diseases can cause significant damage to crops, ornamental plants, and trees, leading to yield losses, reduced quality, and even plant death.Fungicides work by inhibiting the growth and reproduction of fungal pathogens or by disrupting key metabolic processes essential for their survival. They come in various forms, including sprays, dusts, liquids, and systemic treatments applied to seeds, soil, or plant foliage.'
 
  },
  {
    question: 'What is Herbicide?',
    answer: ' A herbicide is a type of pesticide specifically formulated to control, suppress, or eliminate unwanted vegetation, commonly referred to as weeds. These chemicals are used in agriculture, forestry, landscaping, and other settings to manage vegetation that competes with crops, disrupts ecosystems, or poses safety hazards. Herbicides work through various mechanisms to interfere with the growth, development, or metabolic processes of plants. They can be selective, targeting specific types of plants while leaving desired crops or vegetation unharmed, or non-selective, affecting a broad range of plant species.'
 
  },
 
  
  
];

export default Faqs;
