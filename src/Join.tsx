import Web3 from "web3";
import Web3Modal from "web3modal";
import WalletConnectProvider from "@walletconnect/web3-provider";
import CoinbaseWalletSDK from "@coinbase/wallet-sdk";

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
    if (window.ethereum) {
      console.log("MetaMask is installed!");
      if (window.solana) {
        console.log("phantom working");
      } else {
        console.log("phantom not working");
      }
    } else {
      console.log("MetaMask is not installed.");
    }
    connectWallet();
    // web3Modal.clearCachedProvider();
  };
  return (
    <div className="h-screen max-h-screen w-full bg-gradient-to-tr from-slate-950 to-blue-950 flex justify-center items-center">
      <section className="rounded-2xl border border-blue-900 shadow-xl shadow-blue-700 h-[30rem] w-[30rem] flex flex-col justify-center items-center p-10">
        {/* <div className="flex space-x-3">
          <label className="text-white text-2xl">UserName</label>
          <input type="text" className="text-2xl outline-none border-none" />
        </div> */}
        <button
          onClick={handleConnectWallet}
          className="bg-gradient-to-b from-orange-800 to-orange-700 rounded-2xl  px-7 py-3 text-white text-center"
        >
          Connect Wallet
        </button>
      </section>
    </div>
  );
};

export default Join;
