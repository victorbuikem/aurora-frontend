import { useCrypto } from "../providers/web-3-provider";

export function ConnectBtn() {
    const { connect: connectWallet } = useCrypto();

    return (

        <button
            onClick={async () => await connectWallet()}
            className="bg-gradient-to-b from-orange-800 to-orange-700 rounded-2xl  px-7 py-3 my-5 mx-auto flex text-white text-center"
        >
            Connect Wallet
        </button>
    )
}