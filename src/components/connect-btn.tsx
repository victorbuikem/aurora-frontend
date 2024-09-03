import { useNavigate } from "react-router";
import { useCrypto } from "../providers/web-3-provider";

export function ConnectBtn() {
<<<<<<< HEAD
  const { connect: connectWallet } = useCrypto();
  const navigate = useNavigate();
  return (
    <button
      onClick={async () => {
        const value = await connectWallet();
        console.log("val", value);
        navigate("/creator/new", { replace: true });
      }}
      className="
  inline-flex items-center justify-center whitespace-nowrap text-white rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-black h-10 px-4 py-2 mx-auto w-full mt-10 "
    >
      Connect Wallet
    </button>
  );
}
=======
    const { connect: connectWallet } = useCrypto();

    return (

        <button
            onClick={async () => await connectWallet()}
            className="
  inline-flex items-center justify-center whitespace-nowrap text-white rounded-md text-sm font-medium ring-offset-background hover:bg-white hover:text-black hover:border border-black duration-300 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-black h-10 px-4 py-2 mx-auto w-full mt-10 "
        >
            Connect Wallet
        </button>
    )
}
>>>>>>> 166371c046578f472d833982cd18eb57f5367c82
