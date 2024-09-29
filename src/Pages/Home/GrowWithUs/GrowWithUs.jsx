import React from 'react';

function GrowWithUs() {
  return (
    <div>
      <div className="hero  ">
        <div className="hero-content flex-col lg:flex-row">
          <div className="flex-1">
            {' '}
            <img
              src="src/assets/Growth.jpg"
              className="w-full  h-[500px] lg:h-full"
            />
          </div>
          <div className="flex-1  text-center lg:text-start ">
            <h1 className="text-4xl font-bold">Grow Your Business With Us</h1>
            <p className="py-6">
              Unlock new opportunities by partnering with us to scale your
              operations. Our tailored solutions are designed to boost your
              growth, increase efficiency, and expand your market reach. Whether
              you're a startup or an established company, we provide the tools
              and expertise to help you thrive. Let's grow together!
            </p>

            <div className="text-start w-60 mx-auto lg:mx-0">
              <li>Customized Growth Strategies </li>
              <li>Training and Development</li>
              <li>Technology Solutions</li>
              <li>Business Networking </li>
              <li>Expert Consultation</li>
              <li>Marketing Support </li>
              <li>Financial Planning </li>
              <li>Ongoing Support </li>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default GrowWithUs;
