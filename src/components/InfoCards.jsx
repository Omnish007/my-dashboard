import React from "react";
import {
  ShoppingBagIcon,
  TruckIcon,
  CurrencyDollarIcon,
  ExclamationTriangleIcon,
  ChevronUpIcon,
  ChevronDownIcon,
} from "@heroicons/react/24/solid";

const InfoCards = () => {
  const cardData = [
    {
      Icon: ShoppingBagIcon,
      iconColor: "text-[#3D65FE]",
      bgColor: "bg-[#273366]",
      title: "Total Orders",
      value: "75",
      percentage: "3%",
      valueColor: "text-white",
      percentageColor: "text-green-500",
      trendIcon: <ChevronUpIcon className="w-4 h-4" />,
    },
    {
      Icon: TruckIcon,
      iconColor: "text-[#00C98B]",
      bgColor: "bg-[#135246]",
      title: "Total Delivered",
      value: "70",
      percentage: "3%",
      valueColor: "text-white",
      percentageColor: "text-[#EB6064]",
      trendIcon: <ChevronDownIcon className="w-4 h-4" />,
    },
    {
      Icon: ExclamationTriangleIcon,
      iconColor: "text-[#F25B5A]",
      bgColor: "bg-[#5D3036]",
      title: "Total Cancelled",
      value: "5",
      percentage: "3%",
      valueColor: "text-white",
      percentageColor: "text-green-500",
      trendIcon: <ChevronUpIcon className="w-4 h-4" />,
    },
    {
      Icon: CurrencyDollarIcon,
      iconColor: "text-[#DD429A]",
      bgColor: "bg-[#582948]",
      title: "Total Revenue",
      value: "$12k",
      percentage: "3%",
      valueColor: "text-white",
      percentageColor: "text-[#EB6064]",
      trendIcon: <ChevronDownIcon className="w-4 h-4" />,
    },
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 px-0 md:px-0">
      {cardData.map((card, index) => (
        <div
          key={index}
          className="bg-primary-bg p-4 rounded text-white flex flex-col items-start relative"
        >
          <div
            className={`p-2 rounded-md w-12 h-12 ${card.bgColor} flex items-center justify-center`}
          >
            <card.Icon className={`w-6 h-6 ${card.iconColor}`} />
          </div>
          <span className="mt-2 text-sm text-white block">{card.title}</span>
          <div className="flex items-center justify-between mt-2">
            <span className={`text-2xl md:text-3xl ${card.valueColor}`}>
              {card.value}
            </span>
          </div>
          <div className="absolute bottom-2 right-2 flex items-center space-x-1">
            <span className={`text-xs md:text-sm ${card.percentageColor}`}>
              {card.trendIcon}
            </span>
            <span className={`text-xs md:text-sm ${card.percentageColor}`}>
              {card.percentage}
            </span>
          </div>
        </div>
      ))}
    </div>
  );
};

export default InfoCards;
