import React from 'react'
import Team from './Team/Team'
// import { Pricing } from "./Pricing/Pricing"
import { Pricedn } from './pricing/Pricedn'
import  Faqs  from "./FAQs/Faqs"

const About = () => {
  return (
    <div className='about'>
      <Team />
      <Pricedn />
      {/* <Pricing /> */}
      <Faqs />
    </div>
  )
}

export default About