import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import ComponentHeader from "./components/header/component.header";

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
        <div className="grid place-content-center h-screen">
          <h1 className="text-4xl font-bold">Divitation</h1>
          <small className="italic text-red-700 text-center">Home Page</small>
        </div>
      </div>
    </>
  );
}
