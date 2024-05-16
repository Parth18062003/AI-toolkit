"use client";
import React from "react";
import { TbBrandInstagram } from "react-icons/tb";
import { TbBrandLinkedin } from "react-icons/tb";
import { BiLogoGithub } from "react-icons/bi";
import Link from "next/link";
import { useUser } from "@clerk/nextjs";

const Footer = () => {
  const { isSignedIn } = useUser();
  return (
    <>
      <footer className="bg-gradient-to-br dark:from-white/20 dark:to-white/5 from-black/20 to-black/5">
        <div className="mx-auto max-w-3xl py-8">
          <div className="flex justify-center">
            <div className="text-black dark:text-white text-3xl">HorizonAI</div>
          </div>

          <ul className="translate-y-6 flex flex-wrap justify-center flex-col sm:flex-row gap-4 text-center md:gap-8 lg:gap-10">
            <li>
              <Link
                href={!isSignedIn ? "/sign-in" : "/profile"}
                className="text-gray-700 transition hover:text-gray-700/75 dark:text-white dark:hover:text-white/75"
              >
                Generate Text
              </Link>
            </li>

            <li>
              <Link
                href={!isSignedIn ? "/sign-in" : "/upload"}
                className="text-gray-700 transition hover:text-gray-700/75 dark:text-white dark:hover:text-white/75"
              >
                Generate Image 
              </Link> 
            </li>

            <li>
              <Link
                href={!isSignedIn ? "/sign-in" : "/my-files"}
                className="text-gray-700 transition hover:text-gray-700/75 dark:text-white dark:hover:text-white/75"
              >
                Generate Video
              </Link>
            </li>

            <li>
              <Link
                href={!isSignedIn ? "/sign-in" : "/my-files"}
                className="text-gray-700 transition hover:text-gray-700/75 dark:text-white dark:hover:text-white/75"
              >
                Generate Audio
              </Link>
            </li>

            <li>
              <Link
                href={!isSignedIn ? "/sign-in" : "/my-files"}
                className="text-gray-700 transition hover:text-gray-700/75 dark:text-white dark:hover:text-white/75"
              >
                Generate Code
              </Link>
            </li>
          </ul>

          <ul className="mt-12 flex justify-center gap-6 md:gap-8">
            <li>
              <a href="https://www.instagram.com/" target="_blank">
                <span className="sr-only">Instagram</span>
                <TbBrandInstagram className="h-8 w-8 text-black dark:text-white" />
              </a>
            </li>

            <li>
              <a
                href="https://www.linkedin.com/in/parth-kadam-7b27a2224/"
                target="_blank"
              >
                <span className="sr-only">Linkedin</span>
                <TbBrandLinkedin className="h-8 w-8 text-black dark:text-white" />
              </a>
            </li>

            <li>
              <a
                href="https://github.com/Parth18062003/Blockchain_Storage"
                target="_blank"
              >
                <span className="sr-only">GitHub</span>
                <BiLogoGithub className="h-8 w-8 text-black dark:text-white" />
              </a>
            </li>
          </ul>
        </div>
      </footer>
    </>
  );
};

export default Footer;
