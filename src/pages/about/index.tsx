import Layout from "../../components/layout/layout";
import Head from "next/head";
import AboutContainer from "../../components/aboutContainer/aboutContainer";

export default function About() {
  return (
    <Layout>
      <Head>
        <title>{"Terence's about"}</title>
      </Head>
      <AboutContainer />
    </Layout>
  );
}