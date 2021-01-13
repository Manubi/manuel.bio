import Head from "next/head";
import Container from "../components/container";
import Intro from "../components/intro";
import Layout from "../components/layout";

const Index = () => {
  return (
    <>
      <Layout>
        <Head>
          <title>Manuel Bichler</title>
        </Head>
        <Container>
          <Intro />
        </Container>
      </Layout>
    </>
  );
};

export default Index;
