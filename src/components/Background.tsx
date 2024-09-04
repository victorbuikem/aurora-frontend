import communities from "../assets/communities.png";
import content from "../assets/content.png";
import creative from "../assets/creative.png";
import idea from "../assets/idea.png";
import live from "../assets/live-streaming.png";
import network from "../assets/network.png";

export const Background = () => {
  return (
    <div className="h-[40vh] z-10 absolute w-full bg-blue-700">
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
        className="absolute filter invert sepia saturate-200 opacity-50 hue-rotate-90 animate-bouncee top-40 left-60"
        width={100}
        height={100}
      />
      <img
        src={communities}
        alt=""
        className="absolute filter invert sepia saturate-200 opacity-50 hue-rotate-90 animate-spinn duration-700 top-80 left-20"
        width={100}
        height={100}
      />
      <img
        src={live}
        alt=""
        className="absolute filter invert sepia saturate-200 opacity-50 animate-bouncee hue-rotate-90 bottom-10 left-[30rem]"
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
        className="absolute filter invert sepia saturate-200 opacity-50 animate-bouncee hue-rotate-90 top-10 right-10"
        width={100}
        height={100}
      />
      <img
        src={network}
        alt=""
        className="absolute filter invert sepia saturate-200 opacity-50 hue-rotate-90 animate-spinn top-80 right-80"
        width={100}
        height={100}
      />
      <img
        src={creative}
        alt=""
        className="absolute filter invert sepia saturate-200 opacity-50 hue-rotate-90 bottom-10 right-80"
        width={100}
        height={100}
      />
      <img
        src={idea}
        alt=""
        className="absolute filter invert sepia saturate-200 opacity-50 hue-rotate-90  animate-bouncee top-0 left-1/2"
        width={100}
        height={100}
      />
    </div>
  );
};

export default Background;
