import React from 'react'
import Image from 'next/image'
import { FEATURES }from '@/constants'

type FeatureItemProps = {
    title: string;
    icon: string;
    variant: "green" | "orange";
    description: string;
}

const FeatureItem = ({title, icon, variant, description} :
    FeatureItemProps
    ) => {

        return(
            <li key={title} className='flex flex-col gap-3 md:gap-5'>
                <div className='rounded-3xl p-4 w-10 bg-green-50'>
                    <Image
                        src={icon}
                        alt={title}
                        width={50}
                        height={50}
                    />
                </div>
                <h2 className='bold-20'>{title}</h2>
                <p className='regular-16 text-gray-50 '>{description}</p>
            </li>
        )
}

const Feature = () => {
  return (
    <section className="max-conatiner padding-container relative border-2 border-red-500 overflow-hidden bg-feature-bg bg-cover bg-center h-screen ">
       <div className='flex flex-col items-center gap-1 mb-5'>
        <Image
            src="/camp.svg"
            alt="camp"
            width={50}
            height={50}
        />
        <h2 className='bold-32'>Our Features</h2>
       </div>
       <div className='flex flex-col items-start md:flex-row gap-10 md:gap-20 lg:gap-32'>
        <Image
            src="/phone.png"
            alt="camp"
            width={400}
            height={900}
            className='feature-phone'
        />
        <ul>
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
  )
}

export default Feature