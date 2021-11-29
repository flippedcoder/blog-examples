pragma solidity ^0.5.0;

contract Profile {
  uint256 public userCount = 0;

  struct User {
    uint256 id;
    string name;
    string role;
    string profileImg;
    bool isRegistered;
  }

  mapping(uint256 => User) public usersById;

  constructor() public {
    createUser(
      'Milecia',
      'admin',
      'https://res.cloudinary.com/milecia/image/upload/v1624811825/beach-360_p6u08j.jpg',
      true
    );
  }

  function createUser(
    string memory _name,
    string memory _role,
    string memory _profileImg,
    bool _isRegistered
  ) public {
    userCount++;

    usersById[userCount] = User(
      userCount,
      _name,
      _role,
      _profileImg,
      _isRegistered
    );
  }
}
