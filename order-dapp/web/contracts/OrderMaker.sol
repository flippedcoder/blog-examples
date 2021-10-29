pragma solidity ^0.5.0;

contract OrderMaker {
  event NewOrder(uint256 orderId, string itemName, uint256 price);

  struct Order {
    string itemName;
    uint256 price;
    uint256 quantity;
  }

  Order[] public orders;

  // For each order id, we assign a user address
  // Looks like: {1 : 0x9j01rf09j09f2w}
  mapping(uint256 => address) public ordersFromUser;
  mapping(address => uint256) public userOrderCount;

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

    uint256 id = orders.length - 1;

    ordersFromUser[id] = msg.sender;

    userOrderCount[msg.sender] = userOrderCount[msg.sender]++;

    emit NewOrder(id, _itemName, _price);
  }

  // Allow anyone to create an order
  function createOrder(string memory _itemName, uint256 _quantity) public {
    uint256 itemPrice = _lookupPrice(_itemName);
    _createOrder(_itemName, _quantity, itemPrice);
  }
}
