"use client"

import Masonry from 'react-masonry-css';
import Image from "next/image";

const Photography = () => {
  const items = [
    "https://picsum.photos/id/1015/600/400",
    "https://picsum.photos/id/1025/300/500",
    "https://picsum.photos/id/1035/400/300",
    "https://picsum.photos/id/1045/350/600",
    "https://picsum.photos/id/1055/450/400",
    "https://picsum.photos/id/1065/500/350",
    "https://picsum.photos/id/1075/300/300",
    "https://picsum.photos/id/1085/400/600",
    "https://picsum.photos/id/1095/550/400",
    "https://picsum.photos/id/1105/600/600",
  ].map((src, index) => (
    <div key={index} className="masonry-item p-1">
      <img
        src={src}
        alt={`Test image ${index + 1}`}
        className="w-full h-auto rounded-md object-cover border-1"
      />
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
          flex flex-col md:flex-row items-center gap-3 md:gap-5 py-3 md:py-13 md:pl-23
          text-gray-900 dark:text-gray-100
          bg-gray-50 dark:bg-gray-800
        "
      >
        <Image
          className="rounded-full border-1"
          src="/akira-profile-pic.webp"
          width={110}
          height={110}
          alt="Picture of the author"
        />
        <div className="flex flex-col justify-start text-center md:text-left">
          <span className="font-bold text-lg">Turhan Kimbrough</span>
          <span className="text-gray-800 dark:text-gray-300">Photographer</span>
        </div>
      </div>

      {/* Masonry Grid */}
      <div className="w-full px-1 py-2 md:px-3">
        <Masonry
          breakpointCols={breakpointColumnsInfo}
          className="flex w-auto -ml-2"
          columnClassName="pl-1"
        >
          {items}
        </Masonry>
      </div>
    </div>
  );
};

export default Photography;
