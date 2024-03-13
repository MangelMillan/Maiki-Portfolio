import { Socials } from "@/constants";
import Image from "next/image";
import React from "react";

export const Navbar = () => {
  return (
    <div className="w-full h-[65px] fixed top-0 shadow-[#2A0E61]/50 bg-[#0300140c] backdrop-blur-md z-50 px-10">
      <div className="w-full h-full flex flex-row items-center justify-between m-auto px-[10px]">
        <a href="/" className="h-auto w-auto flex flex-row items-center ">
          <Image
            src={"/NavLogo.png"}
            alt="logo"
            width={50}
            height={50}
            className="cursor-pointer hover:animate-slowspin"
          />
          <span className="font-bold ml-[10px] hidden md:block text-gray-300 hover:text-yellow-100">
            Maikī
          </span>
        </a>
        <div className="w-[500px] h-full flex flex-row items-center justify-between md:mr-20">
          <div className="flex items-center justify-between w-full h-auto border border-[#7042f800]  bg-[#03001400] mr-[15px] px-[20px] py-[10px] rounded-lg text-gray-200">
            <a
              href="#about-me"
              className="cursor-pointer font-medium hover:text-yellow-200"
            >
              About me
            </a>
            <a
              href="#skills"
              className="cursor-pointer font-medium hover:text-yellow-200"
            >
              Skills
            </a>
            <a
              href="#projects"
              className="cursor-pointer font-medium hover:text-yellow-200"
            >
              Projects
            </a>
          </div>
        </div>

        <div className="flex flex-row gap-5">
          {Socials.map(
            (
              social,
              index // Agrega un segundo parámetro "index" en el mapeo
            ) => (
              <a key={index} target={social.target} href={social.href}>
                {" "}
                {/* Usa el "index" como "key" */}
                <Image
                  src={social.src}
                  alt={social.name}
                  width={24}
                  height={24}
                />
              </a>
            )
          )}
        </div>
      </div>
    </div>
  );
};
export default Navbar;
