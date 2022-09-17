import { NextPage } from "next";
import Image from "next/image";
import Link from "next/link";
import { HeroProps } from "../../../types";
import ArkarPhyoProfile from "../../../public/images/ArkarPhyoProfile.png";
import CircleProfile from "../../../public/images/circleProfile.png";
import { FacebookIcon } from "../../atoms/icons/facebookIcon";
import { GithubIcon } from "../../atoms/icons/githubIcon";
import { LinkedInIcon } from "../../atoms/icons/linkedInIcon";
import Header from "../header/indexOne";

const HeroOne: NextPage<HeroProps> = () => {
  return (
    <div className="relative overflow-hidden bg-white">
      <div className="">
        <div className="relative z-10 pb-8 bg-white sm:pb-16 md:pb-20 lg:max-w-4xl lg:w-full lg:pb-28 xl:pb-32">
          <Header />

          <main className="px-4 mx-auto mt-10 max-w-7xl sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28">
            <div className="space-y-8 ">
              <h1 className="text-2xl font-extrabold tracking-wide text-gray-900 lg:space-y-4 sm:text-5xl md:text-6xl">
                <span className="block text-xl uppercase">
                  Hello I&apos;m a
                </span>
                <span className="block underline text-ruby xl:inline decoration-ruby/40">
                  Web Developer
                </span>
              </h1>
              <p className="mt-3 text-base text-gray-500 sm:mt-5 sm:text-lg max-w-[15rem] md:max-w-lg lg:max-w-full md:mt-5 md:text-xl lg:mx-0">
                Hi, I&apos;m Arkar Phyo, a passionate web developer based in
                Myanmar.
              </p>

              <div className="space-y-8 sm:mt-8 sm:flex-col sm:justify-center lg:justify-start">
                <div className="flex space-x-4">
                  <Link href="https://www.facebook.com">
                    <a target="_blank">
                      <FacebookIcon className={"lg:w-10 lg:h-10 w-8 h-8"} />
                    </a>
                  </Link>
                  <Link href="https://www.github.com">
                    <a target="_blank">
                      <GithubIcon className={"lg:w-10 lg:h-10 w-8 h-8"} />
                    </a>
                  </Link>
                  <Link href="https://www.linkedin.com">
                    <a target="_blank">
                      <LinkedInIcon className={"lg:w-10 lg:h-10 w-8 h-8"} />
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
      </div>
      <div className="absolute inset-y-0 right-0 lg:w-1/3">
        <svg
          className="z-20 bg-ruby"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="none"
          viewBox="0 0 560 680">
          <g mask='url("#a")' fill="none">
            <path
              d="m31.23 488.07 78.81 45.5v91l-78.81 45.5-78.81-45.5v-91zm157.62-546 78.81 45.5v91l-78.81 45.5-78.81-45.5v-91zm78.81 682.5 78.81 45.5v91l-78.81 45.5-78.81-45.5v-91zm157.62-546 78.81 45.5v91l-78.81 45.5-78.81-45.5v-91zm-78.81 136.5 78.81 45.5v91l-78.81 45.5-78.81-45.5v-91zm0 273 78.81 45.5v91l-78.81 45.5-78.81-45.5v-91zm78.81 136.5 78.81 45.5v91l-78.81 45.5-78.81-45.5v-91zm78.81-682.5 78.81 45.5v91l-78.81 45.5-78.81-45.5v-91zm78.81 136.5 78.81 45.5v91l-78.81 45.5-78.81-45.5v-91zm-78.81 136.5 78.81 45.5v91l-78.81 45.5-78.81-45.5v-91zm78.81 136.5 78.81 45.5v91l-78.81 45.5-78.81-45.5v-91z"
              stroke="rgba(30, 58, 138, 0.4)"
              strokeWidth="4"
            />

            <path
              d="m11.33-23.71 45.03 26v52l-45.03 26-45.03-26v-52zm45.03 78 45.04 26v52l-45.04 26-45.03-26v-52zm0 156 45.04 26v52l-45.04 26-45.03-26v-52zm45.04 78 45.03 26v52l-45.03 26-45.04-26v-52zm90.07 312 45.03 26v52l-45.03 26-45.04-26v-52zm90.07-624 45.03 26v52l-45.03 26-45.04-26v-52zm45.03 78 45.04 26v52l-45.04 26-45.03-26v-52zm0 624 45.04 26v52l-45.04 26-45.03-26v-52zm180.14 0 45.04 26v52l-45.04 26-45.03-26v-52zm90.07-156 45.03 26v52l-45.03 26-45.03-26v-52zm-45.03 78 45.03 26v52l-45.03 26-45.04-26v-52z"
              stroke="rgba(248, 250, 252, 0.4)"
              strokeWidth="4"
            />
          </g>
          <defs>
            <mask id="a">
              <path fill="#fff" d="M0 0h560v680H0z" />
            </mask>
          </defs>
        </svg>
      </div>
      <div className="absolute bottom-0 right-0 w-1/2 lg:-right-28 md:-right-20">
        {/* <div className="z-40 border-2 border-red-500 rounded-full"> */}
        <div className="hidden w-48 h-auto md:block lg:w-96 md:w-72">
          <Image
            className="left-0 z-20 md:absolute"
            src={ArkarPhyoProfile}
            alt="Arkar Phyo"
            layout="responsive"
          />
        </div>

        {/* </div> */}
      </div>
      <div className="absolute right-0 w-1/2 top-14 md:hidden">
        <div className="w-48 h-auto ">
          <Image
            className="z-20"
            src={CircleProfile}
            alt="Arkar Phyo"
            layout="responsive"
          />
        </div>
      </div>
    </div>
  );
};
export default HeroOne;
