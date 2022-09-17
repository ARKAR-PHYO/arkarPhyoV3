import type { NextPage } from "next";
import About from "../components/templates/about";
import Experiences from "../components/templates/experiences";
import { getExperienceData } from "../lib/getData";
import { HomeProps } from "../types";

const Home: NextPage<HomeProps> = ({ experienceData }) => {
  return (
    <div className="w-full h-screen text-slate-200">
      <About />
      <Experiences notionData={experienceData} />
    </div>
  );
};

export const getStaticProps = async () => {
  const experienceData = await getExperienceData();

  return {
    props: {
      experienceData,
    },
    revalidate: 1,
  };
};

export default Home;
