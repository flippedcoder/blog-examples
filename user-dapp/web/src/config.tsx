// Get the contract address by running this in the web directory
// truffle console
// vl = await VideoList.deployed()
// vl.address
export const VIDEO_LIST_ADDRESS = '0x82293fe0BE6cCbA6Eb9bd6d5824fC6ACeB6d3957'

// This is the abi part of the VideoList.json
export const VIDEO_LIST_ABI: any = [
  {
    "constant": true,
    "inputs": [],
    "name": "videoCount",
    "outputs": [
      {
        "name": "",
        "type": "uint256"
      }
    ],
    "payable": false,
    "stateMutability": "view",
    "type": "function",
    "signature": "0xc61b5f4c"
  },
  {
    "constant": true,
    "inputs": [
      {
        "name": "",
        "type": "uint256"
      }
    ],
    "name": "videos",
    "outputs": [
      {
        "name": "id",
        "type": "uint256"
      },
      {
        "name": "url",
        "type": "string"
      }
    ],
    "payable": false,
    "stateMutability": "view",
    "type": "function",
    "signature": "0xe6821bf5"
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
        "name": "_content",
        "type": "string"
      }
    ],
    "name": "createVideo",
    "outputs": [],
    "payable": false,
    "stateMutability": "nonpayable",
    "type": "function",
    "signature": "0x8e878969"
  }
]
