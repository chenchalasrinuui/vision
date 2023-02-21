import React from 'react'
import {HeaderImage} from '../components/HeaderImage'
import {Content} from '../components/Content'
import {List} from '../components/List'

const contentData=[
  {
    heading:'Company Overview',
    text:`<p>Vision Techno Services (P). Ltd. is an fast growing Software Development and eLearning Training solutions Company with young innovative minds.Our services includes Software Development, eLearning Solutions, Content Development and Training Solutions to individuals and corporates, which are customised to the various needs of projects across diverse backgrounds of eLearning and training solutions and also to enable sustainable transformation through learning and skills development.</p>
    <p>Our cost effective solutions with high quality and creativity can help businesses meet their specific business needs. Our team includes skilled professionals consisting of Software Engineers, Instructional designers, Content Writers, Graphic Designers, 2D artists, BFA specialist and 3D developers.Our services are aimed at bringing the best practices in eLeanring solutions together with the latest technology to engage learners and improve learning outcomes.</p>`
  },
  {
    heading:'VISION TECHNO SERVICES TEAM',
    'text':`<p>Vision Techno Services is on a constant quest for excellence. We believe that our team is our biggest strength. Our incredible skilled team and experienced workforce contributed and facilitated ideas into reality.We at VTS believe that creating the right atmosphere and offering the best growth opportunities help create happy employees who can give their best. Our constant effort to contribute to employee satisfaction has led to increase productivity, improved morale and overall, made our organization more effective and competitive.</p>`
  }
]

const listData=[
  {
    heading:'OUR KEYS AREAS',
    data:[
      "Software Development",
      "Custom e-Learning Content Development",
      "Simulation Training Solutions",
      "Insurance/Corporate Training",
      "Vocational Education and Skill Training",
      "product Development",
      "Consultancy Services"
    ]
  }
]
 const about = () => {
  return (
    <div>
      <HeaderImage imgPath={'about.jpg'} />
      {
      contentData.map((obj,ind)=>{
        return  <Content key={ind} heading={obj.heading} text={obj.text} />
      })
    }
    {
      listData.map((obj,ind)=>{
        return  <List key={ind} heading={obj.heading} data={obj.data} />
      })
    }
    </div>
  )
}

export default about;
