import Link from "next/link";
import React from "react";

function ComponentHeader() {
  return (
    <div className="bg-slate-600 text-white flex justify-center items-center gap-6 h-[100px]">
      <a>
        <Link href="/">Home</Link>
      </a>
      <a>
        <Link href="/blog">Blog</Link>
      </a>
      <a>
        <Link href="/contact">contact</Link>
      </a>
    </div>
  );
}

export default ComponentHeader;
