import Image from "next/image";
import utilStyles from "../../styles/utils.module.css";
import React from "react";
import Link from "next/link";

export default function Header(props: {
  name: string;
  profileHeight: number;
  profileWidth: number;
  titleSize: string;
}) {
  return (
    <>
      <Link href="/">
        <a>
          <Image
            priority
            src="/images/profile.jpg"
            className={utilStyles.borderCircle}
            height={props.profileHeight}
            width={props.profileWidth}
            alt={props.name}
          />
        </a>
      </Link>
      <Link href="/">
        <a className={utilStyles.colorInherit} style={{textDecoration: "none"}}>
          <h1 className={`${props.titleSize} ${utilStyles.paddingLeft10px}`}>{props.name}</h1>
        </a>
      </Link>
    </>
  );
}
