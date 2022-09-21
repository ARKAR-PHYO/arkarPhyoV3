import { NextPage } from "next";
import { HeroProps } from "../../../types";
import Header from "../header/index";
import Link from "next/link";
import { FacebookIcon } from "../../atoms/icons/facebookIcon";
import { GithubIcon } from "../../atoms/icons/githubIcon";
import { LinkedInIcon } from "../../atoms/icons/linkedInIcon";
import { useEffect, useState } from "react";
import TextTransition, { presets } from "react-text-transition";

const TEXTS = ["Web", "Design", "Development", "System"];

const Hero: NextPage<HeroProps> = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => setIndex((index) => index + 1), 2500);

    return () => clearTimeout(intervalId);
  }, []);

  return (
    <div className="relative h-screen">
      <Header />
      <div className="absolute bottom-0 w-full h-screen ">
        <div className="absolute w-full top-40 lg:inset-y-20">
          <main className="px-4 mx-auto lg:mx-auto max-w-7xl sm:px-6 lg:my-60">
            <div className="grid grid-cols-1 lg:grid-cols-2">
              <h1 className="space-y-3 text-2xl font-extrabold tracking-wide text-slate-100 lg:space-y-4 sm:text-5xl md:text-6xl">
                <span className="text-5xl lg:text-8xl">
                  I Build things for the
                </span>
                <TextTransition
                  className="mt-6 text-5xl lg:text-9xl text-ruby"
                  springConfig={presets.gentle}>
                  {TEXTS[index % TEXTS.length]}
                </TextTransition>
              </h1>
              <div className="mt-6 space-y-4 lg:space-y-0 lg:pl-10">
                <p className="mt-3 text-base text-slate-400 sm:mt-5 sm:text-lg md:mt-5 md:text-xl lg:mx-0">
                  {`I’m a software engineer specializing in building exceptional digital experiences. Currently, I’m focused on building accessible, human-centered products at `}
                  <span className=" text-ruby">
                    Myanmar Solutions Co., Ltd.
                  </span>
                </p>
                <div className="space-y-8 sm:mt-8 sm:flex-col sm:justify-center lg:justify-start">
                  <div className="flex space-x-4">
                    <Link href="https://www.facebook.com">
                      <a target="_blank">
                        <FacebookIcon
                          className={"lg:w-8 lg:h-8 w-8 h-8 text-ruby"}
                        />
                      </a>
                    </Link>
                    <Link href="https://www.github.com">
                      <a target="_blank">
                        <GithubIcon
                          className={"lg:w-8 lg:h-8 w-8 h-8 text-ruby"}
                        />
                      </a>
                    </Link>
                    <Link href="https://www.linkedin.com">
                      <a target="_blank">
                        <LinkedInIcon
                          className={"lg:w-8 lg:h-8 w-8 h-8 text-ruby"}
                        />
                      </a>
                    </Link>
                  </div>

                  {/* <button className="rounded-md shadow-lg lg:max-w-lg ">
                      <div className="flex items-center justify-center px-8 py-3 text-base font-medium border border-transparent rounded-md text-ellipsis bg-ruby hover:bg-secondary-ruby md:py-4 md:text-lg md:px-10">
                        Download my CV
                      </div>
                    </button> */}
                </div>
              </div>
            </div>
          </main>
        </div>
      </div>
    </div>
  );
};
export default Hero;
