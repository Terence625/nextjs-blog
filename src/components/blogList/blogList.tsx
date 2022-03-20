import utilStyles from "../../styles/utils.module.css";
import Link from "next/link";
import Date from "../date/date";

export default function BlogList({allBlogsData}: {
  allBlogsData: Array<{
    date: string;
    title: string;
    id: string;
  }>;
}) {
  return (
    <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
      <h2 className={utilStyles.headingLg}>Blog</h2>
      <ul className={utilStyles.list}>
        {allBlogsData.map(({ id, date, title }) => (
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
    </section>
  )
}