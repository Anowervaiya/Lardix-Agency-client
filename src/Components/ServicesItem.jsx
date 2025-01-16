import React from 'react';
import { Link } from 'react-router-dom';
import useAxiosSecure from '../Hooks/useAxiosSecure';
import { useQuery } from '@tanstack/react-query';
import { TfiLayoutLineSolid } from 'react-icons/tfi';

function ServicesItem({ text, link }) {
  return (
    <Link
      to={`/all-services/${link}`}
      className="text-[17px] font-semibold text-black transition-colors duration-700 transform mx-1.5 sm:mx-6 lg:mx-0"
    >
      <div className="flex items-center gap-2  hover:text-blue-400 hover:translate-x-4 transition-all duration-500">
        {/* Icon is initially hidden */}
       
        {/* Text content */}
        <span>{text}</span>
      </div>
    </Link>
  );
}

export default ServicesItem;
