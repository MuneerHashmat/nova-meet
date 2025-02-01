import Image from "next/image";
import Link from "next/link";
import React from "react";
import MobileNav from "./MobileNav";

const Navbar = () => {
  return (
    <nav className="flex-between fixed z-50 w-full bg-dark-1 px-6 py-4 lg:px-10">
      <Link href="/" className="flex gap-1 items-center">
        <Image
          src="/icons/logo.svg"
          alt="logo"
          width={32}
          height={32}
          className=" max-sm:size-10"
        />
        <p className="stix-two-text text-[24px] font-bold text-blue-1 max-sm:hidden">
          NovaMeet
        </p>
      </Link>

      <div className="flex-between gap-5">
        {/* clerk */}
        <MobileNav />
      </div>
    </nav>
  );
};

export default Navbar;
