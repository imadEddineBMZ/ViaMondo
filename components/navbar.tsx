import Link from "next/link";
import Image from "next/image";
import { NAV_LINKS } from "@/constants";
import Button from "./button";

const Navbar = () => {
  return (
    <nav className="flexBetween max-container padding-container relative z-30 py-5 ">
      <Link href={"/"}>
        <Image src="/hilink-logo.svg" alt="logo" width={74} height={29} />
      </Link>

      <ul className="hidden h-full gap-12 lg:flex">
        {NAV_LINKS.map((link) => (
          <Link
            href={link.href}
            key={link.key}
            className="regular-16 text-gray-50 hover:font-bold transition-all pb-1.5"
          >
            {link.label}
          </Link>
        ))}
      </ul>

      <div className="hidden lg:flexCenter text-gray-50">
        <Button
          type="button"
          icon="/calendar.svg"
          text="Get Started"
          variant="btn_dark_green"
        />
      </div>

      <Image
        src="/menu.svg"
        alt="menu"
        width={32}
        height={32}
        className="cursor-pointer lg:hidden"
      />
    </nav>
  );
};

export default Navbar;
