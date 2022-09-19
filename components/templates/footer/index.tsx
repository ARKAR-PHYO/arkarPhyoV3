import { NextPage } from "next";
import Link from "next/link";
import { FacebookIcon } from "../../atoms/icons/facebookIcon";
import { GithubIcon } from "../../atoms/icons/githubIcon";
import { LinkedInIcon } from "../../atoms/icons/linkedInIcon";

const Footer: NextPage = () => {
  return (
    <div className="px-8 pt-16 border-t border-ruby lg:my-8">
      <div className="flex flex-col items-center justify-center lg:max-w-2xl lg:mx-auto">
        <h2 className=" text-slate-400">Get In Touch</h2>
        <h1 className="text-3xl text-ruby">{`let's work together`}</h1>
        <p className="mt-4 text-lg font-thin text-center">{`If you have a website or mobile app idea in mind or you need some advice about product design, feel free to contact me. Currently my time books quickly, so the sooner you write, the better it is for both of us.`}</p>
        <button className="px-4 py-2 mt-8 rounded-lg shadow-lg bg-ruby text-CoolBlack">
          hello@arkarphyo.com
        </button>
        <div className="my-8">
          <div className="flex items-center justify-center space-x-4">
            <Link href="https://www.facebook.com">
              <a target="_blank">
                <FacebookIcon
                  className={
                    "lg:w-8 lg:h-8 w-6 h-6 hover:text-ruby text-slate-400"
                  }
                />
              </a>
            </Link>
            <Link href="https://www.github.com">
              <a target="_blank">
                <GithubIcon
                  className={
                    "lg:w-8 lg:h-8 w-6 h-6 hover:text-ruby text-slate-400"
                  }
                />
              </a>
            </Link>
            <Link href="https://www.linkedin.com">
              <a target="_blank">
                <LinkedInIcon
                  className={
                    "lg:w-8 lg:h-8 w-6 h-6 hover:text-ruby text-slate-400"
                  }
                />
              </a>
            </Link>
          </div>
          <div className="flex flex-col items-center justify-center mt-4 space-y-2 md:space-y-0 md:space-x-2 md:flex-row">
            <p className="text-xs ">
              <span>&copy;</span>
              <span>{new Date().getFullYear()} </span>
              <span>All rights reserved.</span>
            </p>
            <p className="text-xs ">
              Design and Coded by <span className=" text-ruby">Arkar Phyo</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
