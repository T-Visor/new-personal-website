import Masonry from 'react-layout-masonry';
import Image from "next/image";


const Photography = () => {
  return (
    <div className="
        min-h-screen
        flex flex-col items-center
      "
    >
      <div className="
          w-screen 
          flex flex-col md:flex-row items-center gap-5 py-15 md:pl-20
          text-gray-900 dark:text-gray-100
          bg-gray-50 dark:bg-gray-800
        "
      >
        <Image
          className="rounded-full"
          src="/angie-pic.JPG"
          width={100}
          height={100}
          alt="Picture of the author"
        />
        <div className="flex flex-col justify-start text-center md:text-left">
          <span className="font-bold text-lg">
            Turhan Kimbrough
          </span>
          <span>
            Photographer
          </span>
        </div>
      </div>
      <div>World</div>
    </div>
  );
}
export default Photography;