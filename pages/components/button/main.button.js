import Image from "next/image";
import React from "react";

export default function MainButton({ text, icon }) {
  return (
    <>
      <button className="py-2 px-4 bg-accent50 rounded-lg flex items-center gap-2">
        <Image alt="" src={icon} width={20} height={20} />
        <span className="font-semibold text-2xl">{text}</span>
      </button>
    </>
  );
}
