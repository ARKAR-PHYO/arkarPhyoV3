import { NextPage } from "next";
import Link from "next/link";
import { useRouter } from "next/router";
import { websiteData } from "../../../lib/data";
import { NavigationProps } from "../../../types";

const NavigationOne: NextPage<NavigationProps> = ({ isHam }) => {
  const router = useRouter();

  return (
    <>
      {websiteData.navigation.map((item) => (
        <Link key={item.name} href={item.href}>
          <a
            className={` ${
              router.pathname === item.href ? " text-ruby" : ""
            }  ${
              isHam
                ? "block px-3 py-2 text-base font-medium text-gray-700 rounded-md hover:text-gray-900 hover:bg-gray-50"
                : "font-medium text-gray-500 hover:text-gray-900"
            }`}>
            {item.name}
          </a>
        </Link>
      ))}
    </>
  );
};
export default NavigationOne;
