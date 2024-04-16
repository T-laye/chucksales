import { startCounting } from "@/utils/Helpers";
import React, { useEffect, useState } from "react";

interface StatsProps {
  stat: number;
  title?: string;
}

const Stats: React.FC<StatsProps> = ({ stat, title }) => {
  const [count, setCount] = useState(0);
//   console.log(stat, count)

  useEffect(() => {
    startCounting(stat, setCount);
  }, [stat]);


  return (
    <div className="flex flex-col items-center w-fit">
      {count && <h3 className="font-sfBold text-[32px] lg:text-5xl text-primary">
        {count}
        <span className="text-3xl  mb-2 inline-block align-middle">+</span>
      </h3>}
      <p>{title}</p>
    </div>
  );
};

export default Stats;
