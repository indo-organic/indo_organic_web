import '../styles/AboutUs.scss'
// import about_logo from '../assets/slide1.jpg'
const AboutUs = () => {
  return (
    <>
      {/* <div className="about">

        <div className="about_1">
          <img src={about_logo} alt="" />

          <div className="about_title">
            About us
          </div>
        </div>
        <div className="about_2">
          <div className="about_2_title">
            Who we are?
          </div>
          <div className="about_2_content">
            <img src={about_logo} alt="" />
            <div className="about_2_text">

              <p >Indoorganics Pvt Ltd. (IOL) is a leading manufacturer, marketer
                and exporter of agricultural inputs which includes a range of nonorganic pesticides (Agrochemicals) and a mix of organic products
                particularly bio-stimulants, biological solutions, plant nutrients and
                fertilizers. We have been serving the farming community through our
                high-quality Crop Protection & Crop Nutrition products since many
                years. </p>
              <p>IOL in technical association with Indogulf cropsciences PTY. LTD.,
                Australia has been engaged in developing the best quality bio
                stimulants to provide innovative solutions for global agricultural
                needs and to develop alternative products that are safer, more
                effective, less invasive and more economical than conventional crop
                care products.
              </p>
              <p>We are technically advanced organization with a background and
                deep understanding of Green Extraction Technology which is based
                on discovery and design of extraction processes which will reduce
                energy consumption, allows use of alternative solvents and
                renewable natural products like biostimulants and bio-protections &
                fertilizers.</p>
            </div>
          </div>
        </div>
        <div className="about_3">
          <div className="about_3_title">
            our commitments
          </div>

          <div className="about_3_text">
            <p>To deliver quality organic and natural products to support
              sustainability in food production.</p>

            <p>To develop solutions that help preserve the ecosystem.</p>

            <p>Improving the quality of life of the communities we serve.</p>
          </div>


        </div>
        <div className="about_4">
          <div className="philosophy">
            <div className="p_title">
              philosophy
            </div>
            <div className="p_key">
              KEY-A SYMBOL OF OUR PROMISE

            </div>
            <div className="p_text">
              Our mascot is small key which we believe is Key to Success.
              For us Key is nothing but attitude, which is embedded in all
              its positivity among our team members and our way of doing
              business. The attitude to create possibilities of success and
              growth for all associated with our company. This is the Key
              to growth which will be the differentiator.
            </div>
          </div>
          
          <div className="v_m">



            <div className="vision">
              <div className="v_title">
                vision
              </div>
              <div className="v_text">
                Sustainable growth of all who are
                associated with us.
              </div>
            </div>
            <div className="mission">
              <div className="m_title">
                mission
              </div>
              <div className="m_text">
                To be the most respected Organization in
                the industry by creating opportunities
                for growth ethically and professionally
              </div>
            </div>
          </div>


        </div>

      </div> */}
<div class="text-center p-8">
    <h2 class="font-bold text-2xl sm:text-3xl md:text-4xl lg:text-5xl">
        Why to choose US?
    </h2>

    <div class="flex flex-wrap items-center mt-20  text-center">
        <div class="w-full md:w-3/5 lg:w-1/2 px-4">
            <img src="https://picsum.photos/400/240" alt="gem" class="inline-block rounded shadow-lg border border-merino-400"/>
        </div>
        <div class="w-full md:w-2/5 lg:w-1/2 px-4 text-center md:text-left lg:pl-12">
            <h3 class="font-bold mt-8 text-xl md:mt-0 sm:text-2xl">
                Simple integration
            </h3>
            <p class="sm:text-lg mt-6">
                Use the LocaleData gem to download translations directly into your Ruby on Rails
                projects using the provided command line interface. Just create a project and follow
                the step-by-step instructions.
            </p>
        </div>
    </div>

    <div class="flex flex-wrap items-center mt-20  text-center">
        <div class="w-full md:w-3/5 lg:w-1/2 px-4">
            <img src="https://picsum.photos/400/240" alt="project members" class="inline-block rounded shadow-lg border border-merino-400"/>
        </div>
        <div class="w-full md:w-2/5 lg:w-1/2 px-4 md:order-first text-center md:text-left lg:pr-12">
            <h3 class="font-bold mt-8 text-xl md:mt-0 sm:text-2xl">
                Easy collaboration
            </h3>
            <p class="sm:text-lg mt-6">
                All LocaleData projects are private. Each project can have multiple collaborators
                with different roles and access permissions. You determine who can see and edit
                your translations. Just add admins, developers, translators and configure their
                access rights.
            </p>
        </div>
    </div>

    <div class="flex flex-wrap items-center mt-20   text-center">
        <div class="w-full md:w-3/5 lg:w-1/2 px-4">
            <img src="https://picsum.photos/400/240" alt="editor" class="inline-block rounded shadow-lg border border-merino-400"/>
        </div>
        <div class="w-full md:w-2/5 lg:w-1/2 px-4 text-center md:text-left lg:pl-12">
            <h3 class="font-bold mt-8 text-xl md:mt-0 sm:text-2xl">
                No more syntax errors
            </h3>
            <p class="sm:text-lg mt-6">
                LocaleData provides you easy import/export functions for your YAML files.
                Use a simple editor with many predefined languages to manage your locales.
                LocaleData also supports multiple translation types, such as simple text, plural forms,
                numbers, booleans, symbols, arrays, ...
            </p>
        </div>
    </div>

    <div class="flex flex-wrap items-center mt-20  text-center">
        <div class="w-full md:w-3/5 lg:w-1/2 px-4">
            <img src="https://picsum.photos/400/240" alt="bulk editing" class="inline-block rounded shadow-lg border border-merino-400"/>
        </div>
        <div class="w-full md:w-2/5 lg:w-1/2 px-4 md:order-first text-center md:text-left lg:pr-12">
            <h3 class="font-bold mt-8 text-xl md:mt-0 sm:text-2xl">
                Bulk editing
            </h3>
            <p class="sm:text-lg mt-6">
                Do you need to change the path of many translation keys at once? No problem, just
                use the bulk editing feature and enjoy the results.
            </p>
        </div>
    </div>

</div>



    </>
  )
}

export default AboutUs