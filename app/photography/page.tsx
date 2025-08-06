"use client"

import Masonry from 'react-masonry-css';
import Image from "next/image";

const Photography = () => {
  // Create an array of items — replace with real image data when available
  const items = Array.from({ length: 20 }).map((_, index) => (
    <div key={index} className="masonry-item p-2">
      <div className="bg-gray-200 dark:bg-gray-700 h-48 w-full rounded-md" />
    </div>
  ));

  // Define breakpoints for responsive design
  const breakpointColumnsInfo = {
    default: 3,
    1100: 3,
    700: 2,
  };

  return (
    <div className="min-h-screen flex flex-col items-center">
      <div className="
          w-full 
          flex flex-col md:flex-row items-center gap-5 py-8 md:py-13 md:pl-23
          text-gray-900 dark:text-gray-100
          bg-gray-50 dark:bg-gray-800
        "
      >
        <Image
          className="rounded-full"
          src="/angie-pic.JPG"
          width={120}
          height={120}
          alt="Picture of the author"
        />
        <div className="flex flex-col justify-start text-center md:text-left">
          <span className="font-bold text-lg">Turhan Kimbrough</span>
          <span className="text-gray-800 dark:text-gray-300">Photographer</span>
        </div>
      </div>

      {/* Masonry Grid */}
      <div className="w-full px-4 py-2 md:px-10">
        <Masonry
          breakpointCols={breakpointColumnsInfo}
          className="flex w-auto -ml-4"
          columnClassName="pl-4"
        >
          {items}
        </Masonry>
      </div>
    </div>
  );
};

export default Photography;
