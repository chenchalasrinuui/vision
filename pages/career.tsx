import React from 'react'
import { List } from '../components/List'
import {HeaderImage} from '../components/HeaderImage'

const data=[
    "Software Developers. (PHP, Spring Boot, React.js, Angular ).",
    "Instructional Designers.",
    "Graphic Designing Trainers.",
    "2D and 3D Animators.",
    "Marketing Executives."
]
const career = () => {
  return (
    <div>
          <HeaderImage imgPath={'career.jpg'} />

          <List 
            heading="Requirement: Fulltime/Part time"
            data={data}
          />
    </div>
  )
}

export default career
