import { history } from "umi";
import FactoryABI from '@/abis/Factory.json';
import { getAddress } from '@ethersproject/address';
import { Contract } from '@ethersproject/contracts';
import { AddressZero, MaxUint256 } from '@ethersproject/constants';
import { BigNumber } from '@ethersproject/bignumber';
import { formatUnits, parseUnits } from '@ethersproject/units';
import { Interface } from '@ethersproject/abi';
import { Web3Provider, JsonRpcProvider } from "@ethersproject/providers";
import { useWeb3React } from '@web3-react/core';
import { InjectedConnector } from '@web3-react/injected-connector';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { ReactComponent as Logo } from '@/assets/logo.svg';
import { useEffect } from "react";

// generatesaltvalue
const ethers = require("ethers")
const Web3 = require('web3');
const web3 = new Web3("https://data-seed-prebsc-1-s3.binance.org:8545");
const ZERO_ADDRESS = ethers.constants.AddressZero
const refundAmount = 1000;
const ETH_TOKEN = ethers.constants.AddressZero;
const ZERO_BYTES = "0x"
let FactoryContract: Contract 
let FactoryContractWithSigner: Contract;

const owner = "0x3a790b0D5F04B13970E1CA37F8da2249dd9f5974";
const modules = ["0x24C310A4F5FeFb030Fd1E29E13Ecd2cc90A1E9e1"]
const privateKey = "377e9f7384cf3063b37ec202b5a367df811d01ca36bad75824e0d0bfcbc257df";

const account = await web3.eth.accounts.privateKeyToAccount("0x"+ privateKey);

async function signRefund(wallet: any, amount: any, token: any, signer: any) {
    const message = `0x${[
        wallet,
        ethers.utils.hexZeroPad(ethers.utils.hexlify(amount), 32),
        token,
    ].map((hex) => hex.slice(2)).join("")}`;
    const sig = await signMessage(ethers.utils.keccak256(message), signer);
    return sig;
}

async function signMessage(message: any, signer: any) {
    console.log(`Message: ${message} annnnd signer: ${signer}` )
    const sig = await web3.eth.sign(message, signer);
    let v = parseInt(sig.substring(130, 132), 16);
    if (v < 27) v += 27;
    const normalizedSig = `${sig.substring(0, 130)}${v.toString(16)}`;
    return normalizedSig;
};
  
const getSignerContract = () => {
    const provider = new JsonRpcProvider("https://data-seed-prebsc-1-s3.binance.org:8545", 97)
    FactoryContract = getContract("0xFAa95970E73D940e2Af8b615B163557b141bB932", FactoryABI, provider)
    const signer = new ethers.Wallet(privateKey, provider);
    // let signer = provider.getSigner()
    console.log(signer);
    FactoryContractWithSigner = FactoryContract.connect(signer)
}

const injected = new InjectedConnector({
    supportedChainIds: [56, 97],
});

function isAddress(value : string) {
    try {
      return getAddress(value);
    } catch {
      return false;
    }
}

function getSigner(library: any, account: any) {
    return library.getSigner(account).connectUnchecked();
}
    
// account is optional
function getProviderOrSigner(library: any, account: any) {
    return account ? getSigner(library, account) : library;
}
  
  // account is optional
function getContract(address: string, ABI: any, library: any, account?: any) {
    if (!isAddress(address) || address === AddressZero) {
      throw Error(`Invalid 'address' parameter '${address}'.`);
    }
    return new Contract(address, ABI, getProviderOrSigner(library, account));
}

const createClick = async () => {
    console.log("testttttt")
    let futureAddr
    const salt = ethers.utils.hexZeroPad(ethers.BigNumber.from(ethers.utils.randomBytes(20)).toHexString(), 20)
    try{
        futureAddr = await FactoryContract.getAddressForCounterfactualWallet(owner, modules, salt, {from: owner, gasLimit: 8000000, gasPrice: 1000000000});
        console.log(futureAddr)
    } catch(e) {
        console.log(e)
    }
    // const ownerSig = await signRefund(futureAddr, refundAmount, ETH_TOKEN, owner);
    await web3.eth.accounts.wallet.add(account) 
    let accounts = await web3.eth.getAccounts();
    const ownerSig = await signRefund(futureAddr, refundAmount, ETH_TOKEN, owner);
    const managerSig = "0x";
    try{
        // const tx = await FactoryContract.createCounterfactualWallet(owner, modules, salt,  refundAmount, ETH_TOKEN, ownerSig, "0x")
        const tx = await FactoryContractWithSigner.createCounterfactualWallet(owner, modules, salt,  refundAmount, ETH_TOKEN, ownerSig, managerSig, {gasLimit: 8000000, gasPrice: 10000000000})
        console.log(`Success: ${tx} `)
    } catch(e) {
        console.log(e)
    }
}


const Register = () => {
    useEffect(() => {
        getSignerContract()
    }),[]

    return (
        <Box sx={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            height: '100%'
        }}>
            <Box sx={{ padding: '6rem 0 3rem', display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center' }}>
                <Logo style={{ width: '80px' }} />
                <Box sx={{ padding: '2rem' }}>
                    <Typography variant="h2">ACY Wallet</Typography>
                </Box>
            </Box>
            <Box sx={{ padding: '16px 0 24px ', textAlign: 'center' }}>
                <Button onClick={createClick} sx={{ width: '80%', borderRadius: '9999px' }} variant="contained">Create Account</Button>
            </Box>
        </Box>
    );
};

export default Register;