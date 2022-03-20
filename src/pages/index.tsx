import Head from "next/head";
import Layout, { siteTitle } from "../components/layout/layout";
import utilStyles from "../styles/utils.module.css";
import { getSortedPostsData } from "../lib/posts";
import Link from "next/link";
import Date from "../components/date/date";
import { GetStaticProps } from "next";
import BlogList from "../components/blogList/blogList";

export const getStaticProps: GetStaticProps = async () => {
  const allBlogsData = getSortedPostsData();
  return {
    props: { allBlogsData },
  };
};

export default function Home({
  allBlogsData,
}: {
  allBlogsData: Array<{
    date: string;
    title: string;
    id: string;
  }>;
}) {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <BlogList allBlogsData={allBlogsData} />
    </Layout>
  );
}
