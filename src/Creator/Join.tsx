import Web3 from "web3";
import Web3Modal from "web3modal";
import WalletConnectProvider from "@walletconnect/web3-provider";
import CoinbaseWalletSDK from "@coinbase/wallet-sdk";
import content from "../assets/content.png";
import communities from "../assets/communities.png";
import live from "../assets/live-streaming.png";
import creative from "../assets/creative.png";
import idea from "../assets/idea.png";
import network from "../assets/network.png";
import content1 from "../assets/content1.png";

const providerOptions = {
  walletconnect: {
    package: WalletConnectProvider,
    options: {
      infuraId: "c8412280cee6482d900de9bea48cb8c9", // required for WalletConnect
    },
  },
  coinbasewallet: {
    package: CoinbaseWalletSDK,
    options: {
      appName: "My Awesome App",
      infuraId: "c8412280cee6482d900de9bea48cb8c9", // required for Coinbase Wallet
    },
  },
};

const web3Modal = new Web3Modal({
  network: "mainnet", // optional
  cacheProvider: true, // optional
  providerOptions, // required
});

async function connectWallet() {
  try {
    web3Modal.clearCachedProvider();
    const provider = await web3Modal.connect();
    const web3 = new Web3(provider); // You can now use web3 with the selected provider
    console.log(web3);
  } catch (err) {
    console.log("connection error", err);
  }
}

const Join = () => {
  const handleConnectWallet = async () => {
    connectWallet();
    // web3Modal.clearCachedProvider();
  };
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
        <input
          type="text"
          className="text-lg mt-10 outline-none flex border-blue-950 w-full text-center rounded-xl border px-3 py-1 font-bold"
          placeholder="username"
        />

        <button
          onClick={handleConnectWallet}
          className="bg-gradient-to-b from-orange-800 to-orange-700 rounded-2xl  px-7 py-3 my-5 mx-auto flex text-white text-center"
        >
          Connect Wallet
        </button>
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
