import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import useAxiosSecure from '../../../Hooks/useAxiosSecure';
import { useQuery } from '@tanstack/react-query';
import Button from '../../../Components/Button';

function AllServicesContainer({ ServiceType }) {

  const ServiceName = useParams();

  const AxiosSecure = useAxiosSecure();
  const { data } = useQuery({
    queryKey: ['all-services',ServiceName?.link],
    queryFn: async () => {
      const data = await AxiosSecure(`/all-services?link=${ServiceName?.link}`);
     
      return data?.data;
    }
  })
  console.log(data);
  // Data peye geci re 
  return (
    <div className="pt-32 bg-slate-700 text-white">
      <div>
        <div className="hero mt-16  ">
          <div className="hero-content flex-col lg:flex-row-reverse">
            <div className="">
              {' '}
              <img
                src={data?.banner}
                className="w-[300px] lg:w-[500px]  h-[250px] lg:h-[400px] text-end"
              />
            </div>
            <div className=" flex-1 text-center lg:text-start ">
              <h1 className="text-5xl font-bold">
                {data?.name}
              </h1>
              <p className="py-6 text-[20px] leading-8">
                {data?.description}
              </p>
              <Button text={'How it Works'}></Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AllServicesContainer;
