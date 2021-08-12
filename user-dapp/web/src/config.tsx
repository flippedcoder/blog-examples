export const VIDEO_LIST_ADDRESS = '0xB02d68D0F3Fb3AE59844c108876e3da4D45624c4'

export const VIDEO_LIST_ABI: any = [
  {
    "contractName": "VideoList",
    "abi": [
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
    ],
    "bytecode": "0x60806040526000805534801561001457600080fd5b506100af608060405190810160405280605e81526020017f68747470733a2f2f7265732e636c6f7564696e6172792e636f6d2f6d696c656381526020017f69612f766964656f2f75706c6f61642f635f7061642c685f3336302c775f343881526020017f302c715f37302c64755f31302f656c657068616e745f686572642e6d703400008152506100b4640100000000026401000000009004565b61019b565b600080546001908101808355604080518082018252828152602080820187815293865284815291909420845181559151805192936100fa93908501929190910190610100565b50505050565b828054600181600116156101000203166002900490600052602060002090601f016020900481019282601f1061014157805160ff191683800117855561016e565b8280016001018555821561016e579182015b8281111561016e578251825591602001919060010190610153565b5061017a92915061017e565b5090565b61019891905b8082111561017a5760008155600101610184565b90565b610367806101aa6000396000f3fe60806040526004361061004b5763ffffffff7c01000000000000000000000000000000000000000000000000000000006000350416638e8789698114610050578063e6821bf514610105575b600080fd5b34801561005c57600080fd5b506101036004803603602081101561007357600080fd5b81019060208101813564010000000081111561008e57600080fd5b8201836020820111156100a057600080fd5b803590602001918460018302840111640100000000831117156100c257600080fd5b91908080601f0160208091040260200160405190810160405280939291908181526020018383808284376000920191909152509295506101ae945050505050565b005b34801561011157600080fd5b5061012f6004803603602081101561012857600080fd5b50356101fa565b6040518083815260200180602001828103825283818151815260200191508051906020019080838360005b8381101561017257818101518382015260200161015a565b50505050905090810190601f16801561019f5780820380516001836020036101000a031916815260200191505b50935050505060405180910390f35b600080546001908101808355604080518082018252828152602080820187815293865284815291909420845181559151805192936101f4939085019291909101906102a0565b50505050565b600160208181526000928352604092839020805481840180548651600296821615610100026000190190911695909504601f810185900485028601850190965285855290949193929091908301828280156102965780601f1061026b57610100808354040283529160200191610296565b820191906000526020600020905b81548152906001019060200180831161027957829003601f168201915b5050505050905082565b828054600181600116156101000203166002900490600052602060002090601f016020900481019282601f106102e157805160ff191683800117855561030e565b8280016001018555821561030e579182015b8281111561030e5782518255916020019190600101906102f3565b5061031a92915061031e565b5090565b61033891905b8082111561031a5760008155600101610324565b9056fea165627a7a723058208b4583e2e0268e693e5f343a15230f2d96f6f4a03accefe5fd8b69f5b38b6b030029",
    "deployedBytecode": "0x60806040526004361061004b5763ffffffff7c01000000000000000000000000000000000000000000000000000000006000350416638e8789698114610050578063e6821bf514610105575b600080fd5b34801561005c57600080fd5b506101036004803603602081101561007357600080fd5b81019060208101813564010000000081111561008e57600080fd5b8201836020820111156100a057600080fd5b803590602001918460018302840111640100000000831117156100c257600080fd5b91908080601f0160208091040260200160405190810160405280939291908181526020018383808284376000920191909152509295506101ae945050505050565b005b34801561011157600080fd5b5061012f6004803603602081101561012857600080fd5b50356101fa565b6040518083815260200180602001828103825283818151815260200191508051906020019080838360005b8381101561017257818101518382015260200161015a565b50505050905090810190601f16801561019f5780820380516001836020036101000a031916815260200191505b50935050505060405180910390f35b600080546001908101808355604080518082018252828152602080820187815293865284815291909420845181559151805192936101f4939085019291909101906102a0565b50505050565b600160208181526000928352604092839020805481840180548651600296821615610100026000190190911695909504601f810185900485028601850190965285855290949193929091908301828280156102965780601f1061026b57610100808354040283529160200191610296565b820191906000526020600020905b81548152906001019060200180831161027957829003601f168201915b5050505050905082565b828054600181600116156101000203166002900490600052602060002090601f016020900481019282601f106102e157805160ff191683800117855561030e565b8280016001018555821561030e579182015b8281111561030e5782518255916020019190600101906102f3565b5061031a92915061031e565b5090565b61033891905b8082111561031a5760008155600101610324565b9056fea165627a7a723058208b4583e2e0268e693e5f343a15230f2d96f6f4a03accefe5fd8b69f5b38b6b030029",
    "sourceMap": "25:416:1:-;;;66:1;48:19;;164:141;8:9:-1;5:2;;;30:1;27;20:12;5:2;164:141:1;191:109;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:11;;;:109;;;:::i;:::-;25:416;;309:130;367:10;:13;;;;;;;;;407:27;;;;;;;;;;;;;;;;;;386:18;;;;;;;;;;:48;;;;;;;;:18;;:48;;;;;;;;;;;;:::i;:::-;-1:-1:-1;;;;309:130:1:o;25:416::-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;-1:-1:-1;25:416:1;;;-1:-1:-1;25:416:1;:::i;:::-;;;:::o;:::-;;;;;;;;;;;;;;;;;;;;:::o;:::-;;;;;;;",
    "deployedSourceMap": "25:416:1:-;;;;;;;;;;;;;;;;;;;;;;;;;;;;309:130;;8:9:-1;5:2;;;30:1;27;20:12;5:2;309:130:1;;;;;;13:2:-1;8:3;5:11;2:2;;;29:1;26;19:12;2:2;309:130:1;;;;;;;;21:11:-1;5:28;;2:2;;;46:1;43;36:12;2:2;309:130:1;;35:9:-1;28:4;12:14;8:25;5:40;2:2;;;58:1;55;48:12;2:2;309:130:1;;;;;;100:9:-1;95:1;81:12;77:20;67:8;63:35;60:50;39:11;25:12;22:29;11:107;8:2;;;131:1;128;121:12;8:2;309:130:1;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;30:3:-1;22:6;14;1:33;99:1;81:16;;74:27;;;;-1:-1;309:130:1;;-1:-1:-1;309:130:1;;-1:-1:-1;;;;;309:130:1;;;123:36;;8:9:-1;5:2;;;30:1;27;20:12;5:2;123:36:1;;;;;;13:2:-1;8:3;5:11;2:2;;;29:1;26;19:12;2:2;-1:-1;123:36:1;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;23:1:-1;8:100;33:3;30:1;27:10;8:100;;;90:11;;;84:18;71:11;;;64:39;52:2;45:10;8:100;;;12:14;123:36:1;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;309:130;367:10;:13;;;;;;;;;407:27;;;;;;;;;;;;;;;;;;386:18;;;;;;;;;;:48;;;;;;;;:18;;:48;;;;;;;;;;;;:::i;:::-;-1:-1:-1;;;;309:130:1:o;123:36::-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;-1:-1:-1;;123:36:1;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::o;25:416::-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;-1:-1:-1;25:416:1;;;-1:-1:-1;25:416:1;:::i;:::-;;;:::o;:::-;;;;;;;;;;;;;;;;;;;;:::o",
    "source": "pragma solidity ^0.5.0;\n\ncontract VideoList {\n  uint videoCount = 0;\n\n  struct Video {\n    uint id;\n    string url;\n  }\n\n  mapping(uint => Video) public videos;\n\n  constructor() public {\n    createVideo(\"https://res.cloudinary.com/milecia/video/upload/c_pad,h_360,w_480,q_70,du_10/elephant_herd.mp4\");\n  }\n\n  function createVideo(string memory _content) public {\n    videoCount ++;\n    videos[videoCount] = Video(videoCount, _content);\n  }\n}\n",
    "sourcePath": "/Users/milecia/Repos/redwood_stuff/blog-examples/user-dapp/web/contracts/VideoList.sol",
    "ast": {
      "absolutePath": "/Users/milecia/Repos/redwood_stuff/blog-examples/user-dapp/web/contracts/VideoList.sol",
      "exportedSymbols": {
        "VideoList": [
          73
        ]
      },
      "id": 74,
      "nodeType": "SourceUnit",
      "nodes": [
        {
          "id": 34,
          "literals": [
            "solidity",
            "^",
            "0.5",
            ".0"
          ],
          "nodeType": "PragmaDirective",
          "src": "0:23:1"
        },
        {
          "baseContracts": [],
          "contractDependencies": [],
          "contractKind": "contract",
          "documentation": null,
          "fullyImplemented": true,
          "id": 73,
          "linearizedBaseContracts": [
            73
          ],
          "name": "VideoList",
          "nodeType": "ContractDefinition",
          "nodes": [
            {
              "constant": false,
              "id": 37,
              "name": "videoCount",
              "nodeType": "VariableDeclaration",
              "scope": 73,
              "src": "48:19:1",
              "stateVariable": true,
              "storageLocation": "default",
              "typeDescriptions": {
                "typeIdentifier": "t_uint256",
                "typeString": "uint256"
              },
              "typeName": {
                "id": 35,
                "name": "uint",
                "nodeType": "ElementaryTypeName",
                "src": "48:4:1",
                "typeDescriptions": {
                  "typeIdentifier": "t_uint256",
                  "typeString": "uint256"
                }
              },
              "value": {
                "argumentTypes": null,
                "hexValue": "30",
                "id": 36,
                "isConstant": false,
                "isLValue": false,
                "isPure": true,
                "kind": "number",
                "lValueRequested": false,
                "nodeType": "Literal",
                "src": "66:1:1",
                "subdenomination": null,
                "typeDescriptions": {
                  "typeIdentifier": "t_rational_0_by_1",
                  "typeString": "int_const 0"
                },
                "value": "0"
              },
              "visibility": "internal"
            },
            {
              "canonicalName": "VideoList.Video",
              "id": 42,
              "members": [
                {
                  "constant": false,
                  "id": 39,
                  "name": "id",
                  "nodeType": "VariableDeclaration",
                  "scope": 42,
                  "src": "91:7:1",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 38,
                    "name": "uint",
                    "nodeType": "ElementaryTypeName",
                    "src": "91:4:1",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 41,
                  "name": "url",
                  "nodeType": "VariableDeclaration",
                  "scope": 42,
                  "src": "104:10:1",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_storage_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 40,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "104:6:1",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "name": "Video",
              "nodeType": "StructDefinition",
              "scope": 73,
              "src": "72:47:1",
              "visibility": "public"
            },
            {
              "constant": false,
              "id": 46,
              "name": "videos",
              "nodeType": "VariableDeclaration",
              "scope": 73,
              "src": "123:36:1",
              "stateVariable": true,
              "storageLocation": "default",
              "typeDescriptions": {
                "typeIdentifier": "t_mapping$_t_uint256_$_t_struct$_Video_$42_storage_$",
                "typeString": "mapping(uint256 => struct VideoList.Video)"
              },
              "typeName": {
                "id": 45,
                "keyType": {
                  "id": 43,
                  "name": "uint",
                  "nodeType": "ElementaryTypeName",
                  "src": "131:4:1",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  }
                },
                "nodeType": "Mapping",
                "src": "123:22:1",
                "typeDescriptions": {
                  "typeIdentifier": "t_mapping$_t_uint256_$_t_struct$_Video_$42_storage_$",
                  "typeString": "mapping(uint256 => struct VideoList.Video)"
                },
                "valueType": {
                  "contractScope": null,
                  "id": 44,
                  "name": "Video",
                  "nodeType": "UserDefinedTypeName",
                  "referencedDeclaration": 42,
                  "src": "139:5:1",
                  "typeDescriptions": {
                    "typeIdentifier": "t_struct$_Video_$42_storage_ptr",
                    "typeString": "struct VideoList.Video"
                  }
                }
              },
              "value": null,
              "visibility": "public"
            },
            {
              "body": {
                "id": 53,
                "nodeType": "Block",
                "src": "185:120:1",
                "statements": [
                  {
                    "expression": {
                      "argumentTypes": null,
                      "arguments": [
                        {
                          "argumentTypes": null,
                          "hexValue": "68747470733a2f2f7265732e636c6f7564696e6172792e636f6d2f6d696c656369612f766964656f2f75706c6f61642f635f7061642c685f3336302c775f3438302c715f37302c64755f31302f656c657068616e745f686572642e6d7034",
                          "id": 50,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "kind": "string",
                          "lValueRequested": false,
                          "nodeType": "Literal",
                          "src": "203:96:1",
                          "subdenomination": null,
                          "typeDescriptions": {
                            "typeIdentifier": "t_stringliteral_14bed9b9e8377627376016d05274f44562436e6363d41732371405728d0c0d45",
                            "typeString": "literal_string \"https://res.cloudinary.com/milecia/video/upload/c_pad,h_360,w_480,q_70,du_10/elephant_herd.mp4\""
                          },
                          "value": "https://res.cloudinary.com/milecia/video/upload/c_pad,h_360,w_480,q_70,du_10/elephant_herd.mp4"
                        }
                      ],
                      "expression": {
                        "argumentTypes": [
                          {
                            "typeIdentifier": "t_stringliteral_14bed9b9e8377627376016d05274f44562436e6363d41732371405728d0c0d45",
                            "typeString": "literal_string \"https://res.cloudinary.com/milecia/video/upload/c_pad,h_360,w_480,q_70,du_10/elephant_herd.mp4\""
                          }
                        ],
                        "id": 49,
                        "name": "createVideo",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 72,
                        "src": "191:11:1",
                        "typeDescriptions": {
                          "typeIdentifier": "t_function_internal_nonpayable$_t_string_memory_ptr_$returns$__$",
                          "typeString": "function (string memory)"
                        }
                      },
                      "id": 51,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "kind": "functionCall",
                      "lValueRequested": false,
                      "names": [],
                      "nodeType": "FunctionCall",
                      "src": "191:109:1",
                      "typeDescriptions": {
                        "typeIdentifier": "t_tuple$__$",
                        "typeString": "tuple()"
                      }
                    },
                    "id": 52,
                    "nodeType": "ExpressionStatement",
                    "src": "191:109:1"
                  }
                ]
              },
              "documentation": null,
              "id": 54,
              "implemented": true,
              "kind": "constructor",
              "modifiers": [],
              "name": "",
              "nodeType": "FunctionDefinition",
              "parameters": {
                "id": 47,
                "nodeType": "ParameterList",
                "parameters": [],
                "src": "175:2:1"
              },
              "returnParameters": {
                "id": 48,
                "nodeType": "ParameterList",
                "parameters": [],
                "src": "185:0:1"
              },
              "scope": 73,
              "src": "164:141:1",
              "stateMutability": "nonpayable",
              "superFunction": null,
              "visibility": "public"
            },
            {
              "body": {
                "id": 71,
                "nodeType": "Block",
                "src": "361:78:1",
                "statements": [
                  {
                    "expression": {
                      "argumentTypes": null,
                      "id": 60,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "nodeType": "UnaryOperation",
                      "operator": "++",
                      "prefix": false,
                      "src": "367:13:1",
                      "subExpression": {
                        "argumentTypes": null,
                        "id": 59,
                        "name": "videoCount",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 37,
                        "src": "367:10:1",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "id": 61,
                    "nodeType": "ExpressionStatement",
                    "src": "367:13:1"
                  },
                  {
                    "expression": {
                      "argumentTypes": null,
                      "id": 69,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "leftHandSide": {
                        "argumentTypes": null,
                        "baseExpression": {
                          "argumentTypes": null,
                          "id": 62,
                          "name": "videos",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 46,
                          "src": "386:6:1",
                          "typeDescriptions": {
                            "typeIdentifier": "t_mapping$_t_uint256_$_t_struct$_Video_$42_storage_$",
                            "typeString": "mapping(uint256 => struct VideoList.Video storage ref)"
                          }
                        },
                        "id": 64,
                        "indexExpression": {
                          "argumentTypes": null,
                          "id": 63,
                          "name": "videoCount",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 37,
                          "src": "393:10:1",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "isConstant": false,
                        "isLValue": true,
                        "isPure": false,
                        "lValueRequested": true,
                        "nodeType": "IndexAccess",
                        "src": "386:18:1",
                        "typeDescriptions": {
                          "typeIdentifier": "t_struct$_Video_$42_storage",
                          "typeString": "struct VideoList.Video storage ref"
                        }
                      },
                      "nodeType": "Assignment",
                      "operator": "=",
                      "rightHandSide": {
                        "argumentTypes": null,
                        "arguments": [
                          {
                            "argumentTypes": null,
                            "id": 66,
                            "name": "videoCount",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 37,
                            "src": "413:10:1",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          },
                          {
                            "argumentTypes": null,
                            "id": 67,
                            "name": "_content",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 56,
                            "src": "425:8:1",
                            "typeDescriptions": {
                              "typeIdentifier": "t_string_memory_ptr",
                              "typeString": "string memory"
                            }
                          }
                        ],
                        "expression": {
                          "argumentTypes": [
                            {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            },
                            {
                              "typeIdentifier": "t_string_memory_ptr",
                              "typeString": "string memory"
                            }
                          ],
                          "id": 65,
                          "name": "Video",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 42,
                          "src": "407:5:1",
                          "typeDescriptions": {
                            "typeIdentifier": "t_type$_t_struct$_Video_$42_storage_ptr_$",
                            "typeString": "type(struct VideoList.Video storage pointer)"
                          }
                        },
                        "id": 68,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "kind": "structConstructorCall",
                        "lValueRequested": false,
                        "names": [],
                        "nodeType": "FunctionCall",
                        "src": "407:27:1",
                        "typeDescriptions": {
                          "typeIdentifier": "t_struct$_Video_$42_memory",
                          "typeString": "struct VideoList.Video memory"
                        }
                      },
                      "src": "386:48:1",
                      "typeDescriptions": {
                        "typeIdentifier": "t_struct$_Video_$42_storage",
                        "typeString": "struct VideoList.Video storage ref"
                      }
                    },
                    "id": 70,
                    "nodeType": "ExpressionStatement",
                    "src": "386:48:1"
                  }
                ]
              },
              "documentation": null,
              "id": 72,
              "implemented": true,
              "kind": "function",
              "modifiers": [],
              "name": "createVideo",
              "nodeType": "FunctionDefinition",
              "parameters": {
                "id": 57,
                "nodeType": "ParameterList",
                "parameters": [
                  {
                    "constant": false,
                    "id": 56,
                    "name": "_content",
                    "nodeType": "VariableDeclaration",
                    "scope": 72,
                    "src": "330:22:1",
                    "stateVariable": false,
                    "storageLocation": "memory",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_memory_ptr",
                      "typeString": "string"
                    },
                    "typeName": {
                      "id": 55,
                      "name": "string",
                      "nodeType": "ElementaryTypeName",
                      "src": "330:6:1",
                      "typeDescriptions": {
                        "typeIdentifier": "t_string_storage_ptr",
                        "typeString": "string"
                      }
                    },
                    "value": null,
                    "visibility": "internal"
                  }
                ],
                "src": "329:24:1"
              },
              "returnParameters": {
                "id": 58,
                "nodeType": "ParameterList",
                "parameters": [],
                "src": "361:0:1"
              },
              "scope": 73,
              "src": "309:130:1",
              "stateMutability": "nonpayable",
              "superFunction": null,
              "visibility": "public"
            }
          ],
          "scope": 74,
          "src": "25:416:1"
        }
      ],
      "src": "0:442:1"
    },
    "legacyAST": {
      "absolutePath": "/Users/milecia/Repos/redwood_stuff/blog-examples/user-dapp/web/contracts/VideoList.sol",
      "exportedSymbols": {
        "VideoList": [
          73
        ]
      },
      "id": 74,
      "nodeType": "SourceUnit",
      "nodes": [
        {
          "id": 34,
          "literals": [
            "solidity",
            "^",
            "0.5",
            ".0"
          ],
          "nodeType": "PragmaDirective",
          "src": "0:23:1"
        },
        {
          "baseContracts": [],
          "contractDependencies": [],
          "contractKind": "contract",
          "documentation": null,
          "fullyImplemented": true,
          "id": 73,
          "linearizedBaseContracts": [
            73
          ],
          "name": "VideoList",
          "nodeType": "ContractDefinition",
          "nodes": [
            {
              "constant": false,
              "id": 37,
              "name": "videoCount",
              "nodeType": "VariableDeclaration",
              "scope": 73,
              "src": "48:19:1",
              "stateVariable": true,
              "storageLocation": "default",
              "typeDescriptions": {
                "typeIdentifier": "t_uint256",
                "typeString": "uint256"
              },
              "typeName": {
                "id": 35,
                "name": "uint",
                "nodeType": "ElementaryTypeName",
                "src": "48:4:1",
                "typeDescriptions": {
                  "typeIdentifier": "t_uint256",
                  "typeString": "uint256"
                }
              },
              "value": {
                "argumentTypes": null,
                "hexValue": "30",
                "id": 36,
                "isConstant": false,
                "isLValue": false,
                "isPure": true,
                "kind": "number",
                "lValueRequested": false,
                "nodeType": "Literal",
                "src": "66:1:1",
                "subdenomination": null,
                "typeDescriptions": {
                  "typeIdentifier": "t_rational_0_by_1",
                  "typeString": "int_const 0"
                },
                "value": "0"
              },
              "visibility": "internal"
            },
            {
              "canonicalName": "VideoList.Video",
              "id": 42,
              "members": [
                {
                  "constant": false,
                  "id": 39,
                  "name": "id",
                  "nodeType": "VariableDeclaration",
                  "scope": 42,
                  "src": "91:7:1",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 38,
                    "name": "uint",
                    "nodeType": "ElementaryTypeName",
                    "src": "91:4:1",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 41,
                  "name": "url",
                  "nodeType": "VariableDeclaration",
                  "scope": 42,
                  "src": "104:10:1",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_storage_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 40,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "104:6:1",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "name": "Video",
              "nodeType": "StructDefinition",
              "scope": 73,
              "src": "72:47:1",
              "visibility": "public"
            },
            {
              "constant": false,
              "id": 46,
              "name": "videos",
              "nodeType": "VariableDeclaration",
              "scope": 73,
              "src": "123:36:1",
              "stateVariable": true,
              "storageLocation": "default",
              "typeDescriptions": {
                "typeIdentifier": "t_mapping$_t_uint256_$_t_struct$_Video_$42_storage_$",
                "typeString": "mapping(uint256 => struct VideoList.Video)"
              },
              "typeName": {
                "id": 45,
                "keyType": {
                  "id": 43,
                  "name": "uint",
                  "nodeType": "ElementaryTypeName",
                  "src": "131:4:1",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  }
                },
                "nodeType": "Mapping",
                "src": "123:22:1",
                "typeDescriptions": {
                  "typeIdentifier": "t_mapping$_t_uint256_$_t_struct$_Video_$42_storage_$",
                  "typeString": "mapping(uint256 => struct VideoList.Video)"
                },
                "valueType": {
                  "contractScope": null,
                  "id": 44,
                  "name": "Video",
                  "nodeType": "UserDefinedTypeName",
                  "referencedDeclaration": 42,
                  "src": "139:5:1",
                  "typeDescriptions": {
                    "typeIdentifier": "t_struct$_Video_$42_storage_ptr",
                    "typeString": "struct VideoList.Video"
                  }
                }
              },
              "value": null,
              "visibility": "public"
            },
            {
              "body": {
                "id": 53,
                "nodeType": "Block",
                "src": "185:120:1",
                "statements": [
                  {
                    "expression": {
                      "argumentTypes": null,
                      "arguments": [
                        {
                          "argumentTypes": null,
                          "hexValue": "68747470733a2f2f7265732e636c6f7564696e6172792e636f6d2f6d696c656369612f766964656f2f75706c6f61642f635f7061642c685f3336302c775f3438302c715f37302c64755f31302f656c657068616e745f686572642e6d7034",
                          "id": 50,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "kind": "string",
                          "lValueRequested": false,
                          "nodeType": "Literal",
                          "src": "203:96:1",
                          "subdenomination": null,
                          "typeDescriptions": {
                            "typeIdentifier": "t_stringliteral_14bed9b9e8377627376016d05274f44562436e6363d41732371405728d0c0d45",
                            "typeString": "literal_string \"https://res.cloudinary.com/milecia/video/upload/c_pad,h_360,w_480,q_70,du_10/elephant_herd.mp4\""
                          },
                          "value": "https://res.cloudinary.com/milecia/video/upload/c_pad,h_360,w_480,q_70,du_10/elephant_herd.mp4"
                        }
                      ],
                      "expression": {
                        "argumentTypes": [
                          {
                            "typeIdentifier": "t_stringliteral_14bed9b9e8377627376016d05274f44562436e6363d41732371405728d0c0d45",
                            "typeString": "literal_string \"https://res.cloudinary.com/milecia/video/upload/c_pad,h_360,w_480,q_70,du_10/elephant_herd.mp4\""
                          }
                        ],
                        "id": 49,
                        "name": "createVideo",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 72,
                        "src": "191:11:1",
                        "typeDescriptions": {
                          "typeIdentifier": "t_function_internal_nonpayable$_t_string_memory_ptr_$returns$__$",
                          "typeString": "function (string memory)"
                        }
                      },
                      "id": 51,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "kind": "functionCall",
                      "lValueRequested": false,
                      "names": [],
                      "nodeType": "FunctionCall",
                      "src": "191:109:1",
                      "typeDescriptions": {
                        "typeIdentifier": "t_tuple$__$",
                        "typeString": "tuple()"
                      }
                    },
                    "id": 52,
                    "nodeType": "ExpressionStatement",
                    "src": "191:109:1"
                  }
                ]
              },
              "documentation": null,
              "id": 54,
              "implemented": true,
              "kind": "constructor",
              "modifiers": [],
              "name": "",
              "nodeType": "FunctionDefinition",
              "parameters": {
                "id": 47,
                "nodeType": "ParameterList",
                "parameters": [],
                "src": "175:2:1"
              },
              "returnParameters": {
                "id": 48,
                "nodeType": "ParameterList",
                "parameters": [],
                "src": "185:0:1"
              },
              "scope": 73,
              "src": "164:141:1",
              "stateMutability": "nonpayable",
              "superFunction": null,
              "visibility": "public"
            },
            {
              "body": {
                "id": 71,
                "nodeType": "Block",
                "src": "361:78:1",
                "statements": [
                  {
                    "expression": {
                      "argumentTypes": null,
                      "id": 60,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "nodeType": "UnaryOperation",
                      "operator": "++",
                      "prefix": false,
                      "src": "367:13:1",
                      "subExpression": {
                        "argumentTypes": null,
                        "id": 59,
                        "name": "videoCount",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 37,
                        "src": "367:10:1",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "id": 61,
                    "nodeType": "ExpressionStatement",
                    "src": "367:13:1"
                  },
                  {
                    "expression": {
                      "argumentTypes": null,
                      "id": 69,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "leftHandSide": {
                        "argumentTypes": null,
                        "baseExpression": {
                          "argumentTypes": null,
                          "id": 62,
                          "name": "videos",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 46,
                          "src": "386:6:1",
                          "typeDescriptions": {
                            "typeIdentifier": "t_mapping$_t_uint256_$_t_struct$_Video_$42_storage_$",
                            "typeString": "mapping(uint256 => struct VideoList.Video storage ref)"
                          }
                        },
                        "id": 64,
                        "indexExpression": {
                          "argumentTypes": null,
                          "id": 63,
                          "name": "videoCount",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 37,
                          "src": "393:10:1",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "isConstant": false,
                        "isLValue": true,
                        "isPure": false,
                        "lValueRequested": true,
                        "nodeType": "IndexAccess",
                        "src": "386:18:1",
                        "typeDescriptions": {
                          "typeIdentifier": "t_struct$_Video_$42_storage",
                          "typeString": "struct VideoList.Video storage ref"
                        }
                      },
                      "nodeType": "Assignment",
                      "operator": "=",
                      "rightHandSide": {
                        "argumentTypes": null,
                        "arguments": [
                          {
                            "argumentTypes": null,
                            "id": 66,
                            "name": "videoCount",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 37,
                            "src": "413:10:1",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          },
                          {
                            "argumentTypes": null,
                            "id": 67,
                            "name": "_content",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 56,
                            "src": "425:8:1",
                            "typeDescriptions": {
                              "typeIdentifier": "t_string_memory_ptr",
                              "typeString": "string memory"
                            }
                          }
                        ],
                        "expression": {
                          "argumentTypes": [
                            {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            },
                            {
                              "typeIdentifier": "t_string_memory_ptr",
                              "typeString": "string memory"
                            }
                          ],
                          "id": 65,
                          "name": "Video",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 42,
                          "src": "407:5:1",
                          "typeDescriptions": {
                            "typeIdentifier": "t_type$_t_struct$_Video_$42_storage_ptr_$",
                            "typeString": "type(struct VideoList.Video storage pointer)"
                          }
                        },
                        "id": 68,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "kind": "structConstructorCall",
                        "lValueRequested": false,
                        "names": [],
                        "nodeType": "FunctionCall",
                        "src": "407:27:1",
                        "typeDescriptions": {
                          "typeIdentifier": "t_struct$_Video_$42_memory",
                          "typeString": "struct VideoList.Video memory"
                        }
                      },
                      "src": "386:48:1",
                      "typeDescriptions": {
                        "typeIdentifier": "t_struct$_Video_$42_storage",
                        "typeString": "struct VideoList.Video storage ref"
                      }
                    },
                    "id": 70,
                    "nodeType": "ExpressionStatement",
                    "src": "386:48:1"
                  }
                ]
              },
              "documentation": null,
              "id": 72,
              "implemented": true,
              "kind": "function",
              "modifiers": [],
              "name": "createVideo",
              "nodeType": "FunctionDefinition",
              "parameters": {
                "id": 57,
                "nodeType": "ParameterList",
                "parameters": [
                  {
                    "constant": false,
                    "id": 56,
                    "name": "_content",
                    "nodeType": "VariableDeclaration",
                    "scope": 72,
                    "src": "330:22:1",
                    "stateVariable": false,
                    "storageLocation": "memory",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_memory_ptr",
                      "typeString": "string"
                    },
                    "typeName": {
                      "id": 55,
                      "name": "string",
                      "nodeType": "ElementaryTypeName",
                      "src": "330:6:1",
                      "typeDescriptions": {
                        "typeIdentifier": "t_string_storage_ptr",
                        "typeString": "string"
                      }
                    },
                    "value": null,
                    "visibility": "internal"
                  }
                ],
                "src": "329:24:1"
              },
              "returnParameters": {
                "id": 58,
                "nodeType": "ParameterList",
                "parameters": [],
                "src": "361:0:1"
              },
              "scope": 73,
              "src": "309:130:1",
              "stateMutability": "nonpayable",
              "superFunction": null,
              "visibility": "public"
            }
          ],
          "scope": 74,
          "src": "25:416:1"
        }
      ],
      "src": "0:442:1"
    },
    "compiler": {
      "name": "solc",
      "version": "0.5.0+commit.1d4f565a.Emscripten.clang"
    },
    "networks": {
      "5777": {
        "events": {},
        "links": {},
        "address": "0xB02d68D0F3Fb3AE59844c108876e3da4D45624c4",
        "transactionHash": "0x44d5ff52367879f5e1b935ad624e120ae26ddc8030b8007b86200f67d3745ca5"
      }
    },
    "schemaVersion": "3.0.1",
    "updatedAt": "2021-08-12T01:51:03.490Z",
    "devdoc": {
      "methods": {}
    },
    "userdoc": {
      "methods": {}
    }
  }
]
