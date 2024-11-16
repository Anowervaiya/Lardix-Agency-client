import React from 'react'

function HeadingDesing({text,description}) {
  return (
    <div>
      {' '}
      <div className="  pt-8 relative bg-gradient-to-r from-[#666579] via-[#161681] to-[#138eac]">
        <div>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
            <path
              fill="#4e7f8f"
              fill-opacity="1"
              d="M0,96L48,133.3C96,171,192,245,288,256C384,267,480,213,576,160C672,107,768,53,864,64C960,75,1056,149,1152,176C1248,203,1344,181,1392,170.7L1440,160L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
            ></path>
          </svg>
        </div>
        <div className="absolute top-0 right-0 left-0 bottom-0 flex justify-center items-center">
          <div>
            <h1 className="text-2xl  uppercase md:text-3xl  lg:text-4xl text-center text-white md:font-bold ">
              {' '}
              {text}
            </h1>
            <p
              className="text-white   lg:text-xl w-2/3
             text-center mx-auto mt-4"
            >
              {description}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HeadingDesing