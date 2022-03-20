import Head from "next/head";
import Layout, { siteTitle } from "../components/layout/layout";
import { getSortedPostsData } from "../lib/posts";
import { GetStaticProps } from "next";
import BlogContainer from "../components/blogContainer/blogContainer";
import {BlogListDataType} from "../components/blogContainer/blogList";

export const getStaticProps: GetStaticProps = async () => {
  const blogListData = getSortedPostsData();
  return { props: { blogListData } };
};

export default function Home({ blogListData }: { blogListData: BlogListDataType }) {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <BlogContainer blogContainerData={blogListData} home />
    </Layout>
  );
}
