import React from 'react';
import CountUp from 'react-countup';

function StatisticsCard({ Icon, End, Desc }) {
  return (
    <div className=" px-3 py-8   w-full">
      <div className="flex  gap-3 justify-center items-center ">
        <span className="text-7xl text-blue-700">{Icon}</span>
        <div className="space-y-1">
          <h1 className="text-3xl text-center font-bold">
            <CountUp
                      start={0}
                      end={End}
                      delay={1}
                      duration={6}
                      enableScrollSpy="true"
                      suffix="+"
                    >
                      {({ countUpRef }) => (
                        <div>
                          <span ref={countUpRef} />
                        </div>
                      )}
                    </CountUp></h1>
          <p className="text-center text-sm">{Desc}</p>
        </div>
      </div>
    </div>
  );
}

export default StatisticsCard;