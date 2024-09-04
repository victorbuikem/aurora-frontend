import { useNavigate } from "react-router";
import { useCrypto } from "../providers/web-3-provider";

export function ConnectBtn({ homePage }: { homePage?: boolean }) {
  const { connect: connectWallet } = useCrypto();
  const navigate = useNavigate();

  return (
    <button
      onClick={async () => {
        await connectWallet();
        if (!homePage) return;
        navigate("/creator/new", { replace: true });
      }}
      className="inline-flex items-center justify-center whitespace-nowrap text-white rounded-md text-sm font-medium ring-offset-background hover:bg-black/80  duration-300 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-black h-10 px-4 py-2 mx-auto w-full mt-10 "
    >
      Connect Wallet
    </button>
  );
}
