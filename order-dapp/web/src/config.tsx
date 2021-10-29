// Get the contract address by running this in the web directory
// truffle console
// vl = await VideoList.deployed()
// vl.address
export const ORDER_MAKER_ADDRESS = '0xD6Ea791eae2dF323EF7e689F2C64C2D9Dda01eea'

// This is the abi part of the VideoList.json
export const ORDER_MAKER_ABI: any = [
  {
    "constant": true,
    "inputs": [
      {
        "name": "",
        "type": "uint256"
      }
    ],
    "name": "ordersFromUser",
    "outputs": [
      {
        "name": "",
        "type": "address"
      }
    ],
    "payable": false,
    "stateMutability": "view",
    "type": "function",
    "signature": "0x61caab7f"
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
