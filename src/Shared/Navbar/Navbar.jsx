import React, { useState } from 'react';
import ServicesItem from '../../Components/ServicesItem';
import useAxiosSecure from '../../Hooks/useAxiosSecure';
import { useQuery } from '@tanstack/react-query';
import Loading from '../../Components/Loading';
import { Link } from 'react-router-dom';
import './navbar.css'
import { TfiLayoutLineSolid } from 'react-icons/tfi';
import { HiOutlineBars3 } from 'react-icons/hi2';

import { MdKeyboardArrowDown } from 'react-icons/md';

function Navbar() {
  
  const [dropdown, setDropdown] = useState(false);


  
  const ListContainer = (
    <>
      <Link
        to={'/'}
        className="border-b-2 text-[18px] font-semibold   text-black border-transparent hover:text-blue-500 transition-colors duration-300 transform   mx-1.5 sm:mx-6"
      >
        Home
      </Link>

      <div className="border-b-2 text-[18px] font-semibold text-black border-transparent hover:text-blue-500 mx-1.5 sm:mx-6 group relative cursor-pointer">
        <div className="flex items-center justify-center group gap-2">
          <span>Services</span>{' '}
          <MdKeyboardArrowDown className=" transition-transform group-hover:rotate-180 mt-2" />
        </div>
        <div className="hidden group-hover:block  absolute left-[67px] lg:-left-20 -top-10 lg:top-0  cursor-pointer bg-none p-10 lg:py-12">
          <div
            className="flex flex-col w-64 p-4 lg:space-y-5 space-y-3
           bg-white text-black opacity-100 border rounded-lg"
          >
            <ServicesItem text={'SEO'} link={'SEO'}></ServicesItem>
            <ServicesItem
              text={'Web Design'}
              link={'Web-Design'}
            ></ServicesItem>
            <ServicesItem
              text={'Graphics Design'}
              link={'Graphics-Design'}
            ></ServicesItem>
            <ServicesItem
              text={'Digital Marketing'}
              link={'Digital-Marketing'}
            ></ServicesItem>
            <ServicesItem
              text={'App Development'}
              link={'App-Development'}
            ></ServicesItem>
            <ServicesItem
              text={'Web Development'}
              link={'Web-Development'}
            ></ServicesItem>
          </div>
        </div>
      </div>
      <Link
        to={'about'}
        className="border-b-2 text-[18px] font-semibold text-black border-transparent hover:text-blue-500 transition-colors duration-300 transform   mx-1.5 sm:mx-6"
      >
        About
      </Link>

      {/* <Link
        to={'career'}
        className="border-b-2 text-[18px] font-semibold  text-black border-transparent hover:text-blue-500 transition-colors duration-300 transform   mx-1.5 sm:mx-6"
      >
        Career
      </Link> */}

      <Link
        to={'/contact'}
        className="border-b-2 text-[18px] font-semibold  text-black border-transparent hover:text-blue-500 transition-colors duration-300 transform   mx-1.5 sm:mx-6"
      >
        Contact
      </Link>
    </>
  );


  return (
    <div className=" z-50 fixed top-0 left-0 right-0 px-6 bg-white shadow-sm border-b">
      <div
        className=" w-full   max-w-[1440px] mx-auto 
      text-black"
      >
        <div className="  flex items-center  justify-between  gap-x-64  w-full ">
          <div className="flex lg:hidden justify-start items-center   ">
            <div className="  dropdown relative">
              <div
                tabIndex={0}
                onClick={() => {
                  setDropdown(!dropdown);
                }}
                role="button"
                className=" "
              >
                <HiOutlineBars3  className='text-2xl mr-2 '/>
              </div>
              {dropdown ? (
                <>
                  {' '}
                  <div className="absolute top-8 left-0  ">
                    <ul
                      tabIndex={0}
                      className="menu menu-sm dropdown-content   rounded-box z-[1] mt-3 w-52 p-2 bg-white shadow-differenceCard z-50shadow-violet-300"
                    >
                      <div className="container flex flex-col items-center justify-center p-6 mx-auto  capitalize   space-y-3 ">
                        {ListContainer}
                      </div>
                    </ul>
                  </div>
                </>
              ) : (
                ''
              )}
            </div>
            <div>
              <Link
                to={'/'}
                className=" text-xl md:text-2xl lg:text-3xl font-bold text-start  
             "
              >
                <img src="/logo.png" className="w-[100px]" alt="" />
              </Link>
            </div>
          </div>
          <div className=" hidden lg:flex  w-full justify-between   items-center">
            <div>
              <Link
                to={'/'}
                className=" text-xl md:text-2xl lg:text-3xl font-bold   
             "
              >
                <img src="/logo.png" className="w-8/12" alt="" />
              </Link>
            </div>
            <div>
              <ul className="menu menu-horizontal px-1">
                <div className="container flex items-center justify-center *:px-6 mx-auto text-gray-600 capitalize   ">
                  {ListContainer}
                </div>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
