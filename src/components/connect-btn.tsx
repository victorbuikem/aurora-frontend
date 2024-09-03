import { useCrypto } from "../providers/web-3-provider";

export function ConnectBtn() {
    const { connect: connectWallet } = useCrypto();

    return (

        <button
            onClick={async () => await connectWallet()}
            className="
  inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-fuchsia-400 h-10 px-4 py-2 mx-auto w-full mt-10 "
        >
            Connect Wallet
        </button>
    )
}