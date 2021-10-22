export const PROFILE_ADDRESS = '0xA22b0A4D91Fd883c9F72f6A2402c61D02EcedED1'

export const PROFILE_ABI = [
  {
    "inputs": [],
    "stateMutability": "nonpayable",
    "type": "constructor"
  },
  {
    "inputs": [],
    "name": "userCount",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function",
    "constant": true
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "name": "users",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "id",
        "type": "uint256"
      },
      {
        "internalType": "string",
        "name": "name",
        "type": "string"
      },
      {
        "internalType": "string",
        "name": "role",
        "type": "string"
      },
      {
        "internalType": "string",
        "name": "profileImg",
        "type": "string"
      },
      {
        "internalType": "bool",
        "name": "isRegistered",
        "type": "bool"
      }
    ],
    "stateMutability": "view",
    "type": "function",
    "constant": true
  },
  {
    "inputs": [
      {
        "internalType": "string",
        "name": "name",
        "type": "string"
      },
      {
        "internalType": "string",
        "name": "role",
        "type": "string"
      },
      {
        "internalType": "string",
        "name": "profileImg",
        "type": "string"
      },
      {
        "internalType": "bool",
        "name": "isRegistered",
        "type": "bool"
      }
    ],
    "name": "createUser",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  }
]
