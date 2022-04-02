import Layout from "../components/layout/layout";
import Head from "next/head";
import HomeContainer from "../components/homeContainer/homeContainer";

export default function Home() {
  return (
    <Layout>
      <Head>
        <title>Terence's home</title>
      </Head>
      <HomeContainer />
    </Layout>
  );
}
