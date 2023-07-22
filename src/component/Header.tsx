import React from "react";
import Link from "next/link";
import MenuItem from "./MenuItem";
import DarkMode from "./DarkMode";
const Header = () => {
  return (
    <>
      <div className="flex mx-2  sm:mx-auto items-center py-6">
        <div className="flex items-center space-x-5">
          <Link href="/">
            <h2 className="text-2xl">
              <span className="font-bold text-red-500 py-1 px-2 rounded-lg">
                NETFLIX
              </span>
            </h2>
          </Link>
        </div>
        <div className="flex">
          <MenuItem title={"Trang chủ"} address={"/"} />
          <MenuItem title={"Thể loại"} address={"/"} />

          <MenuItem title={"Xếp loại"} address={"/"} />

          <MenuItem title={"Bộ lọc"} address={"/"} />
        </div>
        <DarkMode />
      </div>
    </>
  );
};

export default Header;
