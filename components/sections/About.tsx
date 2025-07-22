import Image from "next/image";

export const About = () => {
  return (
    <section
      id="about"
      className="min-h-screen flex flex-col justify-center items-center px-5 dark:bg-gray-900"
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-5xl">
        <div className="flex flex-col justify-center items-center text-gray-600 dark:text-gray-300">
          <h1 className="text-4xl font-semibold py-3 text-gray-700 dark:text-gray-200">
            About Me
          </h1>
          <div className="text-xl py-5 text-gray-600 dark:text-gray-300">
            <p> Greetings! </p>
            <br />
            <p> I'm Turhan Kimbrough, a software engineer who graduated from Towson University with a Master's/Bachelor's in Computer Science. </p>
            <br />
            <p> During graduate school, I learned about artificial intelligence technology and have published several research articles through prestigious venues such as IEEE. </p>
            <br />
            <p> Later, I learned about generative AI technology which has led me here today as an AI Engineer.</p>
          </div>
        </div>
        <div className="bg-black dark:bg-white ">
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