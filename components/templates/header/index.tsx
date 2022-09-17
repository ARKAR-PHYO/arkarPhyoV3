import { NextPage } from "next";
import { Fragment } from "react";
import { Popover, Transition } from "@headlessui/react";
import NameLogo from "../../atoms/nameLogo";
import { HeaderProps } from "../../../types";
import Iconx from "../../atoms/icons/iconx";
import Navigation from "../../organisms/navigation/index";

const Header: NextPage<HeaderProps> = ({}) => {
  return (
    <Popover>
      <div className="relative px-4 pt-6 sm:px-6 lg:px-8">
        <nav
          className="relative flex items-center justify-between sm:h-10 "
          aria-label="Global">
          <div className="flex items-center flex-grow flex-shrink-0 lg:flex-grow-0">
            <div className="flex items-center justify-between w-full md:w-auto">
              <NameLogo isHam={false} />
              <div className="flex items-center -mr-2 md:hidden">
                <Popover.Button className="inline-flex items-center justify-center p-2 text-ruby hover:text-slate-400 focus:outline-none ">
                  <span className="sr-only">Open main menu</span>
                  <Iconx
                    icon={"Bars3BottomRightIcon"}
                    className="w-6 h-6"
                    aria-hidden="true"
                  />
                </Popover.Button>
              </div>
            </div>
          </div>
          <div className="hidden md:block md:ml-10 md:pr-4 md:space-x-8">
            <Navigation isHam={false} />
          </div>
        </nav>
      </div>

      <Transition
        as={Fragment}
        enter="duration-150 ease-out"
        enterFrom="opacity-0 scale-95"
        enterTo="opacity-100 scale-100"
        leave="duration-100 ease-in"
        leaveFrom="opacity-100 scale-100"
        leaveTo="opacity-0 scale-95">
        <Popover.Panel
          focus
          className="absolute inset-x-0 top-0 z-10 p-2 transition origin-top-right transform md:hidden">
          <div className="overflow-hidden bg-white rounded-lg shadow-md ring-1 ring-black ring-opacity-5">
            <div className="flex items-center justify-between px-5 pt-4">
              <NameLogo isHam={true} />
              <div className="-mr-2">
                <Popover.Button className="inline-flex items-center justify-center p-2 bg-white rounded-md text-ruby focus:outline-none">
                  <span className="sr-only">Close main menu</span>
                  <Iconx
                    icon={"XMarkIcon"}
                    className="w-6 h-6"
                    aria-hidden="true"
                  />
                </Popover.Button>
              </div>
            </div>
            <div className="px-2 pt-2 pb-3 space-y-1">
              <Navigation isHam={true} />
            </div>
          </div>
        </Popover.Panel>
      </Transition>
    </Popover>
  );
};
export default Header;
