import React, { useEffect, useState } from 'react';
import ServicesCard from './ServicesCard';
import {  useQuery } from '@tanstack/react-query';
import useAxiosSecure from '../../../Hooks/useAxiosSecure';
import Loading from '../../../Components/Loading';
import HeadingDesing from '../../../Components/HeadingDesing';

function ServicesContainer() {
  const [service,setService]= useState([])
  // const AxiosSecure = useAxiosSecure();
  // const { data, isLoading } = useQuery({
  //   queryKey: ['top-services'],

  //   queryFn: async () => {
  //     const data = await AxiosSecure('/top-services');

  //     return data?.data;
  //   },
  //   staleTime: 0,
  //   refetchOnWindowFocus: true,
  // });
  useEffect(() => {
    fetch('/data.json')
      .then(res => res.json())
      .then(data => {
        setService(data);
      })
      .catch(error => {
        console.error('Error:', error);
      });
},[]) // It's good to add error handling

  if (!service) return '  ';

  return (
    <div>
      <div className="mt-6 lg:mt-0 mb-12">
        <div className=" ">
          <h1 className="text-xl text-blue-700 text-center font-semibold ml-4 mb-2">
            Service
          </h1>
        </div>
        <div className=" ">
          <h1 className="text-4xl text-center font-bold ml-4">
            Our{' '}
            <span className="font-bold bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 bg-clip-text text-transparent">
              {' '}
              Services
            </span>
          </h1>
        </div>
        <div className="lg:w-3/4 mx-auto">
          <h1 className=" ml-6 mt-4 text-[#52525c]  text-center">
            We have been in the Digital industry for the last 5 years. Within
            this time, Lardix Agency has been transformed from the a "Best
            Digital Agency in the world".
          </h1>
        </div>
      </div>

      <div className="max-w-[1440px] mx-auto my-16 px-3">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 ">
          {service?.map((item, index) => (
            <ServicesCard item={item} key={index}></ServicesCard>
          ))}
        </div>
      </div>
    </div>
  );
}

export default ServicesContainer;
