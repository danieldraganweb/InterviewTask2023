import Head from "next/head";
// import Image from "next/image";
// import backround from "../public/IMG/background.jpg";
import styles from "../styles/Home.module.css";
import Warehouse from "../components/warehouse";

export default function Home() {
  return (
    <>
      <Head>
        <title>Zenith Warehouse</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        {/* <div className={styles.background}>
          <Image src={backround} alt="HOMEDESIGN" fill />
        </div> */}
        <Warehouse />
      </main>
    </>
  );
}
