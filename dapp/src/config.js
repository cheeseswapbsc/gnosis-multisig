var txDefaultOrig =
{
  websites: {
    "wallet": ".",
    "gnosis": "#",
    "ethGasStation": "https://safe-relay.gnosis.pm/api/v1/gas-station/"
  },
  resources : {
    "termsOfUse": "#",
    "privacyPolicy": "#",
    "imprint": "#"
  },
  gasLimit: 3141592,
  gasPrice: 18000000000,
  ethereumNode: "https://bsc-dataseed2.defibit.io",
  connectionChecker: {
    method : "OPTIONS",
    url : "https://www.google.com",
    checkInterval: 5000
  },
  accountsChecker: {
    checkInterval: 5000
  },
  transactionChecker: {
    checkInterval: 15000
  },
  wallet: "injected",
  defaultChainID: null,
  // Mainnet
  walletFactoryAddress: "0x13C3f6576d68f6c774cE054B54409C4BbfdbD491",
  tokens: [
    {
      'address': '0xbb4CdB9CBd36B01bD1cBaEBF2De08d9173bc095c',
      'name': 'WBNB Token',
      'symbol': 'WBNB',
      'decimals': 18
    },
    {
      'address': '0x5EA29eEe799aA7cC379FdE5cf370BC24f2Ea7c81',
      'name': 'Keep3r BSC Network',
      'symbol': 'KP3RB',
      'decimals': 18
    },
    {
      'address': '0x2cc26dd730F548dc4ac291ae7D84a0C96980d2cB',
      'name': 'PizzaSwap',
      'symbol': 'PIZZA',
      'decimals': 18
    },
    {
      'address': '0x4375eA687330A95D42383Ef18AD3ea8C4Db7224d',
      'name': 'Pasta Bar',
      'symbol': 'PASTA',
      'decimals': 18
    },
    {
      'address': '0x250632378E573c6Be1AC2f97Fcdf00515d0Aa91B',
      'name': 'Binance Beacon ETH',
      'symbol': 'BETH',
      'decimals': 18
    },
    {
      'address': '0xaDD8A06fd58761A5047426e160B2B88AD3B9D464',
      'name': 'cheesemaker.farm',
      'symbol': 'CHS',
      'decimals': 18
    }
    ]
};

if (isElectron) {
  txDefaultOrig.wallet = "remotenode";
}

var txDefault = {
  ethereumNodes : [
    {
      url : "https://bsc-dataseed1.ninicoin.io",
      name: "Remote BSC"
    },
    {
      url : "#",
      name: "Remote Ropsten"
    },
    {
      url : "#",
      name: "Remote Kovan"
    },
    {
      url : "#",
      name: "Remote Rinkeby"
    },
    {
      url : "http://localhost:8545",
      name: "Local node"
    }
  ],
  walletFactoryAddresses: {
    'mainnet': {
      name: 'BSC',
      address: txDefaultOrig.walletFactoryAddress
    },
    'ropsten': {
      name: 'Ropsten',
      address: '#'
    },
    'kovan': {
      name: 'Kovan',
      address: '#'
    },
    'rinkeby': {
      name: 'Rinkeby',
      address: '#'
    },
    'privatenet': {
      name: 'BSC',
      address: '0x13C3f6576d68f6c774cE054B54409C4BbfdbD491'
    }
  }
};

var oldWalletFactoryAddresses = [
  ("#").toLowerCase(),
  ("#").toLowerCase(),
  ("#").toLowerCase()
];

/**
* Update the default wallet factory address in local storage
*/
function checkWalletFactoryAddress() {
  var userConfig = JSON.parse(localStorage.getItem("userConfig"));

  if (userConfig && oldWalletFactoryAddresses.indexOf(userConfig.walletFactoryAddress.toLowerCase()) >= 0) {
    userConfig.walletFactoryAddress = txDefaultOrig.walletFactoryAddress;
    localStorage.setItem("userConfig", JSON.stringify(userConfig));
  }
}

/**
* Reload configuration
*/
function loadConfiguration () {
  var userConfig = JSON.parse(localStorage.getItem("userConfig"));
  Object.assign(txDefault, txDefaultOrig, userConfig);
}

checkWalletFactoryAddress();
loadConfiguration();
