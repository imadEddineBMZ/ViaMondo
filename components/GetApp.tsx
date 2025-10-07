import Button from "@/components/button";
import Image from "next/image";
const GetApp = () => {
  return (
    <section className=" flexCenter w-full flex-col ">
      <div className="get-app">
        <div className="flex flex-col gap-6 ">
          <h1 className="bold-32 lg:bold-40 text-white">Get for free now!</h1>
          <p className="bold-16 lg:bold-20 text-white">
            Available on iOS and Android
          </p>
          <div className="flex flex-col gap-1 w-full md:flex-row">
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
