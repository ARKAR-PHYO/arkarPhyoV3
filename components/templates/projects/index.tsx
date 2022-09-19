import { NextPage } from "next";
import Image from "next/image";
import { ProjectsProps } from "../../../types";
import PagesLayout from "../pagesLayout";

const Projects: NextPage<ProjectsProps> = ({ projectData }) => {
  console.log("projectData -->", projectData);

  return (
    <PagesLayout pageTitle="Projects that I'v built" className="my-16 ">
      <div className="">
        {projectData.map((value: any) => (
          <div className="" key={value.id}>
            <div className="h-auto max-w-xl ">
              <Image
                src={value.projectCover}
                alt={value.projectName}
                width={640}
                height={457}
              />
            </div>
            <h1>{value.projectName}</h1>
          </div>
        ))}
      </div>
    </PagesLayout>
  );
};
export default Projects;
