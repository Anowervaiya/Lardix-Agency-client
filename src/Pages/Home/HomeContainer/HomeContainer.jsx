import React from 'react'
import Navbar from '../../../Shared/Navbar/Navbar'
import Banner from '../Banner/Banner'
import ServicesContainer from '../Services/ServicesContainer'
import GrowWithUs from '../GrowWithUs/GrowWithUs';
import WorkProcess from '../WorkProcess/WorkProcess';


function HomeContainer() {
  return (
    <div>
      <Navbar></Navbar>
    
        <Banner></Banner>

      <ServicesContainer></ServicesContainer>
      <GrowWithUs></GrowWithUs>
      <WorkProcess></WorkProcess>
     
    </div>
  );
}

export default HomeContainer