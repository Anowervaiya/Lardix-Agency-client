import React, { useState } from 'react';

import { BsFillHouseAddFill } from 'react-icons/bs';
import HeadingDesing from '../../Components/HeadingDesing';

import useWeb3Forms from '@web3forms/react';
const Contact = () => {
  const handleSubmit = e => {
    e.preventDefault();

    //  mdanowerhossen727@gmail.com======> smtp username
    // E358C71FF7978374DD592C0CD8452E775D9C======>smtp password
    const Name = e.target?.Name?.value;
    const Website = e.target?.Website?.value;
    const PhoneNumber = e.target?.PhoneNumber?.value;
    const EmailAddress = e.target?.EmailAddress?.value;
    const Service = e.target?.Service?.value;
    const Description = e.target?.Description?.value;

    Email.send({
      SecureToken: '8b3e21d7-c267-44f2-a85f-1494d7f1e2c6',
      Name: Name,
      Website: Website,
      PhoneNumber: PhoneNumber,
      EmailAddress: EmailAddress,
      Service: Service,

      To: 'mdanowerhossen727@gmail.com',
      From: 'mdanowerhossen727@gmail.com',
      ReplyTo: EmailAddress,
      Subject: 'This is the subject',

      Body: `
    Name: ${Name} <br>
    Website: ${Website} <br>
    Phone Number: ${PhoneNumber} <br>
    Email Address: ${EmailAddress} <br>
    Service: ${Service} <br>
    Description: ${Description}
  `,
    }).then(message => alert(message));
  };
  return (
    <div
      className="   rounded-xl  pt-20   
     "
    >
      {/* form section  */}
      <div className="bg-gradient-to-tr from-pink-300 to-blue-300 py-12 min-h-screen flex justify-center items-center px-8 ">
        <form
          onSubmit={handleSubmit}
          className="bg-white max-w-[1440px] mx-auto rounded-xl shadow-difference  "
        >
          <div className="flex justify-center items-center flex-col">
            <h1 className="text-black font-bold text-2xl pt-8 pb-4">
              Connect With Us
            </h1>
            <p className="w-2/3 text-center text-black">
              Schedule a meeting to discuss how lardix agency can help you to
              double, triple or quadruple your sales and revenue. So, tell us
              what you want – simply fill in the form below and we’ll be in
              touch with you shortly
            </p>
          </div>
          <div className=" px-20 pt-12 pb-7 mx-auto">
            <div className="flex  justify-center items-center gap-4">
              <div className="w-1/2">
                <label
                  htmlFor="title"
                  className=" inline-block  text-black py-3 "
                >
                  Name
                </label>
                <input
                  className="w-full px-4 py-3 text-gray-800 border border-slate-500 focus:outline-slate-900 rounded-md "
                  name="Name"
                  id="title"
                  type="text"
                  placeholder="Name"
                  required
                />
              </div>

              <div className="w-1/2">
                <label htmlFor="title" className="inline-block text-black py-3">
                  Website/FB Page
                </label>
                <input
                  className="w-full px-4 py-3 text-gray-800 border border-slate-500 focus:outline-slate-900 rounded-md "
                  name="Website"
                  id="title"
                  type="text"
                  placeholder="www.yourwebsite.com"
                  required
                />
              </div>
            </div>

            <div className="flex  justify-center items-center gap-4">
              <div className="w-1/2">
                <label
                  htmlFor="price"
                  className=" inline-block text-black py-3"
                >
                  Phone Number
                </label>
                <input
                  className="w-full px-4 py-3 text-gray-800 border border-slate-500 focus:outline-slate-900 rounded-md "
                  name="PhoneNumber"
                  id="price"
                  type="number"
                  placeholder="017393****"
                  required
                />
              </div>

              <div className="w-1/2">
                <label htmlFor="guest" className="inline-block text-black py-3">
                  Email Address
                </label>
                <input
                  className="w-full px-4 py-3 text-gray-800 border border-slate-500 focus:outline-slate-900 rounded-md "
                  name="EmailAddress"
                  id="guest"
                  type="email"
                  placeholder="lardix@gmail.com"
                  required
                />
              </div>
            </div>

            <div>
              <div>
                <label htmlFor="category" className="block text-black py-3">
                  Your Need
                </label>
                <select
                  required
                  className="w-full border px-1 py-3 border-slate-500  focus:outline-slate-900 rounded-md"
                  name="Service"
                >
                  <option value="SEO">SEO</option>
                  <option value="Graphics-Design">Graphics Design</option>
                  <option value="App-Development">App Development</option>
                  <option value="Digital-Marketing">Digital Marketing</option>
                  <option value="Web-design/Development">
                    Web Design/Development
                  </option>
                  <option value="Others-Reasons">Others reasons</option>
                </select>
              </div>

              <div>
                <label htmlFor="description" className="block text-black py-3">
                  Description
                </label>

                <textarea
                  id="description"
                  className="block rounded-md focus:orange-300 w-full h-32 px-4 py-3 text-gray-800  border border-slate-500 focus:outline-slate-900 "
                  name="Description"
                ></textarea>
              </div>
            </div>
          </div>

          <div className="px-20   mx-auto">
            <button
              type="submit"
              className="w-full p-3 mt-5 mb-20 text-center font-medium border hover:text-white   transition duration-200 rounded border-slate-500 hover:border-blue-500 focus shadow-md hover:bg-blue-500"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
      {/* get in touch  */}
    </div>
  );
};

export default Contact;
