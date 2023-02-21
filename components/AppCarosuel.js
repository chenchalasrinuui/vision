import React from 'react'
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';

export const AppCarosuel = () => {
  return (
    <Carousel dynamicHeight={true} height="300px" autoFocus={true} showThumbs={false} autoPlay={true}  infiniteLoop={true} interval={5000 }>
                <div>
                    <img src="s1.jpg" />
                    <div className="legend">
                     <h2>PROFESSIONAL, TECHNICAL SERVICES</h2>
                     <h3>quality in everything we do</h3>
                    </div>
                </div>
                <div>
                    <img src="s2.jpg" />
                    <div className="legend">
                     <h2>YOU ARE IN GOOD HANDS WITH VISION</h2>
                     <h3>reach out the best with our source of technology</h3>
                    </div>
                </div>
                <div>
                    <img src="s3.jpg" />
                    <div className="legend">
                     <h2>QUALITY, FLEXIBILITY, CUSTOMIZABILITY</h2>
                     <h3>great solution for your business with the help of tons of features</h3>
                    </div>
                </div>
            </Carousel>
  )
}
