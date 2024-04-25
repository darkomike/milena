import React from "react";
import IconCard from "./IconCard";

const AchievementCard = ({numbers, label,icon}) => {
  return (
    <div className=" flex flex-col items-center justify-center space-y-3 border-2 rounded-sm h-[230px] w-[270px] hover:bg-red-500 hover:shadow-lg hover:text-white">
      <IconCard icon={icon}/>
      <p className="font-bold text-2xl">{numbers}k</p>
      <p>{label}</p>
    </div>
  );
};

export default AchievementCard;
