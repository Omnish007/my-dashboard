import React from "react";
import {
  ArrowRightIcon,
  CakeIcon,
  PlusCircleIcon,
} from "@heroicons/react/24/outline";
import {
  ArrowTrendingUpIcon,
  DocumentIcon,
  UserGroupIcon,
} from "@heroicons/react/24/solid";

const QuickLinks = () => {
  return (
    <div className="bg-primary-bg p-4 rounded text-white">
      <ul className="space-y-4">
        <li className="flex justify-between items-center">
          <div className="p-3 bg-[#602F37] rounded-full">
            <PlusCircleIcon className="w-5 h-5 text-[#EC6C3A]" />
          </div>
          <span>Goals</span>
          <ArrowRightIcon className="w-4 h-4 text-gray-400" />
        </li>
        <li className="flex justify-between items-center">
          <div className="p-3 bg-[#283269] rounded-full">
            <ArrowTrendingUpIcon className="w-5 h-5 text-[#5F7CDD]" />
          </div>
          <span>Popular Dishes</span>
          <ArrowRightIcon className="w-4 h-4 text-gray-400" />
        </li>
        <li className="flex justify-between items-center">
          <div className="p-3 bg-[#1D4A5E] rounded-full">
            <CakeIcon className="w-5 h-5 text-[#1473A1]" />
          </div>
          <span>Menus</span>
          <ArrowRightIcon className="w-4 h-4 text-gray-400" />
        </li>
      </ul>
    </div>
  );
};

export default QuickLinks;
