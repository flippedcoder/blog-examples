// Get the contract address by running this in the web directory
// truffle console
// vl = await VideoList.deployed()
// vl.address
export const ORDER_MAKER_ADDRESS = '0xBFEf0E35DD9976D31b231CC9EC423A2aD5eEdfCA'

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
    "name": "ordersById",
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
    "signature": "0x2c4cb11a"
  },
  {
    "constant": true,
    "inputs": [
      {
        "name": "",
        "type": "address"
      }
    ],
    "name": "ordersByUser",
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
    "signature": "0x933f7ae8"
  },
  {
    "inputs": [],
    "payable": false,
    "stateMutability": "nonpayable",
    "type": "constructor",
    "signature": "constructor"
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
    "payable": true,
    "stateMutability": "payable",
    "type": "function",
    "signature": "0x97de706f"
  }
]
