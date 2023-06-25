import Image from "next/image";
import { Inter } from "next/font/google";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCertificate,
  faHandPointer,
} from "@fortawesome/free-solid-svg-icons";
import logo from "../public/svgs/capybaraisnotstupid-logo.svg";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main className={`min-h-screen overflow-hidden ${inter.className}`}>
      <div className="lg:flex lg:px-72 items-center mt-14 px-8">
        <div className="lg:w-5/12">
          <h1 className="lg:text-left lg:justify-normal flex relative text-3xl justify-center font-semibold text-center pb-5">
            <div className="bg-[#ceae8b] w-8/12 h-full rounded-full absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 -z-10 blur-3xl"></div>
            <pre className="animate-shake-slow">🔥</pre>CAPYIsNotStupid
            <pre className="animate-shake-slow">🔥</pre>
          </h1>
          <p className="lg:text-left text-center mb-5">
            A wonderful🤩 game that allows you to have 💫FUN💫 with capybaras.
            Express yourself to Capy! Don&apos;t be shy!
          </p>
          <Link href="/checkout">
            <div className="lg:block lg:mx-0 lg:mt-8 hidden relative cursor-pointer bg-[#bc9364] text-white w-max rounded-full py-2 px-20 mx-auto text-sm">
              <div className="bg-[#bb9871] w-full h-full rounded-full absolute top-0 left-0 -z-10 blur-xl"></div>
              <div className="absolute bottom-0 right-14 translate-y-4 w-5 h-7 -rotate-12">
                <FontAwesomeIcon
                  icon={faHandPointer}
                  className="h-full animate-bounce"
                />
              </div>
              Purchase Now
            </div>
          </Link>
        </div>
        <div className="lg:7/12">
          <div className="relative">
            <div className="lg:right-20 lg:-bottom-8 absolute right-10 z-10 -bottom-8 -rotate-12 flex flex-col items-center justify-center">
              <div className="text-lg mb-2 after:w-[5.95rem] after:h-[2.5px] after:top-3.5 after:left-1/2 after:-translate-x-1/2 after:absolute after:content-[''] after:bg-red-700">
                $7999999
              </div>
              <div className="lg:w-20 lg:h-20 animate-shake relative w-14 h-14 text-lg font-semibold grid place-items-center">
                <FontAwesomeIcon
                  className="absolute text-[#329843] h-full -z-10"
                  icon={faCertificate}
                />
                $0
              </div>
            </div>
            <div className="shadow lg:after:w-[150px] lg:after:h-[150px] lg:mb-0 mb-20 after:absolute after:-z-20 after:h-[120px] after:w-[120px] after:-translate-y-1/2 after:top-1/2 after:-translate-x-1/2 after:left-1/2 after:bg-white after:rounded-full after:blur-3xl after:content-['']">
              <Image
                alt="all-product"
                className="lg:hover:-translate-y-5 lg:hover:-translate-x-5 lg:hover:-rotate-12 h-72 object-cover transition ease-in-out duration-500"
                src="/imgs/all-product-capy.png"
                width={500}
                height={500}
              />
            </div>
          </div>
          <div className="lg:hidden relative bg-[#bc9364] text-white w-max rounded-full py-2 px-20 mx-auto text-sm">
            <div className="bg-[#bb9871] w-full h-full rounded-full absolute top-0 left-0 -z-10 blur-xl"></div>
            <div className="absolute bottom-0 right-14 translate-y-4 w-5 h-7 -rotate-12">
              <FontAwesomeIcon
                icon={faHandPointer}
                className="h-full animate-bounce"
              />
            </div>
            Purchase Now
          </div>
        </div>
      </div>
      <div className="lg:px-20 lg:mt-32 mt-20 px-8">
        <h2 className="text-center text-2xl font-medium mb-10">
          Why Play Our Game?
        </h2>
        <div className="lg:grid-cols-3 lg:grid-rows-none lg:gap-y-0 grid grid-rows-3 gap-y-10">
          <div className="mx-auto text-center">
            <div className="animate-wink-right transition duration-500 ease-in-out text-7xl mb-5">
              😎
            </div>
            <h3 className="text-xl font-medium mb-3">Capys are cool</h3>
            <p className="">
              You can&apos;t tell me that capys aren&apos;t cool cuz they are!
            </p>
          </div>
          <div className="mx-auto text-center">
            <div className="animate-shake-hands text-7xl mb-5">🤝</div>
            <h3 className="text-xl font-medium mb-3">Great sale deals</h3>
            <p className="">
              We have a very great deal for our pirce for the game.
            </p>
          </div>
          <div className="mx-auto text-center">
            <div className="animate-wink-left transition duration-500 ease-in-out text-7xl mb-5">
              😢
            </div>
            <h3 className="text-xl font-medium mb-3">We want to win</h3>
            <p className="">Please play our game. We want to win TvT.</p>
          </div>
        </div>
      </div>
      <div className="lg:mt-32 lg:h-max lg:px-20 relative mt-20 py-14 px-8">
        <div className="absolute h-full w-[200%] left-1/2 -translate-x-1/2 bg-gray-700 -z-10 top-0 blur-3xl"></div>
        <h2 className="text-center text-2xl font-medium mb-10">
          ✅We Are Available On✅
        </h2>
        <div className="lg:grid-cols-3 lg:grid-rows-none lg:gap-y-0 grid grid-rows-3 gap-y-10">
          <div className="mx-auto text-center">
            <div className="text-7xl mb-5">
              <Image alt="" src="/imgs/ps5-capy.png" width={700} height={700} />
            </div>
            <h3 className="text-xl font-medium mb-3">
              On PS5! (We&apos;re not)
            </h3>
            <p className="">
              Cool right? We&apos;re also on PS5! (Just download it on pc)
            </p>
          </div>
          <div className="mx-auto text-center">
            <div className="text-7xl mb-5">
              <Image alt="" src="/imgs/ps4-capy.png" width={700} height={700} />
            </div>
            <h3 className="text-xl font-medium mb-3">
              On PS4! (We&apos;re not)
            </h3>
            <p className="">
              And the OG one, the PS4! (Just download it on pc)
            </p>
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
            <h3 className="text-xl font-medium mb-3 -mt-5">
              On XBOX! (We&apos;re not)
            </h3>
            <p className="">
              Also on XBOX, y&apos;all! (Just download it on pc)
            </p>
          </div>
        </div>
      </div>
      <div className="flex flex-col items-center w-full justify-center mt-24">
        <div className="text-2xl font-semibold flex">
          <pre className="animate-wink-right">👌</pre>Buy The Bundle!
          <pre className="animate-wink-left">👌</pre>
        </div>
        <div className="relative w-max flex items-center justify-center">
          <div className="lg:right-20 lg:-bottom-8 absolute right-24 z-10 bottom-14 -rotate-12 flex flex-col items-center justify-center">
            <div className="text-lg mb-2 after:w-[5.95rem] after:h-[2.5px] after:top-3.5 after:left-1/2 after:-translate-x-1/2 after:absolute after:content-[''] after:bg-red-700">
              $7999999
            </div>
            <div className="lg:w-20 lg:h-20 animate-shake relative w-14 h-14 text-lg font-semibold grid place-items-center">
              <FontAwesomeIcon
                className="absolute text-[#329843] h-full -z-10"
                icon={faCertificate}
              />
              $0
            </div>
          </div>
          <div className="shadow lg:after:w-[150px] lg:after:h-[150px] lg:mb-0 mb-20 after:absolute after:-z-20 after:h-[120px] after:w-[120px] after:-translate-y-1/2 after:top-1/2 after:-translate-x-1/2 after:left-1/2 after:bg-white after:rounded-full after:blur-3xl after:content-['']">
            <Image
              alt="all-product"
              className="lg:hover:-translate-y-5 lg:hover:-translate-x-5 lg:hover:-rotate-12 h-72 object-cover transition ease-in-out duration-500"
              src="/imgs/all-product-capy.png"
              width={500}
              height={500}
            />
          </div>
        </div>
        <Link href="/checkout">
          <div className="lg:block lg:mx-0 lg:mt-14 relative cursor-pointer bg-[#bc9364] text-white w-max rounded-full py-2 px-20 mx-auto text-sm">
            <div className="bg-[#bb9871] w-full h-full rounded-full absolute top-0 left-0 -z-10 blur-xl"></div>
            <div className="absolute bottom-0 right-14 translate-y-4 w-5 h-7 -rotate-12">
              <FontAwesomeIcon
                icon={faHandPointer}
                className="h-full animate-bounce"
              />
            </div>
            Purchase Now
          </div>
        </Link>
      </div>
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
          <li>
            <Link href="/product">Product</Link>
          </li>
        </ul>
      </footer>
    </main>
  );
}
