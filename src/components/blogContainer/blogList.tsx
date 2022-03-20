import utilStyles from "../../styles/utils.module.css";
import Link from "next/link";
import Date from "../date/date";

export type BlogListDataType = Array<{
  date: string;
  title: string;
  id: string;
}>;

export default function BlogList({ blogListData }: { blogListData: BlogListDataType }) {
  return (
    <ul className={utilStyles.list}>
      {blogListData.map(({ id, date, title }) => (
        <li className={utilStyles.listItem} key={id}>
          <Link href={`/posts/${id}`}>
            <a>{title}</a>
          </Link>
          <br />
          <small className={utilStyles.lightText}>
            <Date dateString={date} />
          </small>
        </li>
      ))}
    </ul>
  );
}
