import { Tab } from "@headlessui/react";
import { NextPage } from "next";
import { classNames } from "../../../lib/getData";
import { ExperiencesProps } from "../../../types";
import PagesLayout from "../pagesLayout";

const Experiences: NextPage<ExperiencesProps> = ({ notionData }) => {
  return (
    <PagesLayout
      id="projects"
      className="mt-40"
      pageTitle={`Where I’ve Worked`}>
      <div className="flex flex-col w-full md:flex-row">
        <Tab.Group>
          <Tab.List
            className={`flex flex-row md:w-1/2 lg:w-[38%] md:flex-col overflow-x-auto no-scrollbar mt-4`}>
            {notionData.map((exp: any, i: number) => (
              <Tab
                key={i}
                className={({ selected }) =>
                  classNames(
                    " py-2 border-b border-slate-50 md:text-start md:border-b-0 md:border-l shrink-0",
                    "focus:outline-none ",
                    selected
                      ? " bg-ruby/20 shadow-lg border-b text-ruby border-ruby md:bg-ruby/0 md:shadow-none"
                      : " text-slate-400 hover:bg-ruby/20 transition ease-in-out duration-700"
                  )
                }>
                <span className="px-5">{exp.companyName}</span>
              </Tab>
            ))}
          </Tab.List>
          <Tab.Panels className={`mt-2 w-full`}>
            {notionData.map((exp: any, i: number) => (
              <Tab.Panel
                key={i}
                className={classNames("rounded-xl p-3 focus:outline-none")}>
                <div className="relative">
                  <p>{exp.id}</p>
                  <h1 className="space-x-3 ">
                    <span>{exp.title}</span>
                    <span>@</span>
                    <span className=" text-secondary-ruby">
                      {exp.companyName}
                    </span>
                  </h1>
                  <p>
                    <span>{exp.fromDate}</span>
                    <span> - </span>
                    <span>
                      {exp.toDate == "Invalid Date" ? "Current" : exp.toDate}
                    </span>
                  </p>
                  <div className="mt-4 space-y-4">
                    {exp.JobDescription.map((value: any, i: number) => (
                      <p key={i} className="space-x-2 ">
                        <span className=" text-secondary-ruby">•</span>
                        <span>{value.text}</span>
                      </p>
                    ))}
                  </div>
                </div>
              </Tab.Panel>
            ))}
          </Tab.Panels>
        </Tab.Group>
      </div>
    </PagesLayout>
  );
};

export default Experiences;
