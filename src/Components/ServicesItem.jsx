import React from 'react'
import {Link} from 'react-router-dom'
import useAxiosSecure from '../Hooks/useAxiosSecure';
import { useQuery } from '@tanstack/react-query';
function ServicesItem({text, link }) {

  return (
    <>
      <Link
        to={`/all-services/${link}`}
        className="hover:text-blue-400  text-white   transition-colors duration-300 transform    mx-1.5 sm:mx-6 lg:mx-0"
      >
        {text}
      </Link>
    </>
  );
}

export default ServicesItem