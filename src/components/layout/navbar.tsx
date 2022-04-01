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
      <Link href="/games">
        <a>Games</a>
      </Link>
      <Link href="/about">
        <a>About</a>
      </Link>
    </nav>
  );
}