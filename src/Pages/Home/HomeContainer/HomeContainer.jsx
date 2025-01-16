import React from 'react'
import Navbar from '../../../Shared/Navbar/Navbar'
import Banner from '../Banner/Banner'
import ServicesContainer from '../Services/ServicesContainer'
import GrowWithUs from '../GrowWithUs/GrowWithUs';
import WorkProcess from '../WorkProcess/WorkProcess';
import WhyLardix from '../WhyLardix/WhyLardix';
import Statistics from '../Statistics/Statistics';
import Testimonials from '../Testimonials/Testimonials';
import HowLardixCreateBusinessGrowth from '../HowLardixCreateBusinessGrowth/HowLardixCreateBusinessGrowth';
import ExpertiseAreas from '../ExpertiseAreas/ExpertiseAreas';
import OurGoal from '../../AboutUs/OurGoal/OurGoal';
import WhyChooseUs from '../../AboutUs/WhyChooseUs/WhyChooseUs';
import OurTeam from '../../AboutUs/OurTeam/OurTeam';
import FAQ from '../../AboutUs/FAQ/FAQ';
import WhatMakesUsDifference from '../../Services/AllServicesContainer/WhatMakesUsDifference';

function HomeContainer() {
  return (
    <div >
      
    
        <Banner></Banner>
      <GrowWithUs></GrowWithUs>
      <ServicesContainer></ServicesContainer>
      <WhyLardix></WhyLardix>
      <WorkProcess></WorkProcess>
      <WhyChooseUs></WhyChooseUs>
<HowLardixCreateBusinessGrowth></HowLardixCreateBusinessGrowth>
      <OurGoal></OurGoal>
      {/* <ExpertiseAreas></ExpertiseAreas> */}
      <OurTeam></OurTeam>
      <WhatMakesUsDifference></WhatMakesUsDifference>
      <Statistics></Statistics>

      <Testimonials></Testimonials>
      <FAQ></FAQ>
     
    </div>
  );
}

export default HomeContainer