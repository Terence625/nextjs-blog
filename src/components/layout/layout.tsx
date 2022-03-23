import Head from "next/head";
import styles from "./layout.module.css";
import React from "react";
import Navbar from "./navbar";

export const siteTitle = "Terence's Blog";

export default function Layout({ children, home }: { children: React.ReactNode; home?: boolean }) {
  return (
    <div className="page-container">
      <Head>
        <link rel="icon" href="/images/favicon.ico" />
        <meta name="description" content="Terence Tian's blog" />
        <title />
      </Head>
      <header className={styles.header}>
        <div className={styles.div}>
          <Navbar />
        </div>
      </header>
      <main>{children}</main>
    </div>
  );
}
