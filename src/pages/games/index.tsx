import Layout from "../../components/layout/layout";
import Head from "next/head";
import GameContainer from "../../components/gameContainer/gameContainer";

export default function Games() {
  return (
    <Layout>
      <Head>
        <title>Terence's games</title>
      </Head>
      <GameContainer />
    </Layout>
  );
}
