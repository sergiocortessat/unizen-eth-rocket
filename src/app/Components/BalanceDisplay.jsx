import React from "react";

const BalanceDisplay = ({ stakingBalance, nativeBalance, tokenBalance }) => {
  return (
    // <div classNameName="border p-4 rounded-md shadow-md">
    //   <h2 classNameName="text-xl font-semibold mb-2">Balances</h2>
    //   <p>Staking Balance: {stakingBalance} RPL</p>
    //   <p>Native Balance: {nativeBalance} ETH</p>
    //   <p>Rocket Pool Token Balance: {tokenBalance} RPL</p>
    // </div>

    <div className="w-full max-w-md p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-8 dark:bg-gray-800 dark:border-gray-700 mx-auto">
      <div className="flex items-center justify-between mb-4">
        <h5 className="text-xl font-bold leading-none text-gray-900 dark:text-white mx-auto">
          Balances
        </h5>
      </div>
      <div className="flow-root">
        <ul role="list" className="divide-y divide-gray-200 dark:divide-gray-700">
          <li className="py-3 sm:py-4">
            <div className="flex items-center space-x-4">
              <div className="flex-shrink-0">
                {/* <img
                  className="w-8 h-8 rounded-full"
                  src="/docs/images/people/profile-picture-1.jpg"
                  alt="Neil image"
                /> */}
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-sm font-medium text-gray-900 truncate dark:text-white">
                  Staking Balance
                </p>
              </div>
              <div className="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">
                {stakingBalance} RPL
              </div>
            </div>
          </li>
          <li className="py-3 sm:py-4">
            <div className="flex items-center space-x-4">
              <div className="flex-shrink-0">
                {/* <img
                  className="w-8 h-8 rounded-full"
                  src="/docs/images/people/profile-picture-3.jpg"
                  alt="Bonnie image"
                /> */}
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-sm font-medium text-gray-900 truncate dark:text-white">
                  Native Balance
                </p>
              </div>
              <div className="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">
                {nativeBalance} ETH
              </div>
            </div>
          </li>
          <li className="py-3 sm:py-4">
            <div className="flex items-center space-x-4">
              <div className="flex-shrink-0">
                {/* <img
                  className="w-8 h-8 rounded-full"
                  src="/docs/images/people/profile-picture-2.jpg"
                  alt="Michael image"
                /> */}
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-sm font-medium text-gray-900 truncate dark:text-white">
                  Rocket Pool Token Balance
                </p>
              </div>
              <div className="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">
                {tokenBalance} RPL
              </div>
            </div>
          </li>
          <li className="py-3 sm:py-4">
            <div className="flex items-center space-x-4">
              <div className="flex-shrink-0">
                {/* <img
                  className="w-8 h-8 rounded-full"
                  src="/docs/images/people/profile-picture-4.jpg"
                  alt="Lana image"
                /> */}
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-sm font-medium text-gray-900 truncate dark:text-white">
                  Lana Byrd
                </p>
                <p className="text-sm text-gray-500 truncate dark:text-gray-400">
                  email@windster.com
                </p>
              </div>
              <div className="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">
                $367
              </div>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default BalanceDisplay;
