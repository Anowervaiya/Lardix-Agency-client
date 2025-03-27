import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import useAxiosSecure from '../../../Hooks/useAxiosSecure';
import { useQuery } from '@tanstack/react-query';
import Button from '../../../Components/Button';
import Loading from '../../../Components/Loading';
import SecondBanner from './SecondBanner';
import HeadingDesing from '../../../Components/HeadingDesing';
import KeySurvicesCard from './KeySurvicesCard';
import WhatMakesUsDifference from './WhatMakesUsDifference';

function AllServicesContainer({ ServiceType }) {
  
    const [service,setService]= useState([])
  const ServiceName = useParams();
  useEffect(() => {
    fetch('/data.json')
      .then(res => res.json())
      .then(data => {
        setService(data);
      })
      .catch(error => {
        console.error('Error:', error);
      });
  }, [])


  const finalService = service.filter(item => item?.link == ServiceName?.link);


  // const AxiosSecure = useAxiosSecure();
  // const { data, isLoading } = useQuery({
  //   queryKey: ['all-services', ServiceName?.link],
  //   queryFn: async () => {
  //     const data = await AxiosSecure(`/all-services?link=${ServiceName?.link}`);

  //     return data?.data;
  //   },
  // });
  // if (isLoading) return <Loading></Loading>;
    if (!finalService) return '  ';
  return (
    <>
      {finalService?.map((item, idx) => {
        return (
          <div key={idx}>
            {/* first banner  */}
            <div
              className=" px-6  pt-28 pb-12
      text-black max-h-screen "
            >
              <div className=" max-w-[1440px] mx-auto flex justify-between items-center flex-col lg:flex-row-reverse ">
                <div>
                  {' '}
                  <img
                    src={item?.banner}
                    className="w-[300px] lg:w-[500px]  h-[250px] lg:h-[400px] text-end"
                  />
                </div>
                <div className=" flex-1 text-center lg:text-start ">
                  <h1 className="text-5xl font-bold">{item?.name}</h1>
                  <p className="py-6 text-[20px] max-w-[700px] leading-8">
                    {item?.description}
                  </p>
                  <div>
                    <Button text={'Explore More'}></Button>
                  </div>
                </div>
              </div>
            </div>
            <SecondBanner data={item}></SecondBanner>
            {/* heading design  */}
            <div className="mt-16 ">
              <HeadingDesing
                text1={`${item?.name} key services`}
                description={`${item?.description}`}
              ></HeadingDesing>
            </div>{' '}
            {/* key services  */}
            <div className="max-w-[1440px] mx-auto my-16 px-3">
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 ">
                {item?.['sub-services']?.map((item, idx) => (
                  <KeySurvicesCard key={idx} item={item}></KeySurvicesCard>
                ))}
              </div>
            </div>
            <WhatMakesUsDifference></WhatMakesUsDifference>
          </div>
        );
      })}
    </>
  );
}

export default AllServicesContainer;
