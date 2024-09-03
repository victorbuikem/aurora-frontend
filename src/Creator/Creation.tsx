import news from "../assets/news.jpg";
import sports from "../assets/sports.jpg";
import others from "../assets/others.jpg";
import tech from "../assets/tech.jpg";
import arts from "../assets/arts.jpg";
import music from "../assets/music.jpg";
// import content from "../assets/content.png";
// import communities from "../assets/communities.png";
// import live from "../assets/live-streaming.png";
// import creative from "../assets/creative.png";
// import idea from "../assets/idea.png";
// import network from "../assets/network.png";
import { Outlet } from "react-router";

export const Creation = () => {
  return (
    <div className="p-10 bg-gradient-to-tr from-slate-950 to-blue-950 h-screen flex ">
      <div className="w-full h-full flex flex-col space-y-10">
        <h1 className="text-[2.7rem] font-bold text-white text-center">
          Categories
        </h1>
        <div className="max-w-7xl mx-auto p-4">
          <div className="flex flex-wrap -mx-2 z-20 relative">
            <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/3 xl:w-1/3 p-2">
              <div className="overflow-hidden rounded-lg relative">
                <img
                  src={arts}
                  alt="Art Category"
                  className="w-full h-48 object-cover cursor-pointer duration-300 hover:scale-110"
                />
                <p className="absolute text-white text-6xl font-bold top-1/2 left-1/2 cursor-pointer">
                  Arts
                </p>
              </div>
            </div>

            <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/3 xl:w-1/3 p-2">
              <div className="overflow-hidden rounded-lg relative">
                <img
                  src={music}
                  alt="Music Category"
                  className="w-full h-48 object-cover cursor-pointer duration-300 hover:scale-110"
                />
                <p className="absolute text-white text-6xl font-bold top-1/2 left-1/2 cursor-pointer">
                  Music
                </p>
              </div>
            </div>
            <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/3 xl:w-1/3 p-2">
              <div className="overflow-hidden rounded-lg relative">
                <img
                  src={news}
                  alt="News Category"
                  className="w-full h-48 object-cover cursor-pointer duration-300 hover:scale-110"
                />
                <p className="absolute text-white text-6xl font-bold top-1/2 left-1/2 cursor-pointer">
                  News
                </p>
              </div>
            </div>

            <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/3 xl:w-1/3 p-2">
              <div className="overflow-hidden rounded-lg relative cursor-pointer">
                <img
                  src={sports}
                  alt="Sports Category"
                  className="w-full h-48 object-cover cursor-pointer duration-300 hover:scale-110"
                />
                <p className="absolute text-white text-6xl font-bold top-1/2 left-1/2 cursor-pointer">
                  Sports
                </p>
              </div>
            </div>
            <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/3 xl:w-1/3 p-2">
              <div className="overflow-hidden rounded-lg relative cursor-pointer">
                <img
                  src={tech}
                  alt="Tech Category"
                  className="w-full h-48 object-cover cursor-pointer duration-300 hover:scale-110"
                />
                <p className="absolute text-white text-6xl font-bold top-1/2 left-1/2 cursor-pointer">
                  Tech
                </p>
              </div>
            </div>

            <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/3 xl:w-1/3 p-2">
              <div className="overflow-hidden rounded-lg relative">
                <img
                  src={others}
                  alt="Others Category"
                  className="w-full h-48 object-cover cursor-pointer duration-300 hover:scale-110"
                />
                <p className="absolute text-white text-6xl font-bold top-1/2 left-1/2">
                  Others
                </p>
              </div>
            </div>
          </div>
        </div>
        {/* <img
        src={content}
        alt=""
        className="absolute filter invert sepia saturate-200 opacity-50 hue-rotate-90 top-20 left-20"
        width={100}
        height={100}
      /> */}
        {/* <img
        src={idea}
        alt=""
        className="absolute filter invert sepia saturate-200 opacity-50 hue-rotate-90 top-40 left-60"
        width={100}
        height={100}
      />
      <img
        src={communities}
        alt=""
        className="absolute filter invert sepia saturate-200 opacity-50 hue-rotate-90 top-80 left-20"
        width={100}
        height={100}
      />
      <img
        src={live}
        alt=""
        className="absolute filter invert sepia saturate-200 opacity-50 hue-rotate-90 bottom-10 left-80"
        width={100}
        height={100}
      /> */}
        {/* <img src={content} alt="" className="absolute filter invert sepia saturate-200 opacity-50 hue-rotate-90 bottom-20 right-20" width={100} height={100}/> */}
        {/* <img
        src={creative}
        alt=""
        className="absolute filter invert sepia saturate-200 opacity-50 hue-rotate-90 top-60 right-20"
        width={100}
        height={100}
      />
      <img
        src={live}
        alt=""
        className="absolute filter invert sepia saturate-200 opacity-50 hue-rotate-90 top-10 right-10"
        width={100}
        height={100}
      />
      <img
        src={network}
        alt=""
        className="absolute filter invert sepia saturate-200 opacity-50 hue-rotate-90 top-80 right-80"
        width={100}
        height={100}
      /> */}
        {/* <img
        src={creative}
        alt=""
        className="absolute filter invert sepia saturate-200 opacity-50 hue-rotate-90 bottom-10 right-10"
        width={100}
        height={100}
      />
      <img
        src={idea}
        alt=""
        className="absolute filter invert sepia saturate-200 opacity-50 hue-rotate-90 top-0 left-1/2"
        width={100}
        height={100}
      /> */}
      </div>
      <Outlet />
    </div>
  );
};

export default Creation;
