import React, { useState } from 'react';
import ServicesItem from '../../Components/ServicesItem';
import useAxiosSecure from '../../Hooks/useAxiosSecure';
import { useQuery } from '@tanstack/react-query';
import Loading from '../../Components/Loading';
import { Link } from 'react-router-dom';
import './navbar.css'
function Navbar() {
  
  const [dropdown, setDropdown] = useState(false);

  const AxiosSecure = useAxiosSecure();
  const { data: ServicesData, isLoading } = useQuery({
    queryKey: ['top-services-list'],

    queryFn: async () => {
      const data = await AxiosSecure('/top-services');

      return data?.data;
    },
  });

  if (isLoading) return <Loading></Loading>;
  
  const ListContainer = (
    <>
      <a
        href="#"
        className="border-b-2 text-xl  text-white border-transparent hover:text-blue-500 transition-colors duration-300 transform   hover:border-blue-500 mx-1.5 sm:mx-6"
      >
        Home
      </a>

      <div className="border-b-2 text-xl text-white border-transparent hover:text-blue-500 transition-colors duration-300 transform   hover:border-blue-500 mx-1.5 sm:mx-6 group relative">
        Services
        <div
          className="hidden group-hover:block absolute left-[73px] lg:left-0 top-0 lg:top-8 bg-[#0B163F] shadow shadow-violet-400
        "
        >
          {' '}
          <div className="flex flex-col w-64 p-4 *:mb-2">
          
            <ServicesItem  text={'SEO'} link={'SEO'}></ServicesItem>
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

      <a
        href="#"
        className="border-b-2 text-xl text-white border-transparent hover:text-blue-500 transition-colors duration-300 transform   hover:border-blue-500 mx-1.5 sm:mx-6"
      >
        About
      </a>

      <Link to={'career'}
        className="border-b-2 text-xl text-white border-transparent hover:text-blue-500 transition-colors duration-300 transform   hover:border-blue-500 mx-1.5 sm:mx-6"
      >
        Career
      </Link>

      <Link
      to={'/contact'}
        className="border-b-2 text-xl text-white border-transparent hover:text-blue-500 transition-colors duration-300 transform   hover:border-blue-500 mx-1.5 sm:mx-6"
      >
        Contact
      </Link>
    </>
  );


  return (
    <div>
      <div className="navbar h-[80px]  lg:px-8 fixed top-0  z-50 bg-[#0B163F] text-white">
        <div className="navbar-start"></div>
        <div className="navbar-center flex  gap-64   container mx-auto ">
          <div className="flex justify-center items-center">
            <div className="dropdown relative">
              <div
                tabIndex={0}
                onClick={() => {
                  setDropdown(!dropdown);
                }}
                role="button"
                className="btn btn-ghost lg:hidden"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h8m-8 6h16"
                  />
                </svg>
              </div>
              {dropdown ? (
                <>
                  {' '}
                  <div className="absolute top-8 left-0 bg-[#0B163F]">
                    <ul
                      tabIndex={0}
                      className="menu menu-sm dropdown-content   rounded-box z-[1] mt-3 w-52 p-2 shadow-md shadow-violet-300"
                    >
                      <div className="container flex flex-col items-center justify-center p-6 mx-auto bg-[#0B163F] capitalize   ">
                        {ListContainer}
                      </div>
                    </ul>
                  </div>
                </>
              ) : (
                ''
              )}
            </div>
            <div className="">
              <h1
                className=" text-xl md:text-2xl lg:text-3xl font-bold text-center  
             "
              >
                Lardix
              </h1>
            </div>
          </div>
          <div className=" hidden lg:flex">
            <ul className="menu menu-horizontal px-1">
              <div className="container flex items-center justify-center p-6 mx-auto text-gray-600 capitalize   ">
                {ListContainer}
              </div>
            </ul>
          </div>
        </div>

        <div className="navbar-end">
          <a className=""></a>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
