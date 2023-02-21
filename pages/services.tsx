import React from 'react'
import {HeaderImage} from '../components/HeaderImage'
import {Content} from '../components/Content'

const contentData=[
  {
    heading:'Software Development',
    text:`<p>VTS strives to provide our customers quality application development services and web development services that help them to remain in step with their competitors. We are giving our customers to develop custom software applications and assist them throughout the entire software development Life Cycle, including project management, systems analysis and design,development , implementation, training and application maintenance.</p>
    <p>VTS’s team of software developers constantly study the industry trends and analyse what works best for various verticals. This enables us to provide you with software solutions that are tailored to suit your requirements</p>
    <p>Our strength and capabilities in our experience and knowledge pool. We have supported our customers to execute challenging projects in their field . We work smoothly to earn total trust of our customers through our continuous strive for quality.</p>
    `
  },
  {
    heading:'e-Learning',
    text:`
      <p>Engage your learners with the perfect blend of creative custom learning content, developed with your business objectives in mind. Every business is different; We know that yours is too. We'll work with you to identify the solutions you need and an approach that fits within your budget and time constraints.
      </p><p>Our instructional designers will work with you to develop an e-Learning solution that’s uniquely yours.Custom subject matter and delivery, fully-branded design, personalized, engaging, interactive learning events- created just for you and tailored to the unique needs of your business and your learners.
      </p><p>Whether your project is simple or complex we’ll work with you to realize your vision. Custom e-Learning doesn’t need to be complicatedor expensive. Our process is very streamlined with a quick turnaro und.</p>
      <p>Our project managers, instructional designers, graphic designers, animators and programmers will put in their best to deliver an engaging course. We craft each solution differently to align it to your organizational needs and standards. We adhere to SCORM / AICC compliance to make learning secure while adhering to high standards.</p>
    `
  },
  {
    heading:'Simulation Based Learning',
    text:`
      <p>We take pride in providing with the highest efficiency in Simulation Based Learning development services.</p>
      <p>Advances in technology have made way for online simulations of environments allowing us to perform interactive learning tasks that previously required expensive and elaborate mock-ups of equipment or training devices. The use of virtual environments to train personnel is highly effective and cost efficient. Technology Transfer Services develops several categories of interactive learning to match the needs of the individual to their most effective learning method.</p>
      <p>Simulations put the student in a game-type interactive learning environment that reacts to the tasks performed and selections made. Our simulations can be used for Operations and Maintenance personnel. Simulations provide real-time interaction and require decision making based on the situation presented.</p>
    `
  },
  {
    heading:'Mobile Learning Solutions',
    text:`
      <p>We offer a large range of Mobile Learning (m-learning) solutions where we offer unique design approaches to help the organizations counteract their technology Curve.
      </p><p>Many organizations are adopting mobile devices as their preferred source of information or training delivery especially for employees who are mostly on customer sites or travel extensively. We have successfully implemented mobile learning solutions for both, iOS and Android platforms.</p>
      <p>Our solutions are simple yet cost effective and scalable that can be used by any organization to train their workforce and add performance support.</p>
    `
  },
  {
    heading:'Corporate Training',
    text:`
      <p>We at VTS believe in quality Learning & Skill Development solutions that have a direct & measurable impact on client’s key performance indicators.
      </p><p>We offer a wide range training solutions to BFSI and Corporate sectors. Where training solutions are blend to the requirements of the client specific business needs. We specially design the training solutions and customized to the requirements of the target audience, where it improves and enhance the skills of the trainee.</p><p>When implementing a new product or application, the right training will help deliver immediate value and provide sustainable long-term returns from your investment.</p>
      <p>VTS is committed to providing the skills and knowledge that will enable you to get the most from your performance management and business intelligence applications.We are having experience trainers where they are having good exposure to the various industry verticals.</p>
    `
  },
  {
    heading:'Vocational Training',
    text:`
      <p>Designed to deliver workplace-specific skills and knowledge, vocational education and training covers a wide range of careers and industries, including trade and office work, 2D,3D, retail, hospitality and technology.
      </p><p>BFSI, Logistics and Transportation, Media and Entertainment, IT and ITES. While there are millions of jobs opportunities across these sectors, industry continues to struggle for skilled talent. In order to bridge this talent gap, VTS training system is helping individuals develop the skills they need to secure and maintain rewarding and sustainable employment.</p>
      <p>Our methods of training include theoretical lectures combined with activity oriented projects, skill promotion on line training interactive and participatory method for learning through doing.</p>
      <p>Our Institution has developed enough infrastructure in terms of class rooms, laboratories, equipment and IT infrastructure, efficient & competent trained Faculties will be deployed who have enough practical experience & knowledge in their respective fields.</p>
    `
  }
]
 const Services = () => {
  return (
    <div>
      <HeaderImage imgPath={'services.jpg'} />
      {
      contentData.map((obj,ind)=>{
        return  <Content key={ind} heading={obj.heading} text={obj.text} />
      })
    }
    </div>
  )
}

export default Services
