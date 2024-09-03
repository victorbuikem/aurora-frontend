import Web3 from "web3";
import content from "../assets/content.png";
import communities from "../assets/communities.png";
import live from "../assets/live-streaming.png";
import creative from "../assets/creative.png";
import idea from "../assets/idea.png";
import network from "../assets/network.png";
import content1 from "../assets/content1.png";
import { init, useConnectWallet } from "@web3-onboard/react";
import injectedModule from "@web3-onboard/injected-wallets";
import { useEffect, useState } from "react";

// Sign up to get your free API key at https://explorer.blocknative.com/?signup=true
// Required for Transaction Notifications and Transaction Preview
const apiKey = "1730eff0-9d50-4382-a3fe-89f0d34a2070";

const injected = injectedModule();

const infuraKey = "c8412280cee6482d900de9bea48cb8c9";
const rpcUrl = `https://mainnet.infura.io/v3/${infuraKey}`;

// initialize Onboard
const web3Onboard = init({
  // This javascript object is unordered meaning props do not require a certain order
  apiKey,
  wallets: [injected],
  chains: [
    {
      id: "0x1",
      token: "ETH",
      label: "Ethereum Mainnet",
      rpcUrl,
    },
    {
      id: "0x2105",
      token: "ETH",
      label: "Base",
      rpcUrl: "https://mainnet.base.org",
    },
  ],
});

const Join = () => {
  const [{ wallet, connecting }, connect, disconnect] = useConnectWallet();
  const [web3, setWeb3] = useState(null);
  useEffect(() => {
    if (wallet) {
      const web3Instance = new Web3(wallet.provider);
      setWeb3(web3Instance);
    }
  }, [wallet]);
  const handleConnectWallet = async () => {
    await connect();
  };
  return (
    <div className="h-screen max-h-screen w-full bg-gradient-to-tr from-slate-950 to-blue-950 flex justify-center items-center">
      <section className="rounded-2xl bg-white/70 backdrop-blur-sm shadow-md shadow-blue-700 h-[25rem] w-[30rem] items-center p-10 ">
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

        <button
          onClick={handleConnectWallet}
          className="bg-orange-600 rounded-2xl  px-7 py-3 my-10 cursor-pointer hover:bg-orange-600 duration-300 mx-auto flex text-white text-center"
        >
          Connect Wallet
        </button>
        {/* </button>
        <button disabled={connecting} onClick={handleConnectWallet}>
          {connecting ? "connecting" : wallet ? "disconnect" : "connect"}
        </button> */}
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
