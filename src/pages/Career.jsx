import '../styles/Career.scss'

import { Link } from 'react-router-dom'



const Career = () => {
  return (
    <>
    
      <div className="relative mx-auto mt-10 w-full">
        <img className="h-64 w-full object-cover rounded-md object-bottom" src="https://www.idhsustainabletrade.com/uploaded/2017/05/impact-agrochemicals-1440x450-c-default.jpg?x16939&x16939" alt="Random image" />
        <div className="absolute inset-0 bg-gray-700 opacity-50 rounded-md"></div>
        <div className="absolute inset-0 flex items-center justify-center">
          <h2 className="text-white text-3xl font-bold">Career </h2>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8 text-center">
        <h1 className="text-3xl font-semibold mb-4">Join Our Team at [Your Company Name]</h1>
        <p className="mb-6">Welcome to the career page of [Your Company Name]! We are excited that you are considering joining our team dedicated to driving innovation in the agrochemical industry. At [Your Company Name], we believe in making a meaningful impact on agriculture, sustainability, and the environment.</p>

        <h2 className="text-xl font-semibold mb-4">Our Mission and Values</h2>
        <p className="mb-6">[Your Company Name] is committed to providing innovative solutions that empower farmers and contribute to global food security. Our values of integrity, collaboration, innovation, and sustainability guide everything we do.</p>

        <h2 className="text-xl font-semibold mb-4">Why Work With Us?</h2>
        <ul className="list-disc list-inside mb-6">
          <li>Innovative Environment: Join a dynamic team that fosters creativity and innovation in solving complex challenges in the agrochemical industry.</li>
          <li>Meaningful Work: Make a difference in global agriculture by contributing to the development of cutting-edge products and technologies that improve crop yields and sustainability.</li>
          <li>Collaborative Culture: Work alongside passionate professionals who are dedicated to collaboration, knowledge sharing, and continuous learning.</li>
          <li>Career Growth: We invest in our employees' professional development and provide opportunities for career advancement and skill enhancement.</li>
          <li>Commitment to Sustainability: Be part of a company that prioritizes sustainability and environmental stewardship in all aspects of our operations.</li>
        </ul>

        <h2 className="text-xl font-semibold mb-4">Available Positions</h2>
        <p className="mb-4">Explore our current job openings below. We are constantly seeking talented individuals to join our team and drive our mission forward.</p>
        <div className="mb-6">
          <h3 className="font-semibold mb-2">[Position Title 1]</h3>
          <p>Location: [Location]</p>
          <p>Description: [Brief description of responsibilities and qualifications]</p>
          <p>Apply Now: [Link to application form or email address]</p>
        </div>
        <div>
          <h3 className="font-semibold mb-2">[Position Title 2]</h3>
          <p>Location: [Location]</p>
          <p>Description: [Brief description of responsibilities and qualifications]</p>
          <p>Apply Now: [Link to application form or email address]</p>
        </div>

        <h2 className="text-xl font-semibold mb-4">How to Apply</h2>
        <p className="mb-6">To apply for a position at [Your Company Name], please submit your resume and cover letter to [Email Address] or fill out our online application form. Our recruitment team will review your application and contact you if your qualifications align with the position requirements.</p>

        <h2 className="text-xl font-semibold mb-4">Frequently Asked Questions (FAQs)</h2>
        <dl className="mb-6">
          <dt className="font-semibold">Q: What benefits do you offer to employees?</dt>
          <dd>We offer competitive salary packages, health insurance, retirement plans, flexible work arrangements, and professional development opportunities.</dd>

          <dt className="font-semibold">Q: What is the interview process like?</dt>
          <dd>Our interview process typically includes an initial screening, followed by interviews with members of the hiring team. Depending on the position, there may also be technical assessments or case studies.</dd>

          <dt className="font-semibold">Q: Do you offer internships or graduate programs?</dt>
          <dd>Yes, we offer internships and graduate programs for students and recent graduates who are passionate about pursuing a career in the agrochemical industry.</dd>
        </dl>

        <h2 className="text-xl font-semibold mb-4">Contact Us</h2>
        <p>If you have any questions or inquiries about career opportunities at [Your Company Name], please don't hesitate to contact our HR team at [Contact Email] or [Contact Phone Number].</p>
      </div>







    </>
  )
}

export default Career


