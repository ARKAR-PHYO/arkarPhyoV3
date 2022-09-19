import type { NextPage } from "next";
import About from "../components/templates/about";
import Experiences from "../components/templates/experiences";
import Footer from "../components/templates/footer";
import Projects from "../components/templates/projects";
import { getExperienceData } from "../lib/getData";
import { getProjectData } from "../lib/notion";
import { HomeProps } from "../types";

const projectDbId = process.env.NOTION_Project_DB_ID;

const Home: NextPage<HomeProps> = ({ experienceData, projectData }) => {
  // console.log("projectData -->", projectData);

  return (
    <div className="w-full h-screen text-slate-200">
      <About />
      <Experiences notionData={experienceData} />
      <Projects projectData={projectData} />
      <Footer />
    </div>
  );
};

export const getStaticProps = async () => {
  const experienceData = await getExperienceData();
  const projectData = await getProjectData(projectDbId);

  return {
    props: {
      experienceData,
      projectData,
    },
    revalidate: 1,
  };
};

export default Home;
