import logo from "../assets/aurora.ico";
import { useCrypto } from "../providers/web-3-provider";
import { ConnectBtn } from "./connect-btn";

export function PaymentCard() {
    const { wallet } = useCrypto()
    return (
        <div className="w-1/2 h-[500px] relative overflow-hidden p-4 bg-slate-200 shadow-md rounded-2xl">
            <div className="text-center p-4">

                <h1 className="text-2xl">
                    Appreciate this Creator
                </h1>
                <p>Show your love for {`{creator_name}`}. By tipping them. Motivating them to do more.</p>
            </div>
            <div className="flex items-center justify-between p-4">
                <p>30.203139545000</p>
                <div className="flex space-x-1 items-center">
                    <img src={logo} alt="" width={20} height={20} />
                    <span>Aur</span>
                </div>
            </div>


            {/* If the user doesn't have a wallet connected */}
            {wallet ? null :
                (
                    <div className="absolute inset-0 bg-gray-400/10 backdrop-blur-2xl p-2 grid place-items-center ">
                        <ConnectBtn />
                    </div>
                )
            }

            <div className="mt-10 flex flex-col items-center">
                <p className="text-white text-center">
                    Or Get more coins from wallet
                </p>
                <p className="text-orange-600 cursor-pointer">Connect Wallet</p>
            </div>
        </div>
    )
}

// Lisk Web3js Rootstock onboard