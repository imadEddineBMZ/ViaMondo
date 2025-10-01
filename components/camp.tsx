import Image from "next/image"


interface camProps {
    path : string ,
    title : string ,
    description : string,
    number :  string , 
}

const campSite = ({path, title, description, number} : camProps) => {
    return (
        <div className={`relative w-full h-full min-w-[1100px] ${path} bg-cover bg-center bg-norepeat rounded-3xl border-2 border-blue-500`}>
            <div className="flex flex-col justify-between items-start border-2 border-green-500 p-6 lg:px-20 lg:py-10">
                <div className="flexCenter gap-4">
                    <div className="rounded-full bg-green-50 p-4">
                        <Image
                            src="/folded-map.svg"
                            alt="map"
                            width={24}
                            height={24}
                        />
                    </div>
                    <div className="flex flex-col gap-1">
                        <h4 className="regular-16 bold-20 text-white">{title}</h4>
                        <p className="regular-14 text-white">{description}</p>
                    </div>
                </div>
                <div className="">

                </div>
            </div>
        </div>
    )
}

const Camp = () => {
  return (
    <section className='relative max-container padding-container flex flex-col border-2 border-red-500
    py-10 lg:py-20 xl:mb-20'>
        <div className='hide-scrollbar flex h-[340px] w-full items-start juistify-start gap-5 overflow-x-auto
        lg:h-[400px] xl:h-[640px] '>
            
        </div>
    </section>
  )
}

export default Camp