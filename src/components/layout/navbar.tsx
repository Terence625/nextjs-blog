import React from "react";
import Link from "next/link";
import styles from "./layout.module.css";

export default function Navbar() {
  return (
    <nav className={styles.navbar}>
      <Link href="/">
        <a>Home</a>
      </Link>
      <Link href="/blogs">
        <a>Blogs</a>
      </Link>
      <Link href="/tools">
        <a>Tools</a>
      </Link>
      <Link href="/about">
        <a>About</a>
      </Link>
      <a target="_blank" href="https://github.com/Terence625" rel="noopener noreferrer" className={styles.icon}>
        <i className="fa fa-github"/>
      </a>
    </nav>
  );
}
