import React from "react";

interface StatsProps {
  stat?:number
  title?:string
}

const Stats: React.FC<StatsProps> = ({ stat, title }) => {
  return (
    <div className="flex flex-col items-center w-fit">
      <h3 className="font-sfBold text-[32px] lg:text-5xl text-primary">
        {stat}
        <span className="text-xl -ml-1 mb-2 inline-block align-middle">+</span>
      </h3>
      <p>{title}</p>
    </div>
  );
};

export default Stats;
