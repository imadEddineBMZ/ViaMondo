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
    const bgColor = variant === "green" ? "bg-green-50" : "bg-orange-50";

    return (
        <li key={title} className="flex flex-col items-start flex-1 w-full">
        <div className={`rounded-full p-4 md:p-[22px] lg:p-7 ${bgColor}`}>
            <Image src={icon} alt={title} width={28} height={28}/>
        </div>
        <h2 className="bold-20">{title}</h2>
        <p className="regular-16 text-gray-50 md:max-w-[400px]">{description}</p>
        </li>
    );
};

const Feature = () => {
  return (
    <section className="max-container padding-container border-2 border-red-500 bg-feature-bg bg-center bg-cover ">
        <div className="flex flex-col items-center gap-1">
            <Image
                src="/camp.svg"
                alt="camp"
                width={50}
                height={50}
            />
            <h2 className="bold-32">Our Features</h2>
        </div>
        <div className="flex flex-col md:flex-row items-start md:items-center gap-10 mt-10">
            <div className="md:flex-1 flexCenter md:min-h-[900px]">
                <Image
                    src="/phone.png"
                    alt="camp"
                    width={400} 
                    height={900}
                    className="md:block hidden rotate-[10deg] object-contain"
                />
            </div>
            <ul className="md:flex-1 md:grid md:grid-cols-2 gap-10 lg:gap-20 w-full flex flex-col">
                {FEATURES.map((feature) => (
                    <FeatureItem 
                        key={feature.title}
                        title={feature.title}
                        icon={feature.icon}
                        variant={feature.variant as "green" | "orange"}
                        description={feature.description}
                    />
                ))}
            </ul>
        </div>

    </section>
  );
};

export default Feature;
