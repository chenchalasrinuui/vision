import React from 'react'
import {Carousel} from '../components/Carousel'
import Grid from '@mui/material/Grid';
import {MyCard} from '../components/MyCard'
import {Content} from '../components/Content'
const data=[
  {
    path:'s1.jpg',
    header1:'PROFESSIONAL, TECHNICAL SERVICES',
    header2:'Quality in everything we do'
  },
  {
    path:'s2.jpg',
    header1:'YOU ARE IN GOOD HANDS WITH VISION',
    header2:'Reach out the best with our source of technology'
  },
  {
    path:'s3.jpg',
    header1:'QUALITY, FLEXIBILITY, CUSTOMIZABILITY',
    header2:'Great solution for your business with the help of tons of features'
  }
]

const cardData=[
  {
    heading:'Software Development',
    imgPath:'softwaredev.png',
    content:'VTS strives to provide our customers quality application development services and web development.'
  },
  {
    heading:'e-learning',
    imgPath:'elearning.png',
    content:'Engage your learners with the perfect blend of creative custom learning content,developed with your business objectives in mind.'
  },
  {
    heading:'Simulation Based learning',
    imgPath:'simulation.png',
    content:'We take pride in providing with the highest efficiency in Simulation Based Learning .'
  },
  {
    heading:'Mobile learning',
    imgPath:'mobilelearning.png',
    content:'We offer a large range of Mobile Learning (m-learning) solutions where we offer unique design approaches to help the organizations counteract their technology Curve.'
  },
  {
    heading:'Corporate Training',
    imgPath:'corporateimage.png',
    content:'We at VTS believe in quality Learning & Skill Development solutions that have a direct & measurable impact on client’s key performance indicators.'
  },
  {
    heading:'Vocational Training',
    imgPath:'vocational.png',
    content:'Designed to deliver workplace-specific skills and knowledge, vocational education and training covers a wide range of careers and industries, including trade and office work, 2D,3D, retail, hospitality and technology.'
  }
]

const contentData=[{
  heading:'About the Company',
  text:`
  <p>VTS is an fast growing Software Development and eLearning Training solutions Company with young innovative minds.</p>
  <p>Our services includes Software Development, eLearning Solutions, Content Development and Training Solutions to individuals and corporates, which are customised to the various needs of projects across diverse backgrounds of eLearning and training solutions and also to enable sustainable transformation through learning and skills development.</p>
  `
},
{
  heading:'Strategy and Implementation Summary',
  text:`<p>Our marketing strategy emphasizes focus. This will be the key. We hence must focus on certain kinds of services with certain kinds of users. Initially Palms and Bonds will focus on the Indian market and in the market research and training fields. The target customers will include key decision-makers in the large, medium and small-sized organizations in a start-up and growth periods.</p>
  <p>VTS are currently building image and awareness through consistency and distinctiveness in our service provision. We intend to focus on delivering quality service and end product that in turn produces good referrals, which can then generate revenue. and always have a relatively heavy personal selling component to our marketing. Hence we intend to always be active in personal relationships with clients and strategic allies keeping abreast of their needs and wants.</p>`
}
]
  

const home = () => {
  return (
    <div>
      <Carousel data={data} />
      <h1 className='text-center my-4'>Hello! WELCOME TO VTS</h1>
      <Grid container spacing={2}>
        {
          cardData.map((obj,ind)=>{
            return <Grid key={ind} item xs={12} md={4}>
            <MyCard heading={obj.heading} content={obj.content} imgPath={obj.imgPath} />
          </Grid>
          })
        }
    </Grid>
    {
      contentData.map((obj,ind)=>{
        return  <Content key={ind} heading={obj.heading} text={obj.text} />
      })
    }
   
    </div>
  )
}

export default home
