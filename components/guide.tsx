import Image from "next/image";

const Guide = () => {
  return (
    <section className="flexCenter flex-col max-container padding-container">
      <div className=" w-full pb-24">
        <Image src="/camp.svg" alt="camp" width={50} height={50} />
        <p className="Uppercase regular-18 -mt-1 mb-2 lg:mb-4 text-green-50">
          We are here for you
        </p>
      </div>
      <div className="flex flex-wrap w-full justify-between items-center gap-5 lg:gap-10">
        <h2 className="bold-40 lg:bold-64 xl:max-w-[390px]">
          Guide You to Easy Path
        </h2>
        <p className="regular-16 text-gray-30 xl:max-w-[520px]">
          Only with the hilink application you will no longer get lost and get
          lost again, because we already support offline maps when there is no
          internet connection in the field. Invite your friends, relatives and
          friends to have fun in the wilderness through the valley and reach the
          top of the mountain
        </p>
      </div>

      <div className="max-container w-full my-20 flexCenter relative">
        <Image
          src="/boat.png"
          alt="boat"
          height={580}
          width={1440}
          className="w-full object-cover object-center rounded-2xl "
        />
        <div className="absolute flex bg-white py-8 pl-5 pr-7 gap-3 rounded-3xl border shadow-md md:left-[5%] lg:top-20 ">
          <Image
            src="/meter.svg"
            alt="meter"
            width={16}
            height={158}
            className="h-full w-auto"
          />
          <div className="flexBetween flex-col ">
            <div className="flex flex-col w-full">
              <div className="flexBetween w-full">
                <p className="regular-16 text-gray-50">Destination</p>
                <p className="regular-16 text-green-50">48 min</p>
              </div>
              <p className="bold-20 mt-2">Aguas Calientes</p>
            </div>
            <div className="flex flex-col w-full ">
              <p className="regular-16 text-gray-50">Start track</p>
              <p className="bold-20 mt-2">Wonorejo Pasuruan</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Guide;
