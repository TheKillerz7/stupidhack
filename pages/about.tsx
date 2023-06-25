import Image from "next/image";

export default function AboutPage() {
  return (
    <div className="lg:px-20 px-8 mt-14 flex flex-col justify-center">
      <h1 className="text-2xl font-semibold text-center flex items-center justify-center">
        Members นะฮะ<pre className="animate-wink-right">😉</pre>
      </h1>
      <div className="lg:grid lg:grid-cols-4 lg:gap-x-14">
        <div className="animate-shake-slow max-w-sm rounded-xl overflow-hidden shadow-lg mt-10">
          <Image
            className="w-full h-56 object-cover"
            src="/imgs/captain.jpg"
            alt=""
            width={500}
            height={500}
          />
          <div className="bg-white">
            <div className="px-6 py-4">
              <div className="font-bold text-gray-700 text-xl mb-2">
                Captain
              </div>
              <p className="text-gray-700 text-base">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Voluptatibus quia, nulla! Maiores et perferendis eaque,
                exercitationem praesentium nihil.
              </p>
            </div>
            <div className="px-6 pt-2 pb-2">
              <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                #GameDev
              </span>
            </div>
          </div>
        </div>
        <div className="animate-shake-slow max-w-sm rounded-xl overflow-hidden shadow-lg mt-10">
          <Image
            className="w-full h-56 object-cover"
            src="/imgs/film1.jpg"
            alt=""
            width={500}
            height={500}
          />
          <div className="bg-white">
            <div className="px-6 py-4">
              <div className="font-bold text-gray-700 text-xl mb-2">
                Film(Female)
              </div>
              <p className="text-gray-700 text-base">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Voluptatibus quia, nulla! Maiores et perferendis eaque,
                exercitationem praesentium nihil.
              </p>
            </div>
            <div className="px-6 pt-2 pb-2">
              <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                #ContentCreator
              </span>
            </div>
          </div>
        </div>
        <div className="animate-shake-slow max-w-sm rounded-xl overflow-hidden shadow-lg mt-10">
          <Image
            className="w-full h-56 object-cover"
            src="/imgs/film2.jpg"
            alt=""
            width={500}
            height={500}
          />
          <div className="bg-white">
            <div className="px-6 py-4">
              <div className="font-bold text-gray-700 text-xl mb-2">
                Film(Male)
              </div>
              <p className="text-gray-700 text-base">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Voluptatibus quia, nulla! Maiores et perferendis eaque,
                exercitationem praesentium nihil.
              </p>
            </div>
            <div className="px-6 pt-2 pb-2">
              <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                #Presentation&Concept
              </span>
            </div>
          </div>
        </div>
        <div className="animate-shake-slow max-w-sm rounded-xl overflow-hidden shadow-lg mt-10">
          <Image
            className="w-full h-56 object-cover object-bottom"
            src="/imgs/david.jpg"
            alt=""
            width={500}
            height={500}
          />
          <div className="bg-white">
            <div className="px-6 py-4">
              <div className="font-bold text-gray-700 text-xl mb-2">David</div>
              <p className="text-gray-700 text-base">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Voluptatibus quia, nulla! Maiores et perferendis eaque,
                exercitationem praesentium nihil.
              </p>
            </div>
            <div className="px-6 pt-2 pb-2">
              <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                #WebDev
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
