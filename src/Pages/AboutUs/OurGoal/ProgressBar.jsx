import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import './OurGoal.css'

const ProgressBar = ({ text, percentage }) => {


  return (
    <div className="container flex  justify-between items-center  ">
      <div className="flex-1">
        <h1 className="">{text}</h1>
      </div>
      <div className="progressbar-container flex-1">
        <div
          className="progressbar-complete"
          style={{ width: `${percentage}%` }}
        >
          <div className="progressbar-liquid"></div>
        </div>
        <span className="progress py-8  flex justify-center items-center text-white ">
          {percentage}%
        </span>
      </div>
    </div>
  );
};

export default ProgressBar
