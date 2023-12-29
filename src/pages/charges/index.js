import Head from "next/head";

import ChargesContainer from "@/components/charge-list/container";

export default function Charges() {
  return (
    <>
      <Head>
        <title>Charges List</title>
      </Head>
      <ChargesContainer />
    </>
  );
}
