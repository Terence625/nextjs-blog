import Layout from "../../components/layout/layout";
import Head from "next/head";
import ToolContainer from "../../components/toolContainer/toolContainer";

export default function Tools() {
  return (
    <Layout>
      <Head>
        <title>{"Terence's tools"}</title>
      </Head>
      <ToolContainer />
    </Layout>
  );
}
