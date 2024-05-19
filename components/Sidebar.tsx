"use client";

import Link from "next/link";
import React from "react";
import { FaImages } from "react-icons/fa";
import { IoMdChatbubbles } from "react-icons/io";
import { MdAudiotrack } from "react-icons/md";
import { TbCode, TbUserFilled, TbVideo } from "react-icons/tb";

const links = [
  {
    href: "/horizon/text",
    label: "Conversation",
    icon: <IoMdChatbubbles className="h-5 w-5 mr-3" />,
  },
  {
    href: "/horizon/image",
    label: "Image",
    icon: <FaImages className="h-5 w-5 mr-3" />,
  },
  {
    href: "/horizon/audio",
    label: "Audio",
    icon: <MdAudiotrack className="h-5 w-5 mr-3" />,
  },
  {
    href: "/horizon/video",
    label: "Video",
    icon: <TbVideo className="h-5 w-5 mr-3" />,
  },
  {
    href: "/horizon/code",
    label: "Code",
    icon: <TbCode className="h-5 w-5 mr-3" />,
  },
  {
    href: '/user-profile',
    label: 'Profile',
    icon: <TbUserFilled className='h-5 w-5 mr-3' />
  }
];

const Sidebar = () => {
  return (
    <div className="space-y-4 py-4 flex flex-col h-full fixed">
      <div className="px-3 py-2 flex-1">
        <h2 className="font-semibold text-2xl text-neutral-800 dark:text-neutral-200">
          Models
        </h2>
        <div className="space-y-1">
          {links.map((link) => (
            <Link href={link.href} key={link.href}>
              <div className="flex items-center w-full group p-3 font-medium text-lg text-neutral-800 dark:text-neutral-200 hover:text-neutral-950 dark:hover:text-neutral-50 hover:bg-black/10 dark:hover:bg-white/10 rounded-lg transition">
                {link.icon}
                {link.label}
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
