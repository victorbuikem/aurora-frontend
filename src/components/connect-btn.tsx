import { useNavigate } from "react-router";
import { useCrypto } from "../providers/web-3-provider";
import { useWebUtility } from "./Web3Utility";

export function ConnectBtn() {
  const { connect: connectWallet } = useCrypto();
  const { approveTokens } = useWebUtility();
  const navigate = useNavigate();

  return (
    <button
      onClick={async () => {
        await connectWallet();
        // navigate("/creator/new", { replace: true });
        approveTokens("0x8e48c90492bDdfb01c52745A5991939747aa0c95", 12);
      }}
      className="inline-flex items-center justify-center whitespace-nowrap text-white rounded-md text-sm font-medium ring-offset-background hover:bg-black/80  duration-300 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-black h-10 px-4 py-2 mx-auto w-full mt-10 "
    >
      Connect Wallet
    </button>
  );
}
