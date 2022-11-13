import classNames from "classnames";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import MainButton from "../../components/button/main.button";

function ComponentHeader() {
  const [onHover, setOnHover] = React.useState(0);
  return (
    <div className="w-full font-poppins bg-accent h-[100px] flex justify-between px-20 fixed ">
      <div className="h-auto flex items-center">
        <Link href={"/"}>
          <Image alt="" src="/images/logo.svg" height={71} width={217} />
        </Link>
      </div>
      <div className="h-full hidden lg:flex justify-between items-center gap-12 text-2xl text-black ">
        <Link
          href="/"
          className={"relative"}
          onMouseEnter={() => setOnHover(1)}
          onMouseLeave={() => setOnHover(0)}
        >
          Beranda
          <div
            className={classNames(
              "opacity-0 bg-accent50 rounded-full w-full h-[3px] absolute -bottom-1",
              onHover === 1 ? "opacity-100 transition-opacity" : "opacity-0"
            )}
          ></div>
        </Link>
        <Link
          href="/portofolio"
          className={"relative"}
          onMouseEnter={() => setOnHover(2)}
          onMouseLeave={() => setOnHover(0)}
        >
          Portofolio
          <div
            className={classNames(
              "opacity-0 bg-accent50 rounded-full w-full h-[3px] absolute -bottom-1",
              onHover === 2 ? "opacity-100 transition-opacity" : "opacity-0"
            )}
          ></div>
        </Link>
        <Link
          href="/tentang"
          className={"relative"}
          onMouseEnter={() => setOnHover(3)}
          onMouseLeave={() => setOnHover(0)}
        >
          Tentang
          <div
            className={classNames(
              "opacity-0 bg-accent50 rounded-full w-full h-[3px] absolute -bottom-1",
              onHover === 3 ? "opacity-100 transition-opacity" : "opacity-0"
            )}
          ></div>
        </Link>
        <Link
          href="/kontak"
          className={"relative"}
          onMouseEnter={() => setOnHover(4)}
          onMouseLeave={() => setOnHover(0)}
        >
          Contact Us
          <div
            className={classNames(
              "opacity-0 bg-accent50 rounded-full w-full h-[3px] absolute -bottom-1",
              onHover === 4 ? "opacity-100 transition-opacity" : "opacity-0"
            )}
          ></div>
        </Link>
        <MainButton text={"Daftar"} icon={"/icons/icon-user.svg"} />
      </div>
    </div>
  );
}

export default ComponentHeader;
