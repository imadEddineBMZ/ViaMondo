import Image from "next/image";
import { PEOPLE_URL } from "@/constants";

interface camProps {
  path: string;
  title: string;
  description: string;
  number: string;
}

const CampSite = ({ path, title, description, number }: camProps) => {
  return (
    <div
      className={`relative w-[80vw] h-full min-w-[800px] flex-shrink-0 ${path} bg-cover bg-center bg-no-repeat rounded-3xl `}
    >
      <div className="flex flex-col h-full justify-between items-start p-6 lg:px-20 lg:py-10">
        <div className="flexCenter gap-4">
          <div className="rounded-full bg-green-50 p-4">
            <Image src="/folded-map.svg" alt="map" width={24} height={24} />
          </div>
          <div className="flex flex-col gap-1">
            <h4 className="regular-16 bold-20 text-white">{title}</h4>
            <p className="regular-14 text-white">{description}</p>
          </div>
        </div>
        <div className=" flexCenter gap-3">
          <span className="flex -space-x-4 overflow-hidden">
            {PEOPLE_URL.map((url) => (
              <Image
                key={url}
                src={url}
                alt="person"
                width={52}
                height={52}
                className="rounded-full h-10 w-10"
              />
            ))}
          </span>
          <p className="bold-20 text-white">+{number}</p>
        </div>
      </div>
    </div>
  );
};

const Camp = () => {
  return (
    <section
      className="relative max-container padding-container flex flex-col 
    py-10 lg:py-20 xl:mb-20"
    >
      <div
        className="hide-scrollbar flex h-[340px] w-full items-start justify-start gap-5 overflow-x-auto
      lg:h-[400px] xl:h-[540px] "
      >
        <CampSite
          path="bg-bg-img-1"
          title="Putuk Truno Camp"
          description="Prigen, Pasuruan"
          number="50+ Joined"
        />
        <CampSite
          path="bg-bg-img-2"
          title="Mountain View Camp"
          description="Somewhere else"
          number="30+ Joined"
        />
      </div>
      <div className="flexEnd mt-10 lg:-mt-20 lg:mr-6">
        <div
          className="bg-green-50 p-8 lg:max-w-[500px] relative w-full overflow-hidden 
        rounded-3xl"
        >
          <h2 className="regular-24 md:regular-32 capitalize text-white">
            <strong>Feeling Lost</strong> And Not Knowing way?
          </h2>
          <p className="regular-16 mt-4 text-white">
            ng from the anxiety of the climbers when visiting a new climbing
            location, the possibility of getting lost is very large. That's why
            we are here for those of you who want to start an adventure
          </p>
          <Image
            src="/quote.svg"
            alt="camp-2"
            width={186}
            height={219}
            className="camp-quote"
          />
        </div>
      </div>
    </section>
  );
};

export default Camp;
