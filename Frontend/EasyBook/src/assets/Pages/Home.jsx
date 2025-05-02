import React from 'react'
import Hero from '../Component/Hero'
import Features from '../Component/Features'
import HowItWorks from '../Component/HowItWorks'
import FAQ from '../Component/Faq'
import PartnerTestimonial from '../Component/PartnerTestimonial'

const Home = () => {
  return (
    <div>
      <Hero></Hero>
      <Features></Features>
      <HowItWorks></HowItWorks>
      <PartnerTestimonial></PartnerTestimonial>
      <FAQ></FAQ>
    </div>
  )
}

export default Home
