import React from 'react'
import AboutBanner from '../AboutBanner/AboutBanner'
import OurGoal from '../OurGoal/OurGoal'
import FAQ from '../FAQ/FAQ'
import WhyChooseUs from '../WhyChooseUs/WhyChooseUs'
import Statistics from '../../Home/Statistics/Statistics'
import OurTeam from '../OurTeam/OurTeam'

function AboutHome() {
  return (
    <div className='pt-20'>
     
      <AboutBanner></AboutBanner>
      <OurTeam></OurTeam>
      <OurGoal></OurGoal>
      <WhyChooseUs></WhyChooseUs>
      <FAQ></FAQ>
      <Statistics></Statistics>
    </div>
  )
}

export default AboutHome