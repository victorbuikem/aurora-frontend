"use client";
import {
  ConnectOptions,
  DisconnectOptions,
  WalletState,
} from "@web3-onboard/core";
import injectedModule from "@web3-onboard/injected-wallets";
import {
  init,
  Web3OnboardProvider
} from "@web3-onboard/react";
import { createContext, useContext } from "react";
import Web3 from "web3";

export type CtxType = {
  wallet: WalletState | null;
  connecting: boolean;
  disconnect: (wallet: DisconnectOptions) => Promise<WalletState[]>;
  connect: (opts?: ConnectOptions) => Promise<WalletState[]>;
  web3: Web3 | null;
};

const CryptoContext = createContext<CtxType | undefined>(undefined);

const API_KEY = "1730eff0-9d50-4382-a3fe-89f0d34a2070";
const INFURA_KEY = "c8412280cee6482d900de9bea48cb8c9";
const RPC_URL = `https://mainnet.infura.io/v3/${INFURA_KEY}`;

const injected = injectedModule();

// Initialize Onboard
const onboard = init({
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
  return (
    <Web3OnboardProvider web3Onboard={onboard}>{children}</Web3OnboardProvider>
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

