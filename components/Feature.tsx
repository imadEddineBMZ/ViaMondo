import React from "react";
import Image from "next/image";
import { FEATURES } from "@/constants";

type FeatureItemProps = {
  title: string;
  icon: string;
  variant: "green" | "orange";
  description: string;
};

const FeatureItem = ({
  title,
  icon,
  variant,
  description,
}: FeatureItemProps) => {
  return (
    <li key={title} className="flex flex-col items-start flex-1 w-full">
      <div className="rounded-full p-4 lg:p-7 bg-green-50">
        <Image src={icon} alt={title} width={28} height={28}/>
      </div>
      <h2 className="bold-20">{title}</h2>
      <p className="regular-16 text-gray-50 md:max-w-[400px]">{description}</p>
    </li>
  );
};

const Feature = () => {
  return (
    <section className="max-conatiner padding-container relative border-2 border-red-500 overflow-hidden bg-feature-bg bg-cover bg-center">
      <div className="flex flex-col items-center gap-1 mb-5">
        <Image src="/camp.svg" alt="camp" width={50} height={50} />
        <h2 className="bold-32">Our Features</h2>
      </div>
      <div className="flex flex-col items-center md:flex-row gap-10 md:gap-20 lg:gap-32 relative">
        <div className="relative lg:flex-1 lg:min-h-[900px] flex justify-center items-center">
          <Image
            src="/phone.png"
            alt="camp"
            width={400}
            height={900}
            className="lg:block hidden rotate-[10deg] z-10 object-contain"
          />
        </div>
        <ul className="lg:flex-1 md:grid md:grid-cols-2 gap-10 lg:gap-20 w-full flex flex-col">
          {FEATURES.map((feature) => (
            <FeatureItem
              key={feature.title}
              title={feature.title}
              icon={feature.icon}
              variant={"green"}
              description={feature.description}
            />
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Feature;
