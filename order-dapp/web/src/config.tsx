// Get the contract address by running this in the web directory
// truffle console
// vl = await VideoList.deployed()
// vl.address
export const ORDER_MAKER_ADDRESS = '0xd28Ea5280d125183C28A4aC87bcef30Cd87e37Fb'

// This is the abi part of the VideoList.json
export const ORDER_MAKER_ABI: any = [
  {
    "constant": true,
    "inputs": [
      {
        "name": "",
        "type": "address"
      }
    ],
    "name": "ordersFromUser",
    "outputs": [
      {
        "name": "itemName",
        "type": "string"
      },
      {
        "name": "price",
        "type": "uint256"
      },
      {
        "name": "quantity",
        "type": "uint256"
      }
    ],
    "payable": false,
    "stateMutability": "view",
    "type": "function",
    "signature": "0x96a30f12"
  },
  {
    "constant": true,
    "inputs": [
      {
        "name": "",
        "type": "uint256"
      }
    ],
    "name": "orders",
    "outputs": [
      {
        "name": "itemName",
        "type": "string"
      },
      {
        "name": "price",
        "type": "uint256"
      },
      {
        "name": "quantity",
        "type": "uint256"
      }
    ],
    "payable": false,
    "stateMutability": "view",
    "type": "function",
    "signature": "0xa85c38ef"
  },
  {
    "constant": true,
    "inputs": [
      {
        "name": "",
        "type": "address"
      }
    ],
    "name": "userOrderCount",
    "outputs": [
      {
        "name": "",
        "type": "uint256"
      }
    ],
    "payable": false,
    "stateMutability": "view",
    "type": "function",
    "signature": "0xec4eb4f9"
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
        "name": "orderId",
        "type": "uint256"
      },
      {
        "indexed": false,
        "name": "itemName",
        "type": "string"
      },
      {
        "indexed": false,
        "name": "price",
        "type": "uint256"
      }
    ],
    "name": "NewOrder",
    "type": "event",
    "signature": "0x259c921abca4850f591a4f6c2bb26564b6e363f6e1a47340f60ae5df3199cb4a"
  },
  {
    "constant": false,
    "inputs": [
      {
        "name": "_itemName",
        "type": "string"
      },
      {
        "name": "_quantity",
        "type": "uint256"
      }
    ],
    "name": "createOrder",
    "outputs": [],
    "payable": false,
    "stateMutability": "nonpayable",
    "type": "function",
    "signature": "0x97de706f"
  }
]
