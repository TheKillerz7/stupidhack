import "@/styles/globals.css";
import { faBars, faXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import type { AppProps } from "next/app";
import Image from "next/image";
import Link from "next/link";
import logo from "../public/svgs/capybaraisnotstupid-logo.svg";
import { useState } from "react";

export default function App({ Component, pageProps }: AppProps) {
  const [mobileNavOpened, setMobileNavOpened] = useState<Boolean>(false);
  return (
    <div>
      <div className="z-10 w-full items-center justify-between font-mono text-sm lg:flex">
        <div
          className={
            "lg:hidden fixed z-20 top-0 left-0 py-48 text-xl bg-black h-screen grid transition-transform duration-500 ease-in-out place-items-center w-full after:absolute after:dark:from-sky-900 after:dark:via-[#0141ff]/40 after:-z-20 after:h-[180px] after:w-[240px] after:translate-x-1/3 after:bg-gradient-conic after:from-sky-200 after:via-blue-200 after:blur-2xl after:content-[''] " +
            (mobileNavOpened ? "translate-x-0" : "translate-x-full")
          }
        >
          <div
            onClick={() => setMobileNavOpened(false)}
            className="absolute top-10 right-10 w-5 h-5 cursor-pointer"
          >
            <FontAwesomeIcon icon={faXmark} />
          </div>
          <ul className="grid grid-rows-2 h-full w-full place-items-center">
            <li>
              <Link href="/" onClick={() => setMobileNavOpened(false)}>
                Home🥱
              </Link>
            </li>
            <li>
              <Link href="/about" onClick={() => setMobileNavOpened(false)}>
                About😎
              </Link>
            </li>
          </ul>
        </div>
        <div className="lg:px-20 relative w-full border-b flex justify-between px-8 items-center border-gray-300 bg-gradient-to-b from-zinc-200 pb-6 pt-8 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:border lg:bg-gray-200 lg:p-4 lg:dark:bg-zinc-800/30">
          <Link href="/">
            <div className="text-lg font-medium flex">
              <div className="w-7 h-7 mr-2 -mt-0.5">
                <Image alt="" src={logo} />
              </div>
              CAPYIsNotStupid
            </div>
          </Link>
          <ul className="lg:flex hidden absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 items-center h-full w-full justify-center">
            <li className="hover:animate-shake mr-8">
              <Link href="/" onClick={() => setMobileNavOpened(false)}>
                Home🥱
              </Link>
            </li>
            <li className="hover:animate-shake mr-8">
              <Link href="/about" onClick={() => setMobileNavOpened(false)}>
                About😎
              </Link>
            </li>
          </ul>
          <div
            onClick={() => setMobileNavOpened(true)}
            className="lg:hidden w-5 h-5"
          >
            <FontAwesomeIcon icon={faBars} className="h-full" />
          </div>
        </div>
      </div>
      <Component {...pageProps} />
      <footer className="lg:px-20 mt-14 px-8 py-8 border-t border-t-gray-700 bg-gradient-to-b from-zinc-200 pb-6 pt-8 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit">
        <div className="text-lg font-medium flex mb-5">
          <div className="w-7 h-7 mr-2 -mt-0.5">
            <Image alt="" src={logo} />
          </div>
          CAPYIsNotStupid
        </div>
        <div className="text-lg font-medium mb-3">Navigations⚓</div>
        <ul className="grid grid-rows-3 h-full w-full gap-y-2">
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="/about">About</Link>
          </li>
        </ul>
      </footer>
    </div>
  );
}
