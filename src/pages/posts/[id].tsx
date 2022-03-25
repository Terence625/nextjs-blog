import Layout from "../../components/layout/layout";
import { getAllPostsIds, getPostData } from "../../lib/posts";
import Head from "next/head";
import { GetStaticPaths, GetStaticProps } from "next";
import BlogContainer from "../../components/blogContainer/blogContainer";
import {BlogContentDataType} from "../../components/blogContainer/blogContent";

export default function Post({ blogContentData }: { blogContentData: BlogContentDataType }) {
  return (
    <Layout>
      <Head>
        <title>{blogContentData.title}</title>
      </Head>
      <BlogContainer blogContainerData={blogContentData} />
    </Layout>
  );
}

//All the paths will be pre-rendered
export const getStaticPaths: GetStaticPaths = async () => {
  const paths = getAllPostsIds();
  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async ({ params}) => {
  const blogContentData = await getPostData(params?.id as string);
  return { props: { blogContentData } };
};
