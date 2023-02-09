import Head from "next/head";
import Image from "next/image";
import { realTimeDatabase as rdb } from "@/config/firebase-config";
import { useEffect, useState } from "react";
import { onValue, ref } from "firebase/database";

export default function Home() {
  const [uploads, setUploads] = useState<any>({});

  useEffect(() => {
    const uploadsRef = ref(rdb, "uploads");
    try {
      onValue(uploadsRef, (snapshot) => {
        const data = snapshot?.val();
        console.log(data);
        setUploads(data);
      });
    } catch (error) {
      console.log("error in fetching upload data:", error);
    }
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
        {uploads &&
          Object.keys(uploads).map((key) => {
            return (
              <>
                <h1 style={{ marginBottom: "50px" }}>DeviceId: {key}</h1>
                {uploads[key]?.images &&
                  Object.keys(uploads[key]?.images).map((childKey) => (
                    <Image
                      width={100}
                      height={100}
                      src={uploads[key]?.images[childKey]}
                      alt="Picture of the Screenshot"
                    />
                  ))}
              </>
            );
          })}
      </main>
    </>
  );
}
