import React from 'react'

function HeadingDesing({text1,text2,description,keyword}) {
  return (
    <div className="mt-6 lg:mt-0 mb-12">
      <div className=" ">
        <h1 className="text-xl text-blue-700 text-center font-semibold ml-4 mb-2">
          {keyword}
        </h1>
      </div>
      <div className=" ">
        <h1 className="text-4xl text-center font-bold ml-4">
          {text1}{' '}
          <span className="font-bold bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 bg-clip-text text-transparent">
            {' '}
           {text2}
          </span>
        </h1>
      </div>
      <div className="lg:w-3/6 mx-auto">
        <h1 className=" ml-6 mt-4 text-[#52525c]  text-center">
          {description}
        </h1>
      </div>
    </div>
  );
}

export default HeadingDesing