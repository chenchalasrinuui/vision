import React from 'react'
import { List } from '../components/List'
import {HeaderImage} from '../components/HeaderImage'

const data=[
"Mudra Agriculture & Skill Development Multi State Co-op. Society Ltd. Hyderabad.",
"Sir C.V. Raman Institute Of Technology & Science, Ananthapur.",
"Heaven Home Society, Hyderabad.",
"GEO Environmental Analytical Laboratory, Hyderabad.",
"MBA Industries, Hyderabad.",
"Fleximax software Private Limited, Hyderabad.",
"Softech Computers, Vishakapatnam.",
"Learning Tree, Vishakapatnam.",
"Sri. Rajarajeswari Educational Society, Jagityal , Telangana.",
"Vijayasri Ads (Print & Electronic Media), Hyderabad.",
"Sri Giri Foundation, Vishakapatnam.",
"Janapriya Township Welfare Organization, Hyderabad.",
]
const clients = () => {
  return (
    <div>

          <HeaderImage imgPath={'clients.jpg'} />

          <List 
            heading="Our Clients"
            data={data}
          />
    </div>
  )
}

export default clients
