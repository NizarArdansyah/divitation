import Head from "next/head";
import Header from "components/componentHeader.js"
import Image from "next/image";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Divitation</title>
        <meta name="description" content="Web App Digital Invitation" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="grid place-content-center h-screen">
        <h1 className="text-4xl font-bold">Divitation</h1>
        <small className="italic text-red-700 text-center">Home Page</small>
      </div>
      <Header></Header>
    </div>
  );
}
