import React from 'react';
import ServicesCard from './ServicesCard';
import { useQuery } from '@tanstack/react-query';
import useAxiosSecure from '../../../Hooks/useAxiosSecure';
import Loading from '../../../Components/Loading';
import HeadingDesing from '../../../Components/HeadingDesing';

function ServicesContainer() {
  const AxiosSecure = useAxiosSecure();
  const { data: ServicesData, isLoading } = useQuery({
    queryKey: ['top-services'],

    queryFn: async () => {
      const data = await AxiosSecure('/top-services');

      return data?.data;
    },
  });

  if (isLoading) return <Loading></Loading>;

  return (
    <div>
      <HeadingDesing
        text={'Our Services'}
        description={
          ' We have been in the IT industry for the last 5 years. Within this time, Lardix Agency has been transformed from the a "SEO Agency in Bangladesh" to a full scale "Digital Marketing Agency".'
        }
      ></HeadingDesing>
      <div className="max-w-[1440px] mx-auto my-16 px-3">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 ">
          {ServicesData.map((item, index) => {
            return <ServicesCard item={item} key={index}></ServicesCard>;
          })}
        </div>
      </div>
    </div>
  );
}

export default ServicesContainer;
