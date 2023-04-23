//bring in dotenv package to read the .env file
require("dotenv").config();

//bring in axios package to make the api call (javascript has its own fetch function but axios is easier to use)
const axios = require("axios");

//basic helius request

//bring in api key --- best practice is to use a .env file and a package called dotenv
const apiKey = process.env.API_KEY;

//specify the url for the endpoint --- for this one we will use a POST request to the helius collections mintlist endpoint
//https://docs.helius.xyz/solana-apis/nft-api/nft-collection-mintlists

const url = `https://api.helius.xyz/v1/mintlist?api-key=${apiKey}`; //we add our api key to the end of the url

//define an asynchronous function to make the api call
async function getMintList() {
  //make the api call using axios
  const response = await axios.post(url, {
    query: {
      verifiedcollectionAddresses: [
        //This specifies what we're looking for.  In this case it wants the metaplex verified collection addresses
        "A7VxD9jwFEvcsVXGdFnTP3qC8ayb8tD9YdjgKbYcpheX", //this is the vandals verified collection address
      ],
    },
    options: {
      limit: 10000, //this is the number of results we want to return, we will specific 10,000
    },
  });

  //log the response to the console
  console.log(response.data.result); //data is where the api returns all data.  The result is the part of the response that we want
  return;
}

//call the function
getMintList();

//from the base of our project folder we can run this by using node api_example.js in the terminal
