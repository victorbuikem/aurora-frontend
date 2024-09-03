import video from "../assets/video.mp4";
import logo from "../assets/aurora.ico";
import { Display } from "../components/display";


export const VideoPlayer = () => {
  return (
    <>
      <div className="bg-sky-400 h-16 p-4 flex justify-end">
        <a href="/creator/join" className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-white h-10 px-4 py-2"> Become a creator Today</a>
      </div>
      <section className="flex justify-between p-4 items-start space-x-10">
        {/* Video Element */}
        <div className="w-full">
          <Display src={video} type="video" />
        </div>

        {/* Other Component */}
        <div className="w-1/2 h-[500px] p-4 bg-slate-200 shadow-md rounded-2xl">
          <div className="text-center p-4">

            <h1 className="text-2xl">
              Appreciate this Creator
            </h1>
            <p>Show your love for {`{creator_name}`}. By tipping them. Motivating them to do more.</p>
          </div>
          <div className="flex items-center justify-between p-4">
            <p>30.203139545000</p>
            <div className="flex space-x-1 items-center">
              <img src={logo} alt="" width={20} height={20} />
              <span>Aur</span>
            </div>
          </div>

          <button className="shadow-sm hover:scale-110 shadow-orange-700 my-5 bg-gradient-to-b from-orange-700 to-orange-600 px-7 py-2 rounded-2xl mx-auto flex">
            Donate
          </button>

          <div className="mt-10 flex flex-col items-center">
            <p className="text-white text-center">
              Or Get more coins from wallet
            </p>
            <p className="text-orange-600 cursor-pointer">Connect Wallet</p>
          </div>
        </div>
      </section>
    </>
  );
};
