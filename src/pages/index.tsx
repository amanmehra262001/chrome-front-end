import Head from "next/head";
import Image from "next/image";
import { realTimeDatabase as rdb } from "@/config/firebase-config";
import { useEffect, useState } from "react";
import { onValue, ref } from "firebase/database";

export default function Home() {
  const [data, setData] = useState<any>(null);

  const fetchData = async () => {
    // const dataRef = ref(rdb, "uploads/-NNovLsFxN3RuIhqmIKO");
    const dataRef = ref(rdb, "uploads/-NNovLsFxN3RuIhqmIKO");
    try {
      onValue(dataRef, (snapshot) => {
        const data = snapshot?.val();
        console.log(data);
        setData(data);
      });
    } catch (error) {
      console.log("error in fetching data:", error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);
  return (
    <>
      <Head>
        <title>Chrome OTT</title>
        <meta name="description" content="Chrome OTT front end" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        {data &&
          Object.keys(data?.images).map((key) => (
            <Image
              width={100}
              height={100}
              src={data?.images[key]}
              alt="Picture of the Screenshot"
            />
          ))}
      </main>
    </>
  );
}
