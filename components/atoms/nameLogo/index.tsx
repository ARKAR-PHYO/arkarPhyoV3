import { NextPage } from "next";
import Link from "next/link";
import { useState } from "react";
import { NameLogoIcon } from "../icons/nameLogoIcon";

interface nameLogoProps {
  isHam?: any;
}

const NameLogo: NextPage<nameLogoProps> = ({ isHam }) => {
  return (
    <Link href="/">
      <a>
        <span className="sr-only">Arkar Phyo</span>
        <NameLogoIcon isHam={isHam} className={" w-24 lg:w-32 h-auto"} />
      </a>
    </Link>
  );
};

export default NameLogo;
