import video from "../assets/video.mp4";
import { Display } from "../components/display";
import { PaymentCard } from "../components/payment-card";


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
        <PaymentCard />
      </section>
    </>
  );
};


// 