"use client"

import { useState } from "react";
import logo from "../assets/aurora.ico";
import { useCrypto } from "../providers/web-3-provider";
import { ConnectBtn } from "./connect-btn";

export function PaymentCard() {
    const { wallet } = useCrypto()
    const [price, setPrice] = useState<string>("0")

    let test_balance = 0;
    return (
        <div className="w-1/2 h-[480px] relative overflow-hidden p-4 bg-slate-200 shadow-md rounded-2xl">
            <div className="text-center p-4">
                <h1 className="text-2xl">
                    Appreciate this Creator
                </h1>
                <p>Show your love for {`{creator_name}`}. By tipping them. Motivating them to do more.</p>
            </div>
            <div className="space-y-4">
                <div>
                    <label htmlFor="price" className="block text-sm font-medium leading-6 text-gray-900">
                        Price
                    </label>
                    <div className="relative mt-2 rounded-md shadow-sm">
                        <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                            <span className="text-gray-500 sm:text-sm">$</span>
                        </div>
                        <input
                            id="price"
                            name="price"
                            type="text"
                            value={price}
                            onChange={(e) => {
                                setPrice(e.target.value)
                            }}
                            placeholder="0.00"
                            aria-describedby="price-currency"
                            disabled={test_balance < 1}
                            className="block w-full rounded-md border-0 py-1.5 pl-7 pr-12 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                        />
                        <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-3">
                            <div className='flex items-center space-x-1'>
                                <img src={logo} width={20} height={20} alt="" />
                                <p>Aur</p>
                            </div>
                        </div>
                    </div>
                    <span className="mt-2">{Number(price) * 0.00039} ETH</span>
                </div>
            </div>


            {/* If the user doesn't have a wallet connected */}
            {!wallet ? null :
                (
                    <div className="absolute inset-0 bg-gray-400/10 backdrop-blur-2xl p-2 grid place-items-center ">
                        <ConnectBtn />
                    </div>
                )
            }

            <button
                disabled={test_balance < 1}
                className='w-full my-5 px-4 py-2 bg-black text-white rounded-lg shadow-sm hover:bg-black/80 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 cursor-pointer'>
                Donate Now
            </button>

            {test_balance < 1 ? <div>
                <p className="text-center text-lg text-orange-500 mt-5 mb-3">You need more tokens!</p>
                <div className=" relative">
                    
                    <input type="number" className="block w-full rounded-md border-0 py-1.5 pl-7 pr-12 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 bg-transparent sm:text-sm sm:leading-6" placeholder="20.00" />
                    <div className="pointer-events-none absolute top-1 right-0 flex items-center pr-3">
                            <div className='flex items-center space-x-1'>
                                <img src={logo} width={20} height={20} alt="" />
                                <p>Aur</p>
                            </div>
                    </div>
                <button
                disabled={test_balance < 1}
                className='w-full my-3 px-4 py-2 bg-black text-white rounded-lg shadow-sm hover:bg-black/80 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 cursor-pointer'>
                Buy Now
            </button>
                </div>
            </div> : null}
        </div>
    )
}

// Lisk Web3js Rootstock onboard