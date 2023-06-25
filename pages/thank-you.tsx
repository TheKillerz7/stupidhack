import { faHandPointer } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";

export default function ThankYouPage() {
  return (
    <div className="flex items-center justify-center flex-col px-8 text-center min-h-[59vh]">
      <div className="text-3xl animate-shake-slow mb-10">
        Just joking, no payment here hehe😜
      </div>
      <Link href="/file/StupidGame.zip">
        <div className="lg:block lg:mx-0 lg:mt-4 relative text-lg cursor-pointer bg-[#bc9364] text-white w-max rounded-full py-2 px-20 mx-auto">
          <div className="bg-[#bb9871] w-full h-full rounded-full absolute top-0 left-0 -z-10 blur-xl"></div>
          <div className="absolute bottom-0 right-14 translate-y-4 w-5 h-7 -rotate-12">
            <FontAwesomeIcon
              icon={faHandPointer}
              className="h-full animate-bounce"
            />
          </div>
          Download Here
        </div>
      </Link>
    </div>
  );
}
