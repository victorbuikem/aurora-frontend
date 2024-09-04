Import web3.js
const Web3 = require("web3");

// // Connect to the Ethereum network
// const web3 = new Web3('https://mainnet.infura.io/v3/YOUR_INFURA_PROJECT_ID');

// Contract ABI and Address
// const contractABI = [/* ABI of your AuroraToken and PlatformContract */];
// const auroraTokenAddress = '0xYourAuroraTokenContractAddress';
// const platformContractAddress = '0xYourPlatformContractAddress';

// // Instantiate contract objects
// const auroraTokenContract = new web3.eth.Contract(contractABI, auroraTokenAddress);
// const platformContract = new web3.eth.Contract(contractABI, platformContractAddress);

// // Add an account to the wallet
// const privateKey = '0xYourPrivateKey';
// const account = web3.eth.accounts.wallet.add(privateKey);

// // Function to approve tokens
// async function approveTokens(spenderAddress, amount) {
//     const tx = auroraTokenContract.methods.approve(spenderAddress, amount);
//     const gas = await tx.estimateGas({ from: account.address });
//     const gasPrice = await web3.eth.getGasPrice();

//     const txReceipt = await tx.send({
//         from: account.address,
//         gas,
//         gasPrice
//     });

//     console.log('Approval Tx hash:', txReceipt.transactionHash);
// }

// // Function to donate tokens
// async function donate(creatorAddress, tokenAmount, ipfsHash) {
//     const tx = platformContract.methods.donate(creatorAddress, tokenAmount, ipfsHash);
//     const gas = await tx.estimateGas({ from: account.address });
//     const gasPrice = await web3.eth.getGasPrice();

//     const txReceipt = await tx.send({
//         from: account.address,
//         gas,
//         gasPrice
//     });

//     console.log('Donation Tx hash:', txReceipt.transactionHash);
// }

// // Function to get creator details
// async function getCreatorDetails(creatorAddress) {
//     const creator = await platformContract.methods.getCreator(creatorAddress).call();
//     console.log('Creator details:', creator);
//     return creator;
// }

// // Function to get content by category
// async function getContentByCategory(category) {
//     const content = await platformContract.methods.getContentByCategory(category).call();
//     console.log('Content in category:', content);
//     return content;
// }

// // Function to get content by creator
// async function getContentByCreator(creatorAddress) {
//     const content = await platformContract.methods.getContentByCreator(creatorAddress).call();
//     console.log('Content by creator:', content);
//     return content;
// }

// // Example usage
// (async () => {
//     // Approve tokens
//     await approveTokens(platformContractAddress, web3.utils.toWei('100', 'ether'));

//     // Donate tokens
//     await donate('0xCreatorAddress', web3.utils.toWei('10', 'ether'), 'QmSomeIpfsHash');

//     // Get creator details
//     await getCreatorDetails('0xCreatorAddress');

//     // Get content by category
//     await getContentByCategory('Art');

//     // Get content by creator
//     await getContentByCreator('0xCreatorAddress');
// })();

class Connect{
    const contractABI = [
        /* ABI of your AuroraToken and PlatformContract */
      ];
      const auroraTokenAddress = "0xYourAuroraTokenContractAddress";
      const platformContractAddress = "0xYourPlatformContractAddress";
      
      // Instantiate contract objects
      const auroraTokenContract = new web3.eth.Contract(
        contractABI,
        auroraTokenAddress
      );
      const platformContract = new web3.eth.Contract(
        contractABI,
        platformContractAddress
      );
      
      // Add an account to the wallet
      const privateKey = "0xYourPrivateKey";
      const account = web3.eth.accounts.wallet.add(privateKey);
      
      // Function to approve tokens
      async function approveTokens(spenderAddress:string, amount:number) {
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
      
      // Function to donate tokens
      async function donate(creatorAddress:string, tokenAmount:number, ipfsHash:string) {
        const tx = platformContract.methods.donate(
          creatorAddress,
          tokenAmount,
          ipfsHash
        );
        const gas = await tx.estimateGas({ from: account.address });
        const gasPrice = await web3.eth.getGasPrice();
      
        const txReceipt = await tx.send({
          from: account.address,
          gas,
          gasPrice,
        });
      
        console.log("Donation Tx hash:", txReceipt.transactionHash);
      }
      
      // Function to get creator details
      async function getCreatorDetails(creatorAddress:string) {
        const creator = await platformContract.methods
          .getCreator(creatorAddress)
          .call();
        console.log("Creator details:", creator);
        return creator;
      }
      
      // Function to get content by category
      async function getContentByCategory(category:string) {
        const content = await platformContract.methods
          .getContentByCategory(category)
          .call();
        console.log("Content in category:", content);
        return content;
      }
      
      // Function to get content by creator
      async function getContentByCreator(creatorAddress:string) {
        const content = await platformContract.methods
          .getContentByCreator(creatorAddress)
          .call();
        console.log("Content by creator:", content);
        return content;
      }
}

// Example usage
// (async () => {
//   // Approve tokens
//   await approveTokens(
//     platformContractAddress,
//     web3.utils.toWei("100", "ether")
//   );

//   // Donate tokens
//   await donate(
//     "0xCreatorAddress",
//     web3.utils.toWei("10", "ether"),
//     "QmSomeIpfsHash"
//   );

//   // Get creator details
//   await getCreatorDetails("0xCreatorAddress");

//   // Get content by category
//   await getContentByCategory("Art");

//   // Get content by creator
//   await getContentByCreator("0xCreatorAddress");
// })();
