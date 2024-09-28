import React from 'react'
import Navbar from '../../../Shared/Navbar/Navbar'
import Banner from '../Banner/Banner'
import ServicesContainer from '../Services/ServicesContainer'


function HomeContainer() {
  return (
    <div>
      <Navbar></Navbar>
    
        <Banner></Banner>

        <ServicesContainer></ServicesContainer>
     
    </div>
  );
}

export default HomeContainer