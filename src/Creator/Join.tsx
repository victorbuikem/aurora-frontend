import communities from "../assets/communities.png";
import content from "../assets/content.png";
import content1 from "../assets/content1.png";
import creative from "../assets/creative.png";
import idea from "../assets/idea.png";
import live from "../assets/live-streaming.png";
import network from "../assets/network.png";
import { ConnectBtn } from "../components/connect-btn";


const Join = () => {

  return (
    <div className="h-screen max-h-screen w-full bg-gradient-to-tr from-slate-950 to-blue-950 flex justify-center items-center">
      <section className="rounded-2xl bg-white/70 backdrop-blur-sm shadow-md shadow-blue-700 h-[30rem] w-[30rem] items-center p-10 ">
        <h1 className="text-slate-900 font-bold text-3xl font-mono mb-14 text-center">
          Welcome Creator!
        </h1>
        <img
          src={content1}
          alt=""
          width={100}
          height={100}
          className="bg-slate-900 rounded-full object-cover flex mx-auto"
        />
        <ConnectBtn />
      </section>
      <img
        src={content}
        alt=""
        className="absolute filter invert sepia saturate-200 opacity-50 hue-rotate-90 top-20 left-20"
        width={100}
        height={100}
      />
      <img
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
      />
      {/* <img src={content} alt="" className="absolute filter invert sepia saturate-200 opacity-50 hue-rotate-90 bottom-20 right-20" width={100} height={100}/> */}
      <img
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
      />
      <img
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
      />
    </div>
  );
};

export default Join;
