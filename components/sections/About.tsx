import Image from "next/image";

export const About = () => {
  return (
    <section
      id="about"
      className="min-h-screen flex flex-col justify-center items-center px-5 dark:bg-gray-900"
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-5xl">
        <div className="flex flex-col justify-center items-center text-gray-600 dark:text-gray-300"> {/* dark:bg-gray-800 p-6 rounded-xl shadow-sm border-1 */}
          <h1 className="text-4xl font-semibold py-3 text-gray-700 dark:text-gray-200">
            About Me
          </h1>
          <div className="text-xl py-5 text-gray-600 dark:text-gray-300">
            <p>
              I'm Turhan Kimbrough, a software engineer with a Master’s in Computer Science from Towson University, where I first discovered my passion for deep learning. <br/><br/>
              
               During graduate school, I published multiple research papers in top venues like IEEE. <br/><br/> 
               
               While working with the Department of Defense, I began focusing on generative AI, integrating advanced models to support real-time decision-making for soldiers in the field. <br/><br/>
               
               Today, I continue to build products that push the boundaries of what AI can do.</p>
          </div>
        </div>
        <div className="bg-black">
          <Image
            src="/angie-pic.JPG"
            width={500}
            height={500}
            alt="Picture of the author"
          />
        </div>
      </div>
    </section>
  );
}