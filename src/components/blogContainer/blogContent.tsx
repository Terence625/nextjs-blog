import utilStyles from "../../styles/utils.module.css";
import Date from "../date/date";
import styles from "./blogContainer.module.css";
import Link from "next/link";
import React from "react";

export type BlogContentDataType = {
  title: string;
  date: string;
  contentHtml: string;
};

export default function BlogContent({ blogContentData }: { blogContentData: BlogContentDataType }) {
  return (
    <article>
      <h1 className={utilStyles.headingXl}>{blogContentData.title}</h1>
      <div className={utilStyles.lightText}>
        <Date dateString={blogContentData.date} />
      </div>
      <div dangerouslySetInnerHTML={{ __html: blogContentData.contentHtml }} />
      <div className={styles.backToHome}>
        <Link href="/blogs">
          <a>← Back</a>
        </Link>
      </div>
    </article>
  );
}
