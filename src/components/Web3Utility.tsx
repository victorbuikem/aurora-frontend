import React, { createContext, useContext } from "react";
import auroraTokenABI from "../ABI/AuroraToken.json";
import platformContractABI from "../ABI/CreatorPlatformContract.json";
import { useCrypto } from "../providers/web-3-provider";
type CtxType = {
  approveTokens: (spenderAddress: string, amount: number) => void;
  //   donate: (
  //     creatorAddress: string,
  //     tokenAmount: number,
  //     ipfsHash: string
  //   ) => void;
  //   getCreatorDetails: (creatorAddress: string) => string;
  //   getContentByCategory: (category: string) => string;
  //   getContentByCreator: (creatorAddress: string) => string;
};
const utilityContext = createContext<CtxType | undefined>(undefined);

function Web3Utility({ children }: { children: React.ReactNode }) {
  const { web3 } = useCrypto();
  console.log("web3 is this", web3);
  const auroraTokenAddress = import.meta.env.VITE_AURTOKEN_ADDRESS;
  const platformContractAddress = import.meta.env
    .VITE_PLATFORM_CONTRACT_ADDRESS;
  const privateKey = import.meta.env.VITE_WALLET_KEY;
  let account;
  if (web3) {
    account = web3.eth.accounts.wallet.add(privateKey);
  }

  //   // Instantiate contract objects
  //   const auroraTokenContract = new web3.eth.Contract(
  //     auroraTokenABI,
  //     auroraTokenAddress
  //   );
  //   const platformContract = new web3.eth.Contract(
  //     platformContractABI,
  //     platformContractAddress
  //   );

  // Add an account to the wallet
  async function approveTokens(spenderAddress: string, amount: number) {
    const tx = auroraTokenContract.methods.approve(spenderAddress, amount);
    const gas = await tx.estimateGas({ from: account.address });
    const gasPrice = await web3.eth.getGasPrice();

    const txReceipt = await tx.send({
      from: account.address,
      gas,
      gasPrice,
    });

    console.log("Approval Tx hash:", txReceipt.transactionHash);
  }

  //   // Function to donate tokens
  //   async function donate(
  //     creatorAddress: string,
  //     tokenAmount: number,
  //     ipfsHash: string
  //   ) {
  //     const tx = platformContract.methods.donate(
  //       creatorAddress,
  //       tokenAmount,
  //       ipfsHash
  //     );
  //     const gas = await tx.estimateGas({ from: account.address });
  //     const gasPrice = await web3.eth.getGasPrice();

  //     const txReceipt = await tx.send({
  //       from: account.address,
  //       gas,
  //       gasPrice,
  //     });

  //     console.log("Donation Tx hash:", txReceipt.transactionHash);
  //   }

  // Function to get creator details
  //   async function getCreatorDetails(creatorAddress: string) {
  //     const creator = await platformContract.methods
  //       .getCreator(creatorAddress)
  //       .call();
  //     console.log("Creator details:", creator);
  //     return creator;
  //   }

  //   // Function to get content by category
  //   async function getContentByCategory(category: string) {
  //     const content = await platformContract.methods
  //       .getContentByCategory(category)
  //       .call();
  //     console.log("Content in category:", content);
  //     return content;
  //   }

  //   // Function to get content by creator
  //   async function getContentByCreator(creatorAddress: string) {
  //     const content = await platformContract.methods
  //       .getContentByCreator(creatorAddress)
  //       .call();
  //     console.log("Content by creator:", content);
  //     return content;
  //   }

  return (
    <utilityContext.Provider value={{ approveTokens }}>
      {children}
    </utilityContext.Provider>
  );
}
const useWebUtility = () => {
  const context = useContext(utilityContext);
  if (context === undefined) {
    throw new Error("useWebUtility must be used within a CryptoProvider");
  }
  return context;
};

export { Web3Utility, useWebUtility };
