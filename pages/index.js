import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import MainButton from "./components/button/main.button";
import ComponentHeader from "./layouts/header/layout.header";

export default function Home() {
  return (
    <>
      {/* <ComponentHeader /> */}
      <div className="container font-poppins">
        <Head>
          <title>Divitation</title>
          <meta name="description" content="Web App Digital Invitation" />
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <ComponentHeader />
        <main className="h-screen w-full flex justify-between items-center px-20">
          <div className="flex flex-col gap-6">
            <h1 className="text-6xl font-medium ">Divitation</h1>
            <h3 className="text-3xl max-w-xl">
              Undangan digital dengan tampilan ekslusif
            </h3>
            <div className="flex gap-5">
              <MainButton
                icon={"/icons/icon-share.svg"}
                text={"Join Sekarang"}
              />
              <div className="flex">
                <Image
                  className=""
                  alt=""
                  src={"/images/circle-people-1.png"}
                  width={56}
                  height={56}
                />
                <Image
                  className="-ml-6"
                  alt=""
                  src={"/images/circle-people-2.png"}
                  width={56}
                  height={56}
                />
                <Image
                  className="-ml-6"
                  alt=""
                  src={"/images/circle-people-3.png"}
                  width={56}
                  height={56}
                />
              </div>
            </div>
          </div>
          <div className="relative mt-20 mr-20">
            <div className="absolute left-1/4 ">
              <Image alt="" src={"/images/phone.svg"} width={211} height={54} />
            </div>
            <div className="absolute right-0 bottom-2/3">
              <Image
                alt=""
                src={"/images/circle-shape.svg"}
                width={54}
                height={54}
              />
            </div>
            <Image
              className="mt-36"
              alt=""
              src={"/images/big-shape-hero.svg"}
              width={377}
              height={340}
            />
          </div>
        </main>
      </div>
    </>
  );
}
