"use client"

import Masonry from "react-masonry-css";
import Image from "next/image";
import { FadeInViewDownward } from "@/components/motion-animations";
import { CldImage } from "next-cloudinary";

const Photography = () => {
  const items = [
    "https://res.cloudinary.com/dfiwecvfd/image/upload/v1727646361/cabin-view_qumj6w.jpg",
    "https://res.cloudinary.com/dfiwecvfd/image/upload/v1755126909/IMG_2941_snss44.jpg",
    "https://res.cloudinary.com/dfiwecvfd/image/upload/v1755126907/7EF6EF80-DA79-4FB5-B2BA-ED296FFA135C_y7h4qv.jpg",
    "https://res.cloudinary.com/dfiwecvfd/image/upload/v1747101834/IMG_2611_hw1kww.jpg",
    "https://res.cloudinary.com/dfiwecvfd/image/upload/v1747101832/IMG_2616_f2tiow.jpg",
    "https://res.cloudinary.com/dfiwecvfd/image/upload/v1739415452/Big-face_dxe7ah.jpg",
    "https://res.cloudinary.com/dfiwecvfd/image/upload/v1727647259/bridge-view-min_lgvapr.jpg",
    "https://res.cloudinary.com/dfiwecvfd/image/upload/v1727646360/IMG_1148_yaegg8.jpg",
    "https://res.cloudinary.com/dfiwecvfd/image/upload/v1727646361/IMG_0781_bnry3a.jpg",
    "https://res.cloudinary.com/dfiwecvfd/image/upload/v1763520605/F9F7B314-BB49-4C34-8502-6D8FB97A689F_owyr5n.jpg",
    "https://res.cloudinary.com/dfiwecvfd/image/upload/v1763520586/D9841AE6-57D8-494D-9EB2-2D1A01C6A835_izdsuw.jpg",
  ].map((src, index) => (
    <div key={index} className="masonry-item p-1">
      <CldImage
        src={src}
        alt={`Test image ${index + 1}`}
        width={800}
        height={800}
        className="w-full h-auto object-cover ring-1 shadow-md"
      />
    </div>
  ));


  // Define breakpoints for responsive design
  const breakpointColumnsInfo = {
    default: 5, // large desktops and above
    1400: 4,    // medium desktops
    1024: 3,    // tablets in landscape / smaller desktops
    768: 2,     // tablets in portrait
    480: 2,     // phones
  };

  return (
    <FadeInViewDownward className="min-h-screen flex flex-col items-center">
      <div className="
          w-full 
          flex flex-col md:flex-row items-center gap-3 md:gap-5 py-3 md:py-13 md:pl-23
          text-gray-900 dark:text-gray-100
          bg-gray-50 dark:bg-gray-800
        "
      >
        {/* Smaller profile icon on mobile */}
        <Image
          className="block md:hidden rounded-full border-1"
          src="/akira-profile-pic.webp"
          width={80}
          height={80}
          alt="Picture of the author"
        />

        {/* Larger profile icon on desktop */}
        <Image
          className="hidden md:block rounded-full border-1"
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
      <div className="w-full py-1 bg-gray-50 dark:bg-black">
        <Masonry
          breakpointCols={breakpointColumnsInfo}
          className="flex w-auto"
        >
          {items}
        </Masonry>
      </div>
    </FadeInViewDownward>
  );
};

export default Photography;
