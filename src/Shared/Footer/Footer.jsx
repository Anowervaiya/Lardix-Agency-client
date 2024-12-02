import React from 'react';
import { Link } from 'react-router-dom';
import { MdOutlineMail } from 'react-icons/md';
import { FaXTwitter } from 'react-icons/fa6';
import {
  FaFacebook,
  FaInstagramSquare,
  FaLinkedin,
  FaTelegram,
  FaWhatsapp,
} from 'react-icons/fa';
import ServicesItem from '../../Components/ServicesItem';
import useAxiosSecure from '../../Hooks/useAxiosSecure';
import { useQuery } from '@tanstack/react-query';

function Footer() {
  return (
    <>
      <footer className="bg-slate-700 text-white py-24 px-12">
        <div className="max-w-[1440px] mx-auto ">
          <div className=" lg:ml-12 grid grid-cols-5 gap-8 ">
            <div className="col-span-4 md:col-span-2  lg:col-span-2  lg:text-start md:text-start text-center">
              <h1 className="lg:text-4xl md:text-3xl text-2xl lg:font-extrabold md:font-extrabold font-semibold ">
                Get In Touch{' '}
              </h1>
              <p className=" font-semibold my-6">
                Connect with us! For inquiries, feedback, or collaboration, use
                our 'Get In Touch' feature to reach the heart of Gift Card.From
                high-performance sticks to advanced goalie equipment, discover
                the tools shaping champions.
              </p>

              <div className="flex gap-4 items-center lg:justify-start md:justify-start justify-center mt-4 ">
                <p className="">Mirpur-02, Dhaka, Bangladesh</p>
              </div>
              <div className="flex gap-4 items-center lg:justify-start md:justify-start justify-center mt-4 ">
                <p className="">Connect With</p>
              </div>
              <div className="flex gap-4 lg:gap-8 *:text-3xl mt-3  justify-center md:justify-start">
                <FaXTwitter />
                <FaFacebook />
                <FaLinkedin />
                <FaTelegram />
                <FaInstagramSquare />
              </div>
            </div>
            <div className="col-span-4 md:col-span-2 lg:col-span-1    mt-10   flex flex-col  font-semibold gap-5 lg:text-start md:text-start text-center ">
              <h3 className="text-white font-bold text-xl">Our Services</h3>

              <ServicesItem text={'SEO'} link={'SEO'}></ServicesItem>
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
            <div className="col-span-4 md:col-span-1 lg:col-span-1  mt-10 flex flex-col  font-semibold gap-5 lg:text-start md:text-start text-center">
              <h3 className="text-white font-bold text-xl">Quick Links</h3>

              <Link className="hover:underline underline-offset-8">FAQ</Link>
              <Link
                to={'/about'}
                className="hover:underline underline-offset-8"
              >
                About Us
              </Link>
              <Link
                to={'/contact'}
                className="hover:underline underline-offset-8"
              >
                Contact Us
              </Link>
              <Link className="hover:underline underline-offset-8">
                Community
              </Link>
              <Link className="hover:underline underline-offset-8">
                Help Center{' '}
              </Link>
            </div>
            <div className="col-span-4 md:col-span-1 lg:col-span-1  mt-10 flex flex-col  font-semibold gap-5 md:w-[400px] lg:w-fit  lg:text-start md:text-start text-center">
              <h3 className="text-white font-bold text-xl">Contact Info</h3>

              <div className="flex gap-2 items-center lg:justify-start md:justify-start justify-center">
                <MdOutlineMail className="text-2xl" />
                <p className=" hover:underline">lardix@gmail.com</p>
              </div>
              <div className="flex gap-2 items-center lg:justify-start md:justify-start justify-center">
                <FaWhatsapp className="text-2xl" />
                <p className=" hover:underline">whatsapp (+880 1639-406 082)</p>
              </div>
              <div className="flex gap-2 items-center lg:justify-start md:justify-start justify-center">
                <FaLinkedin className="text-2xl" />
                <p className=" hover:underline">
                  {' '}
                  <Link to={'www.linkedin.com/in/anowerhossen'}>LinkedIn</Link>
                </p>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer;
