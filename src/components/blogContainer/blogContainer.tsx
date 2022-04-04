import styles from "./blogContainer.module.css";
import BlogList, { BlogListDataType } from "./blogList";
import BlogContent, { BlogContentDataType } from "./blogContent";

export default function BlogContainer({
  blogContainerData,
  home,
}: {
  blogContainerData: BlogListDataType | BlogContentDataType;
  home?: boolean;
}) {
  return (
    <section className={styles.blogContainer}>
      {home ? (
        <BlogList blogListData={blogContainerData as BlogListDataType} />
      ) : (
        <BlogContent blogContentData={blogContainerData as BlogContentDataType} />
      )}
    </section>
  );
}
