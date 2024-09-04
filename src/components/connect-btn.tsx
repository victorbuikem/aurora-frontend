import { useNavigate } from "react-router";
import { donate } from "../lib/requests";
import { useConnectWallet } from "@web3-onboard/react";

export function ConnectBtn({ homePage }: { homePage?: boolean }) {
  const [{ connecting }, connect] = useConnectWallet();
  const navigate = useNavigate();

  return (
    <button
      onClick={async () => {
        // approveTokens("0x8e48c90492bDdfb01c52745A5991939747aa0c95", 2.0);
        if (!homePage) return;
        await connect();
        navigate("/creator/new", { replace: true });
      }}
      className="inline-flex items-center justify-center whitespace-nowrap text-white rounded-md text-sm font-medium ring-offset-background hover:bg-black/80  duration-300 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-black h-10 px-4 py-2 mx-auto w-full mt-10 "
    >
      Connect Wallet
    </button>
  );
}
