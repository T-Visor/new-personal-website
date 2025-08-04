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
          flex items-center gap-10 p-15
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
        <div className="flex flex-col items-center justify-center">
          Photo Gallery
        </div>
      </div>
      <div>World</div>
    </div>
  );
}
export default Photography;