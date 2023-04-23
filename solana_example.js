//bring in the parts of the solana web3 library that we need
const { Connection, PublicKey } = require("@solana/web3.js");

//specify the RPC url for the network we want to connect to
const connection = new Connection(
  "https://api.mainnet-beta.solana.com",
  "confirmed"
); //we will use the mainnet-beta network and we want confimed committments

//specify the address we want to get the balance of
const walletAddress = new PublicKey(
  "BULBwSQ5ebx3beQwnxVDmhq1khefk7AJGHrrKC7Jd6mP"
); //A basic wallet address you'd copy from your wallet turned into the public key object format

//define an asynchronous function to get the balance
async function getBalance() {
  //using the connection object we created above we can use the getBalance method to get the balance of the wallet address
  const balance = await connection.getBalance(walletAddress);

  console.log({ lamports: balance, sol: (balance / 1000000000).toFixed(6) }); //solana returns lamports which are fractions of a SOL.
  //1 SOL = 1000000000 lamports so we divide the lamports by 1000000000 to get the sol
}

//call the function
getBalance();

//from the base of our project folder we can run this by using node solana_example.js in the terminal
