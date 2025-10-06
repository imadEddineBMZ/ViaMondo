import Image from "next/image";
import Button from "./button";

const Hero = () => {
  return (
    <section
      className="relative max-container padding-container flex flex-col
    gap-20 py-10 pb-32 md:gap-28 lg:py-20 xl:flex-row"
    >
      <div className="absolute h-full w-full bg-pattern-2 bg-cover bg-center md:-right-28 xl:-top-60" />
      <div className="relative z-100 flex flex-col flex-1 xl:w-1/2">
        <Image
          src="/camp.svg"
          alt="camp"
          width={50}
          height={50}
          className="absolute left-[-5px] top-[-30px] w-10 lg:w-[50px]"
        />
        <h1 className="bold-52 lg:bold-88 mt-2">Putuk Truno Camp Area</h1>
        <p className="regular-16 mt-6 text-gray-30 xl:max-w-[520px]">
          We want to be on each of your journeys seeking the satisfaction of
          seeing the incorruptible beauty of nature. We can help you on an
          adventure around the world in just one app
        </p>
        <div className="flex gap-2 my-11">
          <div className="flex items-center gap-2">
            {Array(5)
              .fill(0)
              .map((_, i) => (
                <Image
                  key={i}
                  src="/star.svg"
                  alt="travel"
                  width={24}
                  height={24}
                  className="mb-6 max-w-[300px] lg:max-w-[500px]"
                />
              ))}
          </div>
          <p className=" lg:bold-16 text-blue-70 ">
            198k
            <span className="text-gray-50 cursor-pointer underline bold-5 ml-1">
              best reviews
            </span>
          </p>
        </div>

        <div className="flex flex-col w-full gap-3 sm:flex-row ">
          <Button type="button" text="Download app" variant="btn_green" />
          <Button
            type="button"
            icon="/play.svg"
            text="how we work"
            variant="btn_white_text"
          />
        </div>
      </div>
      <div className="relative flex flex-1 items-start">
        <div className="relative flex flex-col gap-8 w-[268px] py-8 px-7 bg-green-90 rounded-3xl">
          <div className="flex flex-col gap-1">
            <div className="flexBetween">
              <p className="regular-16 bold-10 text-gray-50">Location</p>
              <Image src="/close.svg" alt="location" width={24} height={24} />
            </div>
            <p className="regular-16 bold-20 text-white">guas Calientes</p>
          </div>
          <div className="flexBetween gap-4">
            <div className="flex flex-col gap-1">
              <p className="regular-16 bold-10 text-gray-50">Distance</p>
              <p className="regular-16 bold-20 text-white">173.28 mi</p>
            </div>
            <div className="flex flex-col gap-1">
              <p className="regular-16 bold-10 text-gray-50">Elevation</p>
              <p className="regular-16 bold-20 text-white">2.040 km</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;