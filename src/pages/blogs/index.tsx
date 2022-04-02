import Head from "next/head";
import Layout from "../../components/layout/layout";
import { getSortedPostsData } from "../../lib/posts";
import { GetStaticProps } from "next";
import BlogContainer from "../../components/blogContainer/blogContainer";
import {BlogListDataType} from "../../components/blogContainer/blogList";

export const getStaticProps: GetStaticProps = async () => {
  const blogListData = getSortedPostsData();
  return { props: { blogListData } };
};

export default function Blogs({ blogListData }: { blogListData: BlogListDataType }) {
  return (
    <Layout>
      <Head>
        <title>Terence's blogs</title>
      </Head>
      <BlogContainer blogContainerData={blogListData} home />
    </Layout>
  );
}
