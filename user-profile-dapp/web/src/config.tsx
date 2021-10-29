export const PROFILE_ADDRESS = '0x47D66545C77B378f946EbA9Ac9AfDFb743D62de2'

export const PROFILE_ABI = [
  {
    "constant": true,
    "inputs": [],
    "name": "userCount",
    "outputs": [
      {
        "name": "",
        "type": "uint256"
      }
    ],
    "payable": false,
    "stateMutability": "view",
    "type": "function",
    "signature": "0x07973ccf"
  },
  {
    "constant": true,
    "inputs": [
      {
        "name": "",
        "type": "uint256"
      }
    ],
    "name": "usersById",
    "outputs": [
      {
        "name": "id",
        "type": "uint256"
      },
      {
        "name": "name",
        "type": "string"
      },
      {
        "name": "role",
        "type": "string"
      },
      {
        "name": "profileImg",
        "type": "string"
      },
      {
        "name": "isRegistered",
        "type": "bool"
      }
    ],
    "payable": false,
    "stateMutability": "view",
    "type": "function",
    "signature": "0x426b5382"
  },
  {
    "constant": true,
    "inputs": [
      {
        "name": "",
        "type": "address"
      }
    ],
    "name": "usersByAddress",
    "outputs": [
      {
        "name": "id",
        "type": "uint256"
      },
      {
        "name": "name",
        "type": "string"
      },
      {
        "name": "role",
        "type": "string"
      },
      {
        "name": "profileImg",
        "type": "string"
      },
      {
        "name": "isRegistered",
        "type": "bool"
      }
    ],
    "payable": false,
    "stateMutability": "view",
    "type": "function",
    "signature": "0x6bf693c4"
  },
  {
    "inputs": [],
    "payable": false,
    "stateMutability": "nonpayable",
    "type": "constructor",
    "signature": "constructor"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "name": "userId",
        "type": "uint256"
      },
      {
        "indexed": false,
        "name": "name",
        "type": "string"
      },
      {
        "indexed": false,
        "name": "profileImg",
        "type": "string"
      },
      {
        "indexed": false,
        "name": "role",
        "type": "string"
      }
    ],
    "name": "NewProfile",
    "type": "event",
    "signature": "0x12225c2549977681619cd7fc7e95a20e224e85d912926c995db1b10ffb4cfdeb"
  },
  {
    "constant": false,
    "inputs": [
      {
        "name": "_name",
        "type": "string"
      },
      {
        "name": "_role",
        "type": "string"
      },
      {
        "name": "_profileImg",
        "type": "string"
      },
      {
        "name": "_isRegistered",
        "type": "bool"
      }
    ],
    "name": "createUser",
    "outputs": [],
    "payable": false,
    "stateMutability": "nonpayable",
    "type": "function",
    "signature": "0xe4f3ad95"
  },
  {
    "constant": false,
    "inputs": [
      {
        "name": "_userId",
        "type": "uint256"
      },
      {
        "name": "_isRegistered",
        "type": "bool"
      }
    ],
    "name": "updateRegistration",
    "outputs": [],
    "payable": false,
    "stateMutability": "nonpayable",
    "type": "function",
    "signature": "0x29fb98b5"
  }
]
