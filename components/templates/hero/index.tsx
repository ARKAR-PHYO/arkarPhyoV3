import { NextPage } from "next";
import { HeroProps } from "../../../types";
import Header from "../header/index";
import Link from "next/link";
import { FacebookIcon } from "../../atoms/icons/facebookIcon";
import { GithubIcon } from "../../atoms/icons/githubIcon";
import { LinkedInIcon } from "../../atoms/icons/linkedInIcon";

const Hero: NextPage<HeroProps> = () => {
  return (
    <div className="w-full h-screen ">
      <Header />
      <main className="px-4 mx-auto mt-10 max-w-7xl lg:max-w-4xl sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:mx-0 lg:px-52 xl:mt-28">
        <div className="space-y-8">
          <h1 className="space-y-3 text-2xl font-extrabold tracking-wide text-slate-100 lg:space-y-4 sm:text-5xl md:text-6xl">
            <span className="block text-sm font-thin uppercase">
              Hi, My Name is
            </span>
            <span className="block text-3xl uppercase text-ruby">
              Arkar Phyo
            </span>
            <span className="block font-thin uppercase text-slate-300 lg:text-4xl">
              I build things for the web.
            </span>
            {/* <span className="block underline text-ruby xl:inline decoration-ruby/40">
              Web Developer
            </span> */}
          </h1>
          <p className="mt-3 text-base text-slate-400 sm:mt-5 sm:text-lg md:mt-5 md:text-xl lg:mx-0">
            {`I’m a software engineer specializing in building exceptional digital experiences. Currently, I’m focused on building accessible, human-centered products at `}
            <span className=" text-ruby">Myanmar Solutions Co., Ltd.</span>
          </p>

          <div className="space-y-8 sm:mt-8 sm:flex-col sm:justify-center lg:justify-start">
            <div className="flex space-x-4">
              <Link href="https://www.facebook.com">
                <a target="_blank">
                  <FacebookIcon className={"lg:w-8 lg:h-8 w-8 h-8 text-ruby"} />
                </a>
              </Link>
              <Link href="https://www.github.com">
                <a target="_blank">
                  <GithubIcon className={"lg:w-8 lg:h-8 w-8 h-8 text-ruby"} />
                </a>
              </Link>
              <Link href="https://www.linkedin.com">
                <a target="_blank">
                  <LinkedInIcon className={"lg:w-8 lg:h-8 w-8 h-8 text-ruby"} />
                </a>
              </Link>
            </div>

            <button className="rounded-md shadow-lg lg:max-w-lg ">
              <div className="flex items-center justify-center px-8 py-3 text-base font-medium border border-transparent rounded-md text-ellipsis bg-ruby hover:bg-secondary-ruby md:py-4 md:text-lg md:px-10">
                Download my CV
              </div>
            </button>
          </div>
        </div>
      </main>
    </div>
  );
};
export default Hero;
