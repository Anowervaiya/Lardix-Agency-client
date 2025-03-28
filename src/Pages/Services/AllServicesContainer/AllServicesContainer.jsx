import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import Button from "../../../Components/Button";
import Loading from "../../../Components/Loading";
import SecondBanner from "./SecondBanner";
import HeadingDesing from "../../../Components/HeadingDesing";
import KeySurvicesCard from "./KeySurvicesCard";
import WhatMakesUsDifference from "./WhatMakesUsDifference";
import { Titled } from "react-titled";
function AllServicesContainer({ ServiceType }) {
  const [service, setService] = useState([]);
  const ServiceName = useParams();
  useEffect(() => {
    fetch("/data.json")
      .then((res) => res.json())
      .then((data) => {
        setService(data);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  }, []);

  const finalService = service.filter(
    (item) => item?.link == ServiceName?.link
  );
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [finalService]);
  if (!finalService) return "  ";
  return (
    <>
      {finalService?.map((item, idx) => {
        return (
          <>
            <Titled title={item?.bannerHeading}></Titled>;{" "}
            <div key={idx}>
              {/* first banner  */}
              <div
                className=" px-6  pt-28 pb-12
  text-black  "
              >
                <div className=" max-w-[1440px] mx-auto flex justify-between items-center flex-col lg:flex-row-reverse ">
                  <div className="flex-1">
                    {" "}
                    <img
                      src={item?.banner}
                      className=" text-end"
                    />
                  </div>
                  <div className=" flex-1 text-center lg:text-start ">
                    <h1 className="text-3xl lg:text-6xl font-[650]  pb-3">
                          
                      
                        <span className="text-blue-700">
                          {" "}
                          {item?.bannerHeading
                            ?.split(" ")
                            .slice(1, 2)
                            .join(" ")}
                   
                   
                  <br />
                          {item?.bannerHeading
                            ?.split(" ")
                            .slice(2, 3)
                            .join(" ")}
                       
                       </span>
                  <br />
                     
                          {" "}
                          {item?.bannerHeading
                            ?.split(" ")
                            .slice(3, 5)
                            .join(" ")} <br />
                       
                      {item?.bannerHeading
                        ?.split(" ")
                        .slice( 5)
                        .join(" ")}{" "}
                      <br />
                    </h1>
                    <p className="py-6 text-[20px] max-w-[700px] leading-8">
                      {item?.description}
                    </p>
                    <div>
                      <Button text={"Explore More"}></Button>
                    </div>
                  </div>
                </div>
              </div>
              <SecondBanner data={item}></SecondBanner>
              {/* heading design  */}
              <div className="mt-16 ">
                <HeadingDesing
                  text1={`${item?.name} key services`}
                  description={`${item?.description}`}
                ></HeadingDesing>
              </div>{" "}
              {/* key services  */}
              <div className="max-w-[1440px] mx-auto my-16 px-3">
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 ">
                  {item?.["sub-services"]?.map((item, idx) => (
                    <KeySurvicesCard key={idx} item={item}></KeySurvicesCard>
                  ))}
                </div>
              </div>
              <WhatMakesUsDifference></WhatMakesUsDifference>
            </div>
          </>
        );
      })}
    </>
  );
}

export default AllServicesContainer;
