import { Web3 } from "web3";

const providerUrl = "https://mainnet.infura.io/v3/YOUR_INFURA_PROJECT_ID";
const web3 = new Web3(new Web3.providers.HttpProvider(providerUrl));

export function TestCall() {
  console.log("jkdkef", web3);
}
