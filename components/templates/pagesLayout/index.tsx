import { NextPage } from "next";
import { classNames } from "../../../lib/getData";
import { PagesLayoutProps } from "../../../types";

const PagesLayout: NextPage<PagesLayoutProps> = ({
  children,
  pageTitle,
  className,
  id,
}) => {
  return (
    <div
      id={id}
      className={`px-4 mx-auto  max-w-7xl sm:px-6 lg:px-8 ${
        className ? `${className}` : ""
      }`}>
      {/* <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8"> */}
      <h1 className="flex items-center space-x-4 text-xl lg:text-3xl">
        <span>{pageTitle} </span>
        <div className=" flex-auto h-0.5 bg-ruby" />
      </h1>
      <main>{children}</main>
    </div>
  );
};
export default PagesLayout;
