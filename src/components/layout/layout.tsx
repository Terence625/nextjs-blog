import Head from "next/head";
import styles from "./layout.module.css";
import React from "react";
import Navbar from "./navbar";
import Profile from "./profile";

export default function Layout({ children, home }: { children: React.ReactNode; home?: boolean }) {
  return (
    <div className="page-container">
      <Head>
        <link rel="icon" href="/images/favicon.ico" />
        <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/font-awesome/4.4.0/css/font-awesome.min.css" />
        <meta name="description" content="Terence Tian's website" />
        <title />
      </Head>
      <header>
        <div className={styles.headerContent}>
          <Profile />
          <Navbar />
        </div>
      </header>
      <main>{children}</main>
    </div>
  );
}
