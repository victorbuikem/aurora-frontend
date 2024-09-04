import { Web3 } from "web3";
import data from "../ABI/CreatorPlatformContract.json";

const INFURA_KEY = "c8412280cee6482d900de9bea48cb8c9";
const PRIVATE_KEY = import.meta.env.VITE_WALLET_KEY;
const providerUrl = `https://mainnet.infura.io/v3/${INFURA_KEY}`;
const web3 = new Web3(new Web3.providers.HttpProvider(providerUrl));
const account = web3.eth.accounts.privateKeyToAccount(PRIVATE_KEY);
const contractAddress = import.meta.env.VITE_PLATFORM_CONTRACT_ADDRESS;
const contractABI = [...data];

const contract = new web3.eth.Contract(contractABI, contractAddress);

export async function registerCreator(name: string, fromAddress: string) {
  try {
    const ted = await contract.methods.registerCreator(name).send({
      from: fromAddress,
    });
    console.log("Successful:", ted.transactionHash);
  } catch (error) {
    console.error("Error fetching data:", error);
  }
}

export async function donate(
  creatorAddress: string,
  ipfsHash: string,
  fromAddress: string,
  amount: string
) {
  try {
    const tx = {
      to: contractAddress,
      data: contract.methods.donate(creatorAddress, ipfsHash).encodeABI(),
      value: web3.utils.toWei(amount.toString(), "ether"),
      gas: 3000000,
    };

    // Sign the transaction locally
    const signedTx = await account.signTransaction(tx);

    // Send the signed transaction
    const receipt = await web3.eth.sendSignedTransaction(
      signedTx.rawTransaction
    );

    console.log(
      "Donation transaction successful with hash:",
      receipt.transactionHash
    );
  } catch (error) {
    console.error("Error sending donation transaction:", error);
  }
}
