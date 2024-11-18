import React, { useState } from 'react';

import { BsFillHouseAddFill } from 'react-icons/bs';

const Contact = () => {
  const handleSubmit = () => {};
  return (
    <div
      className="container mx-auto   text-gray-800 rounded-xl  pt-20 md:pt-36
     "
    >
      <form onSubmit={handleSubmit}>
        <div className="max-w-[500px] mx-auto">
          <div>
            <div>
              <label
                htmlFor="title"
                className=" inline-block  text-gray-600 py-3 "
              >
                Name
              </label>
              <input
                className="w-full px-4 py-3 text-gray-800 border border-slate-500 focus:outline-slate-500 rounded-md "
                name="Name"
                id="title"
                type="text"
                placeholder="Name"
                required
              />
            </div>

            <div>
              <label
                htmlFor="title"
                className="inline-block text-gray-600 py-3"
              >
                Website/FB Page
              </label>
              <input
                className="w-full px-4 py-3 text-gray-800 border border-slate-500 focus:outline-slate-500 rounded-md "
                name="Website"
                id="title"
                type="text"
                placeholder="www.yourwebsite.com"
                required
              />
            </div>
          </div>

          <div>
            <div>
              <label
                htmlFor="price"
                className=" inline-block text-gray-600 py-3"
              >
                Phone Number
              </label>
              <input
                className="w-full px-4 py-3 text-gray-800 border border-slate-500 focus:outline-slate-500 rounded-md "
                name="PhoneNumber"
                id="price"
                type="number"
                placeholder="017393****"
                required
              />
            </div>

            <div>
              <label
                htmlFor="guest"
                className="inline-block text-gray-600 py-3"
              >
                Email Address
              </label>
              <input
                className="w-full px-4 py-3 text-gray-800 border border-slate-500 focus:outline-slate-500 rounded-md "
                name=" EmailAddress"
                id="guest"
                type="number"
                placeholder="lardix@gmail.com"
                required
              />
            </div>
          </div>

          <div>
            <label htmlFor="category" className="block text-gray-600 py-3">
              Your Need
            </label>
            <select
              required
              className="w-full border px-1 py-3 border-slate-500  focus:outline-slate-500 rounded-md"
              name="subject"
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
            <label htmlFor="description" className="block text-gray-600 py-3">
              Description
            </label>

            <textarea
              id="description"
              className="block rounded-md focus:orange-300 w-full h-32 px-4 py-3 text-gray-800  border border-slate-500 focus:outline-slate-500 "
              name="description"
            ></textarea>
          </div>
        </div>

        <div className=" max-w-[500px] mx-auto">
          <button
            type="submit"
            className="w-full p-3 mt-5 mb-20 text-center font-medium border hover:text-white   transition duration-200 rounded border-slate-500 hover:border-blue-500 focus shadow-md hover:bg-blue-500"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default Contact;
