import React from 'react';
import PricessCard from './PricessCard';

import { useEffect, useState } from "react"
import { motion } from "framer-motion"
function WorkProcess() {
  const cards = [
    {
      id: 1,
      name: "Requirment",
      logo: "/placeholder.svg?height=80&width=80",
      color: "bg-white",
      pinColor: "#FF69B4",
      swingDirection: "right",
      swingAmount: 6,
    },
    {
      id: 2,
      name: " Project Planning",
      logo: "/placeholder.svg?height=80&width=80",
      color: "bg-white",
      pinColor: "#FF00FF",
      swingDirection: "right",
      swingAmount: 6,
    },
    {
      id: 3,
      name: "Project Execute",
      logo: "/placeholder.svg?height=80&width=80",
   
      pinColor: "#FF4500",
      swingDirection: "right",
      swingAmount: 6,
    },
    {
      id: 4,
      name: "Delivery",
      logo: "/placeholder.svg?height=80&width=80",

      pinColor: "#9932CC",
      swingDirection: "right",
      swingAmount: 6,
    },
    {
      id: 5,
      name: "Maintenance",
      logo: "/placeholder.svg?height=80&width=80",
  
      pinColor: "#FF1493",
      swingDirection: "right",
      swingAmount: 6,
    },
    {
      id: 6,
      name: "Support",
      logo: "/placeholder.svg?height=80&width=80",
  
      pinColor: "#FF1479",
      swingDirection: "right",
      swingAmount: 6,
    },
  ]
  const [isClient, setIsClient] = useState(false)

  useEffect(() => {
    setIsClient(true)
  }, [])

  if (!isClient) return null

  return (
    <div 
    className=" max-w-[1440px] mx-auto p-4 pt-16"
    >
      <div className="mt-6 lg:mt-0 mb-12">
        <div className=" ">
          <h1 className="text-xl text-blue-700 text-center font-bold ml-4 mb-4">
            Process
          </h1>
        </div>
        <div className=" ">
          <h1 className="text-4xl text-center font-bold ml-4">
            Our Work{' '}
            <span className="font-bold bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 bg-clip-text text-transparent">
              {' '}
              Process
            </span>
          </h1>
        </div>
        <div className="lg:w-3/4 mx-auto">
          <h1 className=" ml-6 mt-4 text-[#52525c]  text-center">
            Our work process is streamlined to ensure efficiency and clarity. We
            begin with understanding client needs, followed by strategic
            planning, execution, and continuous feedback to deliver optimal
            results.
          </h1>
        </div>
      </div>
   
<div className="w-full p-16 overflow-hidden">
      <div className="grid grid-cols-1 md:grid-cols-3  gap-16  ">
        {cards.map((card) => {
          // Calculate swing animation based on direction and amount
          const rotateAnimation =
            card.swingDirection === "none"
              ? {}
              : {
                  rotate:
                    card.swingDirection === "left"
                      ? [-card.swingAmount, 0, card.swingAmount]
                      : [card.swingAmount, 0, -card.swingAmount],
                }

          return (
            <div key={card.id} className="relative">
              {/* Fixed pin at top */}
              <div
                className="absolute -top-2 left-1/2 -translate-x-1/2 w-4 h-4 rounded-full shadow-md z-10"
                style={{ backgroundColor: card.pinColor }}
              />

              {/* Animated card */}
              <motion.div
                className="relative"
                style={{
                  transformOrigin: "top center",
                  originY: 0,
                  originX: 0.5,
                }}
                animate={rotateAnimation}
                transition={{
                  duration: 2 + Math.random() * 1.5, // Slightly randomized duration for natural feel
                  repeat: Number.POSITIVE_INFINITY,
                  repeatType: "reverse",
                  ease: "easeInOut",
                }}
              >
                <div className="relative bg-white shadow-service rounded-lg overflow-hidden">
                  <div className="p-6 flex flex-col items-center gap-4">
                    <div className={`w-20 h-20 ${card.color} rounded-lg flex items-center justify-center`}>
                    <span className='w-16 h-16 flex justify-center items-center text-7xl font-bold'>{card?.id}</span>
                    </div>
                    <h3 className="font-medium text-center text-sm lg:text-xl lg:font-bold">{card.name}</h3>
                  </div>
                </div>
              </motion.div>
            </div>
          )
        })}
      </div>
    </div>
    </div>
  );
}

export default WorkProcess;
