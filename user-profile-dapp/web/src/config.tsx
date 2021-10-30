export const PROFILE_ADDRESS = '0x6B0C22b32217980CA5B6C8b832fc99e795a44D6F'

export const PROFILE_ABI: any = [
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
        "type": "uint256"
      }
    ],
    "name": "addressById",
    "outputs": [
      {
        "name": "",
        "type": "address"
      }
    ],
    "payable": false,
    "stateMutability": "view",
    "type": "function",
    "signature": "0x87d3a024"
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
