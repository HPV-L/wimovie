import Image from "next/image";
import React from "react";

const Avatar = () => {
  return (
    <div
      className="
        py-4
        px-1
        flex 
        justify-center
        items-center
        cursor-pointer
        
      "
    >
      <Image
        width={50}
        height={50}
        src={
          "https://res.cloudinary.com/dxa8ks06k/image/upload/v1687592990/odmrszp6pigud1h7pkkr.jpg" ||
          "/images/placeholder.jpg"
        }
        alt="Avatar"
        className="rounded-full object-cover w-9 h-9 focus:outline-none 
        focus:ring-2
        focus:ring-indigo-500 
        focus:ring-offset-2"
      />
    </div>
  );
};

export default Avatar;
