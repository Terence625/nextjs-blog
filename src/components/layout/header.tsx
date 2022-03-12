import Image from "next/image";
import utilStyles from "../../styles/utils.module.css";
import React from "react";

export default function Header(props: {
  name: string;
  profileHeight: number;
  profileWidth: number;
  titleSize: string;
}) {
  return (
    <>
      <Image
        priority
        src="/images/profile.jpg"
        className={utilStyles.borderCircle}
        height={props.profileHeight}
        width={props.profileWidth}
        alt={props.name}
      />
      <h1 className={props.titleSize}>{props.name}</h1>
    </>
  );
}
