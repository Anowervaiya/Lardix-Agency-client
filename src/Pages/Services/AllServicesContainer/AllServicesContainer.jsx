import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import useAxiosSecure from '../../../Hooks/useAxiosSecure';
import { useQuery } from '@tanstack/react-query';
import Button from '../../../Components/Button';
import Loading from '../../../Components/Loading';

function AllServicesContainer({ ServiceType }) {

  const ServiceName = useParams();

  const AxiosSecure = useAxiosSecure();
  const { data,isLoading } = useQuery({
    queryKey: ['all-services',ServiceName?.link],
    queryFn: async () => {
      const data = await AxiosSecure(`/all-services?link=${ServiceName?.link}`);
     
      return data?.data;
    }
  })
if(isLoading) return <Loading></Loading>
  return (
    <div>
      <div
        className="hero pt-28 pb-12
     bg-slate-700 text-white max-h-screen "
      >
        <div className="hero-content flex-col lg:flex-row-reverse ">
          <div>
            {' '}
            <img
              src={data?.banner}
              className="w-[300px] lg:w-[500px]  h-[250px] lg:h-[400px] text-end"
            />
          </div>
          <div className=" flex-1 text-center lg:text-start ">
            <h1 className="text-5xl font-bold">{data?.name}</h1>
            <p className="py-6 text-[20px] leading-8">{data?.description}</p>
            <Button text={'How it Works'}></Button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AllServicesContainer;
