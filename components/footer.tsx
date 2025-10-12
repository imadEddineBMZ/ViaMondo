import Link from "next/link";
import Image from "next/image";
import { FOOTER_CONTACT_INFO } from "@/constants";
import { FOOTER_LINKS } from "@/constants";
import { SOCIALS } from "@/constants";
const Footer = () => {
  return (
    <footer className="flexCenter mt-12 ">
      <div className="max-conatiner padding-container w-full flex flex-col gap-14 ">
        <div className="flex flex-col items-start justify-center gap-[10%] md:flex-row">
          <Link href={"/"}>
            <Image
              src={"/hilink-logo.svg"}
              alt="Hilink Logo"
              width={74}
              height={30}
              className="object-contain"
            />
          </Link>
          <div className="flex gap-10 sm:justify-between md:flex-1">
            {FOOTER_LINKS.map((section) => (
              <div key={section.title} className="flex flex-col gap-5 ">
                <h2 className="bold-18 whitespace-nowrap">{section.title}</h2>
                <ul className="flex flex-col gap-4 regular-14 text-gray-30">
                  {section.links.map((link) => (
                    <Link href="/" key={link}>
                      {link}
                    </Link>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <div className="flex flex-col gap-5">
            
            <h2 className="bold-18 whitespace-nowrap">
              {FOOTER_CONTACT_INFO.title}
            </h2>
            <ul className="flex flex-col gap-4 regular-14 text-gray-30">
              {FOOTER_CONTACT_INFO.links.map((link) => (
                <Link
                  href="/"
                  key={link.label}
                  className="flex gap-4 md:flex-col lg:flex-row"
                >
                  <p className="whitespace-nowrap">{link.label}:</p>
                  <p className="medium-14 whitespace-nowrap text-blue-70">
                    {link.value}
                  </p>
                </Link>
              ))}
            </ul>
          </div>
          <div className="flex flex-col gap-5">
            <h2 className="bold-18 whitespace-nowrap">{SOCIALS.title}</h2>
            <ul className="flex flex-col gap-4 regular-14 text-gray-30">
              {SOCIALS.links.map((link) => (
                <li key={link}>
                  <Link href={link}>
                    <Image
                      src={link}
                      alt={"jsp"}
                      width={24}
                      height={24}
                      className="object-contain"
                    />
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
