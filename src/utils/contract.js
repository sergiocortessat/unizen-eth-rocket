import { ethers } from 'ethers';
import { ABI } from './ABI';

// // Staking contract address and ABI
const stakingContractAddress = '0x3019227b2b8493e45bf5d25302139c9a2713bf15';
const stakingContractABI = ABI;

// // Rocket Pool token contract address and ABI (replace with actual values)
const tokenContractAddress = '0xae78736cd615f374d3085123a210448e74fc6393';

const daiAbi = [
    // Some details about the token
    "function name() view returns (string)",
    "function symbol() view returns (string)",
  
    // Get the account balance
    "function balanceOf(address) view returns (uint)",
  
    // Send some of your tokens to someone else
    "function transfer(address to, uint amount)",
  
    // An event triggered whenever anyone transfers to someone else
    "event Transfer(address indexed from, address indexed to, uint amount)"
  ];

// // Initialize contract instances
const INFURA_ID = '60e6abd79e254092902a242c42684b94'
const INFURA_ID2 = '91cfe479793d4c979eeab07682903284'
const provider = new ethers.providers.JsonRpcProvider(`https://mainnet.infura.io/v3/${INFURA_ID}`)
// const provider = new ethers.providers.JsonRpcProvider('https://mainnet.infura.io/v3/60e6abd79e254092902a242c42684b94');
const stakingContract = new ethers.Contract(stakingContractAddress, stakingContractABI, provider);
//The balance of the account of the Rocket Pool token contract
// const tokenContract = new ethers.Contract(tokenContractAddress, daiAbi, provider);
const address2 = '0x3019227b2b8493e45bf5d25302139c9a2713bf15'
// const address = '0x3e847C7AcC3b6570Ce704986199e308258dE7F73'


// export const main = async () => {
//     const balance = await provider.getBalance(address)
//     console.log(`\nETH Balance of ${address} --> ${ethers.utils.formatEther(balance)} ETH\n`)
//     return ethers.utils.formatEther(balance)
// }

// Function to fetch staking balance
export async function fetchStakingBalance(address) {
  const stakingBalance = await stakingContract.getNodeRPLStake(address);
  // console.log('stakingbalance', ethers.utils.formatEther(stakingBalance));
  return ethers.utils.formatEther(stakingBalance)
}

// // Function to fetch native balance
export async function fetchNativeBalance(address) {
const balance = await provider.getBalance(address)
// console.log(`\nETH Balance of ${address2} --> ${ethers.utils.formatEther(balance)} ETH\n`);
return ethers.utils.formatEther(balance)
}

// Function to fetch Rocket Pool token balance
// export async function fetchTokenBalance2() {
//   const tokenBalance = await tokenContract.balanceOf(address);
//   console.log('tokenbalance', ethers.utils.formatEther(tokenBalance));
//   return ethers.utils.formatEther(tokenBalance)
// }

const setupContract = (tokenAddress, signer) => {
  const tokenContract = new ethers.Contract(tokenAddress, daiAbi, signer);
  return tokenContract;
};

export const fetchTokenBalance = async (address) => {

  try {
    // const provider = new ethers.providers.JsonRpcProvider('https://mainnet.infura.io/v3/${INFURA_ID}');
    const signer = provider.getSigner(address);

    // const tokenContract = setupContract(tokenContractAddress, signer);
    const tokenContract = new ethers.Contract(tokenContractAddress, daiAbi, signer);
    // console.log('tokenContract', tokenContract);
    const balance = await tokenContract.balanceOf(address);
    const symbol = await tokenContract.symbol();
    // console.log('symbol', symbol);
    // console.log('tokenbalance', ethers.utils.formatEther(balance));
    return ethers.utils.formatEther(balance)
    // console.log('signer', signer);
  } catch (error) {
    console.error('Error fetching token balance:', error);
  }
};


