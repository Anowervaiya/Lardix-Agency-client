import React, { useState } from 'react';
import ServicesItem from '../../Components/ServicesItem';


function Navbar() {
  
  const [dropdown, setDropdown] = useState(false);


  
 
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

      <a
        href="#"
        className="border-b-2 text-xl text-white border-transparent hover:text-blue-500 transition-colors duration-300 transform   hover:border-blue-500 mx-1.5 sm:mx-6"
      >
        Career
      </a>

      <a
        href="#"
        className="border-b-2 text-xl text-white border-transparent hover:text-blue-500 transition-colors duration-300 transform   hover:border-blue-500 mx-1.5 sm:mx-6"
      >
        Contact
      </a>
    </>
  );


  return (
    <div>
      <div className="navbar lg:px-8 fixed top-0  z-50 bg-[#0B163F] text-white">
        <div className="navbar-start ">
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
          <a className=" text-2xl md:text-3xl lg:text-4xl font-semibold text-center">
            Lardix Agency
          </a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            <div className="container flex items-center justify-center p-6 mx-auto text-gray-600 capitalize   ">
              {ListContainer}
            </div>
          </ul>
        </div>
        <div className="navbar-end">
          <a className=""></a>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
