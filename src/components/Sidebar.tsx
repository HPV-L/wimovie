"use client";
import React, { FC, useMemo } from "react";
import { usePathname } from "next/navigation";
import { LuHome, LuFilm, LuHeart, LuSettings } from "react-icons/lu";
import Box from "./Box";
import SidebarItem from "./SidebarItem";
import Image from "next/image";
import Avatar from "./Avatar";

type Props = {
  children: React.ReactNode;
};

const Sidebar: FC<Props> = ({ children }) => {
  const pathname = usePathname();
  const routes = useMemo(
    () => [
      {
        label: "Home",
        icon: LuHome,
        active: pathname === "/",
        href: "/",
      },
      {
        label: "Movies",
        icon: LuFilm,
        active: pathname === "/movies",
        href: "/movies",
      },
      {
        label: "Liked",
        icon: LuHeart,
        active: pathname === "/liked",
        href: "/liked",
      },
      {
        label: "Settings",
        icon: LuSettings,
        active: pathname === "/settings",
        href: "/settings",
      },
    ],
    [pathname]
  );
  return (
    <div className="flex h-full">
      <div>
        <Box className="overflow-y-auto h-full">
        <Avatar/>
          <div className="flex flex-col gap-y-6 px-5 py-4">
            {routes.map((item) => (
              <SidebarItem key={item.label} {...item} />
            ))}
          </div>
        </Box>
      </div>
      <main className="h-full flex-1 overflow-y-auto py-2">{children}</main>
    </div>
  );
};

export default Sidebar;