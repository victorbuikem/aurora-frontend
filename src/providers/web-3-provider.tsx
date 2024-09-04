"use client";
import { useEffect, useState, createContext, useContext } from "react";
import { init, useConnectWallet } from "@web3-onboard/react";
import {
    ConnectOptions,
    DisconnectOptions,
    WalletState,
} from "@web3-onboard/core";
import injectedModule from "@web3-onboard/injected-wallets";
import Web3 from "web3";

type CtxType = {
    wallet: string;
    connecting: boolean;
    disconnect: (wallet: DisconnectOptions) => Promise<WalletState[]>;
    connect: (opts?: ConnectOptions) => Promise<WalletState[]>;
    web3: Web3 | null;
};

const CryptoContext = createContext<CtxType | undefined>(undefined);

// TODO: This should be an environment variable - Chukwuma
const API_KEY = "1730eff0-9d50-4382-a3fe-89f0d34a2070";
const INFURA_KEY = "c8412280cee6482d900de9bea48cb8c9";
const RPC_URL = `https://mainnet.infura.io/v3/${INFURA_KEY}`;

const injected = injectedModule();

// Initialize Onboard
init({
    apiKey: API_KEY,
    wallets: [injected],
    chains: [
        {
            id: "0x1",
            token: "ETH",
            label: "Ethereum Mainnet",
            rpcUrl: RPC_URL,
        },
        {
            id: "0x2105",
            token: "ETH",
            label: "Base",
            rpcUrl: "https://mainnet.base.org",
        },
    ],
});
function CryptoProvider({ children }: { children: React.ReactNode }) {
    const [{ wallet: _wallet, connecting }, connect, disconnect] = useConnectWallet();
    const [web3, setWeb3] = useState<Web3 | null>(null);
    const [wallet, setWallet] = useState<string>()


    // useEffect(() => {
    //     if (window.ethereum) {
    //         window.ethereum.request({ method: 'eth_requestAccounts' })
    //             .then(accounts => {
    //                 // This returns an array of accounts, usually just one
    //                 const connectedAccount = accounts[0];
    //                 console.log("Connected Ethereum account:", connectedAccount);
    //             })
    //             .catch(error => {
    //                 console.error("Error connecting to Ethereum wallet:", error);
    //             });
    //     } else {
    //         console.error("MetaMask is not installed!");
    //     }
    // }, [])

    useEffect(() => {
        if (_wallet?.provider) {
            const web3Instance = new Web3(_wallet.provider);
            setWeb3(web3Instance);
        } else {
            setWeb3(null);
        }
    }, [_wallet]);

    return (
        <CryptoContext.Provider
            value={{ wallet: "", connecting, connect, disconnect, web3 }}
        >
            {children}
        </CryptoContext.Provider>
    );
}

const useCrypto = () => {
    const context = useContext(CryptoContext);
    if (context === undefined) {
        throw new Error("useCrypto must be used within a CryptoProvider");
    }
    return context;
};

export { CryptoProvider, useCrypto };
