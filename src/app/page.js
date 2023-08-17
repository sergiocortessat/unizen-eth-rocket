"use client"
import React, { useState } from 'react';
import { fetchStakingBalance, fetchNativeBalance, fetchTokenBalance, main } from '../utils/contract';
import BalanceDisplay from './Components/BalanceDisplay';
import NavBar from './Components/NavBar'
import InputForm from './Components/Input';

const Home = () => {
  const [address, setAddress] = useState('');
  const [stakingBalance, setStakingBalance] = useState(0);
  const [nativeBalance, setNativeBalance] = useState(0);
  const [tokenBalance, setTokenBalance] = useState(0);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    if (!address) return alert('Please enter an address');
    e.preventDefault();
    setLoading(true);
    const stakingBal = await fetchStakingBalance(address);
    const nativeBal = await fetchNativeBalance(address);
    const tokenBal = await fetchTokenBalance(address);
    setLoading(false);
    setStakingBalance(stakingBal);
    setNativeBalance(nativeBal);
    setTokenBalance(tokenBal);
    console.log('satkingBal', stakingBal);
    console.log('nativeBal', nativeBal);
    console.log('tokenBal', tokenBal);
  };

  const handleInputChange = async (e) => {
    const value = e.target.value;
    // console.log('yes');
    setAddress(value);
  };
console.log(address);

  if (loading) {
    return (
      <h1>loading</h1>
    )
  }
  return (
      <div className="container mx-auto p-4 text-center">
        <NavBar />
        <h1 className="text-3xl font-semibold mb-4">Rocket Pool Balance Checker</h1>
        <InputForm handleSubmit={handleSubmit} handleInputChange={handleInputChange} address={address}/>
        {/* <form onSubmit={handleSubmit} className="mb-4">
        <input
          type="text"
          placeholder="Enter account address"
          value={''}
          onChange={handleInputChange}
          className="p-2 border rounded-md text-black"
        />
        <button type="submit" className="ml-2 bg-blue-500 text-white px-4 py-2 rounded-md">
          Get Balances
        </button>
      </form> */}
        <BalanceDisplay stakingBalance={stakingBalance} nativeBalance={nativeBalance} tokenBalance={tokenBalance} />
      </div>
  );
};

export default Home;
