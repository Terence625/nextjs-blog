import React from "react";
import Link from "next/link";
import styles from "./layout.module.css";

export default function Navbar() {
  return (
    <nav className={styles.navbar}>
      <Link href="/">
        <a>Home</a>
      </Link>
      <Link href="/">
        <a>Blog</a>
      </Link>
      <Link href="/">
        <a>Game</a>
      </Link>
    </nav>
  );
}
