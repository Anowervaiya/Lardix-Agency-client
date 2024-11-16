import React from 'react'
import Navbar from '../../../Shared/Navbar/Navbar'
import Banner from '../Banner/Banner'
import ServicesContainer from '../Services/ServicesContainer'
import GrowWithUs from '../GrowWithUs/GrowWithUs';
import WorkProcess from '../WorkProcess/WorkProcess';
import WhyLardix from '../WhyLardix/WhyLardix';
import Statistics from '../Statistics/Statistics';


function HomeContainer() {
  return (
    <div >
      
    
        <Banner></Banner>

      <GrowWithUs></GrowWithUs>
      <ServicesContainer></ServicesContainer>
      <WhyLardix></WhyLardix>
      <WorkProcess></WorkProcess>
      <Statistics></Statistics>
     
    </div>
  );
}

export default HomeContainer