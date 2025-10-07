import Button from "@/components/button";
import Image from "next/image";
const GetApp = () => {
  return (
    <section className=" flexCenter w-full flex-col ">
      <div className="max-container relative flex w-full items-center flex-col justify-between gap-32 overflow-hidden bg-green-90 bg-pattern bg-cover bg-center bg-no-repeat px-6 py-12 text-white sm:flex-row sm:gap-12 sm:py-24 lg:px-20 xl:max-h-[598px] 2xl:rounded-5xl">
        <div className="flex flex-col gap-12 items-start flex-1 ">
          <h1 className="bold-40 lg:bold-64 text-white lg:max-w-[320px]">Get for free now!</h1>
          <p className="bold-16 lg:bold-20 text-gray-10">
            Available on iOS and Android
          </p>
          <div className="flex flex-col gap-3 w-full md:flex-row whitespace-nowrap">
            <Button
              type="button"
              text="App Store"
              icon="/apple.svg"
              variant="btn_white"
              full
            />
            <Button
              type="button"
              text="Play Store"
              icon="/android.svg"
              variant="btn_dark_green_outline"
              full
            />
          </div>
        </div>
          <div className="flex flex-1 items-center justify-end">
            <Image src="/phones.png" alt="phones" width={550} height={870} />
          </div>
      </div>
    </section>
  );
};

export default GetApp;
