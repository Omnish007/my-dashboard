import React from "react";
import {
  HomeIcon,
  StarIcon,
  Squares2X2Icon,
  Bars3Icon,
} from "@heroicons/react/24/outline";
import { CubeIcon } from "@heroicons/react/24/solid";

const Sidebar = () => {
  return (
    <aside className="bg-primary-bg flex flex-col items-center py-4 w-16 md:w-24">
      <div className="mb-10 mt-2">
        <CubeIcon className="w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10 lg:w-12 lg:h-12 text-secondary-bg" />
      </div>
      <div className="flex flex-col space-y-8 mt-8">
        <HomeIcon className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7 lg:w-8 lg:h-8 text-white" />
        <StarIcon className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7 lg:w-8 lg:h-8 text-white" />
        <Squares2X2Icon className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7 lg:w-8 lg:h-8 text-white" />
        <Bars3Icon className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7 lg:w-8 lg:h-8 text-white" />
      </div>
    </aside>
  );
};

export default Sidebar;
