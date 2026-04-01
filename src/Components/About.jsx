import React from 'react'
import Team from './team/Team'
// import { Pricing } from "./Pricing/Pricing"
import { Pricedn } from './Pricing/Pricedn'
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