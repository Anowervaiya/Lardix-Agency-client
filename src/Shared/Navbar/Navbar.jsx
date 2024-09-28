import React from 'react'

function Navbar() {

  const ListContainer = (
    <>
      {' '}
      <nav>
        <div className="container flex items-center justify-center p-6 mx-auto text-gray-600 capitalize   ">
          <a
            href="#"
            className="border-b-2 text-xl  text-white border-transparent hover:text-blue-500 transition-colors duration-300 transform   hover:border-blue-500 mx-1.5 sm:mx-6"
          >
            Home
          </a>

          <a
            href="#"
            className="border-b-2 text-xl text-white border-transparent hover:text-blue-500 transition-colors duration-300 transform   hover:border-blue-500 mx-1.5 sm:mx-6"
          >
            Services
          </a>

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
        </div>
      </nav>
    </>
  );
  return (
    <div>
      <div className="navbar lg:px-8 fixed top-0  z-50 bg-[#0B163F] text-white">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
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
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
            ></ul>
          </div>
          <a className=" text-2xl md:text-3xl lg:text-4xl font-semibold">Lardix Agency</a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{ListContainer}</ul>
        </div>
        <div className="navbar-end">
          <a className=""></a>
        </div>
      </div>


    </div>
  );
}

export default Navbar

