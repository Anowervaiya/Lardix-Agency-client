import React, { useEffect } from 'react'
import AboutBanner from '../AboutBanner/AboutBanner'
import OurGoal from '../OurGoal/OurGoal'
import FAQ from '../FAQ/FAQ'
import WhyChooseUs from '../WhyChooseUs/WhyChooseUs'
import Statistics from '../../Home/Statistics/Statistics'
import OurTeam from '../OurTeam/OurTeam'
import { Titled } from 'react-titled'

function AboutHome() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className='pt-20'>
     <Titled title={"Best Digital Marketing Agency in Bangladesh"}>
     
      
     </Titled>;
      {/* <AboutBanner></AboutBanner> */}
      <OurTeam></OurTeam>
      <OurGoal></OurGoal>
      <WhyChooseUs></WhyChooseUs>
      <FAQ></FAQ>
      <Statistics></Statistics>
    </div>
  )
}

export default AboutHome