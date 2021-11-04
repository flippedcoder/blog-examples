pragma solidity ^0.5.0;

contract OrderMaker {
  struct Order {
    string itemName;
    uint256 price;
    uint256 quantity;
  }

  Order[] private orders;

  constructor() public {
    _createOrder('Jalapeno', 9, 3);
  }

  mapping(address => Order) public ordersByUser;
  mapping(uint256 => Order) public ordersById;

  function _lookupPrice(string memory _itemName)
    private
    pure
    returns (uint256 price)
  {
    if (
      keccak256(abi.encodePacked(_itemName)) ==
      keccak256(abi.encodePacked('Jalapeno'))
    ) {
      return 9;
    } else if (
      keccak256(abi.encodePacked(_itemName)) ==
      keccak256(abi.encodePacked('Feta'))
    ) {
      return 12;
    } else if (
      keccak256(abi.encodePacked(_itemName)) ==
      keccak256(abi.encodePacked('Water'))
    ) {
      return 18;
    } else if (
      keccak256(abi.encodePacked(_itemName)) ==
      keccak256(abi.encodePacked('Lemon'))
    ) {
      return 15;
    } else {
      return 5;
    }
  }

  function _createOrder(
    string memory _itemName,
    uint256 _quantity,
    uint256 _price
  ) internal {
    orders.push(Order(_itemName, _price, _quantity));

    uint256 id = orders.length;

    ordersByUser[msg.sender] = orders[id - 1];

    ordersById[id] = orders[id - 1];
  }

  // Allow anyone to create an order
  function createOrder(string memory _itemName, uint256 _quantity) public payable {
    require(msg.value == 0.001 ether);
    uint256 itemPrice = _lookupPrice(_itemName);
    _createOrder(_itemName, _quantity, itemPrice);
  }
}
