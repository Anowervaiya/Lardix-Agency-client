import React from 'react'

function Loading() {
  return (
    <div className="w-screen min-h-screen fixed top-0 z-50 bg-[#0B163F] flex justify-center items-center">
      <span className="loading loading-bars loading-lg text-blue-500"></span>
    </div>
  );
}

export default Loading