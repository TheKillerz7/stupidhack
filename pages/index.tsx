import Image from "next/image";
import { Inter } from "next/font/google";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBars,
  faCertificate,
  faHandPointer,
  faXmark,
} from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import logo from "../public/svgs/capybaraisnotstupid-logo.svg";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const [mobileNavOpened, setMobileNavOpened] = useState<Boolean>(false);

  return (
    <main className={`min-h-screen overflow-hidden ${inter.className}`}>
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
          <ul className="grid grid-rows-3 h-full w-full place-items-center">
            <li>
              <Link href="/">Home🥱</Link>
            </li>
            <li>
              <Link href="/about">About😎</Link>
            </li>
            <li>
              <Link href="/product">Product🤝</Link>
            </li>
          </ul>
        </div>
        <div className="lg:px-20 relative w-full border-b flex justify-between px-8 items-center border-gray-300 bg-gradient-to-b from-zinc-200 pb-6 pt-8 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:border lg:bg-gray-200 lg:p-4 lg:dark:bg-zinc-800/30">
          <div className="text-lg font-medium flex">
            <div className="w-7 h-7 mr-2 -mt-0.5">
              <Image alt="" src={logo} />
            </div>
            CAPYIsNotStupid
          </div>
          <ul className="lg:flex hidden absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 items-center h-full w-full justify-center">
            <li className="hover:animate-spin mr-8">
              <Link href="/">Home🥱</Link>
            </li>
            <li className="hover:animate-spin mr-8">
              <Link href="/about">About😎</Link>
            </li>
            <li className="hover:animate-spin">
              <Link href="/product">Product🤝</Link>
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
      <div className="lg:flex lg:px-72  items-center mt-14 px-8">
        <div className="lg:w-5/12">
          <h1 className="lg:text-left relative text-3xl font-semibold text-center pb-5">
            <div className="bg-[#ceae8b] w-8/12 h-full rounded-full absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 -z-10 blur-3xl"></div>
            🔥CAPYIsNotStupid🔥
          </h1>
          <p className="lg:text-left text-center mb-5">
            A wonderful🤩 game that allows you to have 💫FUN💫 with capybaras.
            Express yourself to Capy! Don't be shy!
          </p>
          <div className="lg:block lg:mx-0 hidden relative bg-[#bc9364] text-white w-max rounded-full py-2 px-20 mx-auto text-sm">
            <div className="bg-[#bb9871] w-full h-full rounded-full absolute top-0 left-0 -z-10 blur-xl"></div>
            <div className="absolute bottom-0 right-14 translate-y-4 w-5 h-7 -rotate-12">
              <FontAwesomeIcon
                icon={faHandPointer}
                className="h-full animate-bounce"
              />
            </div>
            Play Now
          </div>
        </div>
        <div className="lg:7/12">
          <div className="relative">
            <div className="absolute right-14 z-10 -bottom-14 -rotate-12 flex flex-col items-center justify-center">
              <div className="text-lg mb-2 after:w-[5.95rem] after:h-[2.5px] after:top-3.5 after:left-1/2 after:-translate-x-1/2 after:absolute after:content-[''] after:bg-red-700">
                $7999999
              </div>
              <div className="relative w-20 h-20 text-lg font-semibold grid place-items-center">
                <FontAwesomeIcon
                  className="absolute text-[#329843] h-full -z-10"
                  icon={faCertificate}
                />
                $0
              </div>
            </div>
            <Image
              alt="all-product"
              src="/imgs/all-product-capy.png"
              width={500}
              height={500}
            />
          </div>
          <div
            style={{ transform: "rotateX(100deg)" }}
            className="mb-20 after:absolute after:-z-20 after:h-[150px] after:w-[150px] after:-translate-y-48 after:-translate-x-1/2 after:left-1/2 after:bg-white after:rounded-full after:blur-3xl after:content-['']"
          ></div>
          <div className="lg:hidden relative bg-[#bc9364] text-white w-max rounded-full py-2 px-20 mx-auto text-sm">
            <div className="bg-[#bb9871] w-full h-full rounded-full absolute top-0 left-0 -z-10 blur-xl"></div>
            <div className="absolute bottom-0 right-14 translate-y-4 w-5 h-7 -rotate-12">
              <FontAwesomeIcon
                icon={faHandPointer}
                className="h-full animate-bounce"
              />
            </div>
            Play Now
          </div>
        </div>
      </div>
      <div className="lg:px-20 mt-20 px-8">
        <h2 className="text-center text-2xl font-medium mb-10">
          Why Play Our Game?
        </h2>
        <div className="lg:grid-cols-3 lg:gap-y-0 grid grid-rows-3 gap-y-10">
          <div className="mx-auto text-center">
            <div className="text-7xl mb-5">😎</div>
            <h3 className="text-xl font-medium mb-3">Capys are cool</h3>
            <p className="">
              You can't tell me that capys aren't cool cuz they are!
            </p>
          </div>
          <div className="mx-auto text-center">
            <div className="text-7xl mb-5">🤝</div>
            <h3 className="text-xl font-medium mb-3">Great sale deals</h3>
            <p className="">
              We have a very great deal for our pirce for the game.
            </p>
          </div>
          <div className="mx-auto text-center">
            <div className="text-7xl mb-5">😢</div>
            <h3 className="text-xl font-medium mb-3">We want to win</h3>
            <p className="">Please play our game. We want to win TvT.</p>
          </div>
        </div>
      </div>
      <div className="lg:mt-2 lg:h-max relative mt-20 py-14 px-8">
        <div className="absolute h-full w-[200%] left-1/2 -translate-x-1/2 bg-gray-500 -z-10 top-0 blur-3xl"></div>
        <h2 className="text-center text-2xl font-medium mb-10">
          We Are Available On
        </h2>
        <div className="grid grid-rows-3 gap-y-10">
          <div className="mx-auto text-center">
            <div className="text-7xl mb-5">
              <Image alt="" src="/imgs/ps5-capy.png" width={700} height={700} />
            </div>
            <h3 className="text-xl font-medium mb-3">On PS5! (We're not)</h3>
            <p className="">
              Cool right? We're also on PS5! (Just download it on pc)
            </p>
            <div className="relative bg-[#bc9364] text-white w-max rounded-full py-2 px-20 mx-auto text-sm mt-5">
              <div className="bg-[#bb9871] w-full h-full rounded-full absolute top-0 left-0 -z-10 blur-xl"></div>
              <div className="absolute bottom-0 right-14 translate-y-4 w-5 h-7 -rotate-12">
                <FontAwesomeIcon
                  icon={faHandPointer}
                  className="h-full animate-bounce"
                />
              </div>
              Play Now
            </div>
          </div>
          <div className="mx-auto text-center">
            <div className="text-7xl mb-5">
              <Image alt="" src="/imgs/ps4-capy.png" width={700} height={700} />
            </div>
            <h3 className="text-xl font-medium mb-3">On PS4! (We're not)</h3>
            <p className="">
              And the OG one, the PS4! (Just download it on pc)
            </p>
            <div className="relative bg-[#bc9364] text-white w-max rounded-full py-2 px-20 mx-auto text-sm mt-5">
              <div className="bg-[#bb9871] w-full h-full rounded-full absolute top-0 left-0 -z-10 blur-xl"></div>
              <div className="absolute bottom-0 right-14 translate-y-4 w-5 h-7 -rotate-12">
                <FontAwesomeIcon
                  icon={faHandPointer}
                  className="h-full animate-bounce"
                />
              </div>
              Play Now
            </div>
          </div>
          <div className="mx-auto text-center">
            <div className="text-7xl mb-5">
              <Image
                alt=""
                src="/imgs/xbox-capy.png"
                width={700}
                height={700}
              />
            </div>
            <h3 className="text-xl font-medium mb-3">On XBOX! (We're not)</h3>
            <p className="">Also on XBOX, y'all! (Just download it on pc)</p>
            <div className="relative bg-[#bc9364] text-white w-max rounded-full py-2 px-20 mx-auto text-sm mt-5">
              <div className="bg-[#bb9871] w-full h-full absolute top-0 left-0 -z-10 blur-xl"></div>
              <div className="absolute bottom-0 right-14 translate-y-4 w-5 h-7 -rotate-12">
                <FontAwesomeIcon
                  icon={faHandPointer}
                  className="h-full animate-bounce"
                />
              </div>
              Play Now
            </div>
          </div>
        </div>
      </div>
      <footer className="mt-14 px-8 py-8">
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
          <li>
            <Link href="/product">Product</Link>
          </li>
        </ul>
      </footer>
    </main>
  );
}
