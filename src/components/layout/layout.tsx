import Head from "next/head";
import styles from "./layout.module.css";
import utilStyles from "../../styles/utils.module.css";
import Link from "next/link";
import React from "react";
import Header from "./header";

const name = "Terence Tian";
export const siteTitle = "Terence's Blog";

export default function Layout({ children, home }: { children: React.ReactNode; home?: boolean }) {
  return (
    <div className={styles.container}>
      <Head>
        <link rel="icon" href="/images/favicon.ico" />
        <meta name="description" content="Terence Tian's blog" />
        <title />
      </Head>
      <header className={styles.header} >
        {Header({
          name,
          profileHeight: 50,
          profileWidth: 50,
          titleSize: utilStyles.headingLg,
        })}
      </header>
      <main>{children}</main>
      {!home && (
        <div className={styles.backToHome}>
          <Link href="/">
            <a>← Back to home</a>
          </Link>
        </div>
      )}
    </div>
  );
}
