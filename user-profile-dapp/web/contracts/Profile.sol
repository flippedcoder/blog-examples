pragma solidity ^0.8.0;

contract Profile {
  uint256 public userCount = 0;

  struct User {
    uint256 id;
    string name;
    string role;
    string profileImg;
    bool isRegistered;
  }

  mapping(uint256 => User) public users;

  constructor() public {
    createUser(
      'Milecia',
      'admin',
      'https://res.cloudinary.com/milecia/video/upload/c_pad,h_360,w_480,q_70,du_10/elephant_herd.mp4',
      true
    );
  }

  function createUser(
    string memory name,
    string memory role,
    string memory profileImg,
    bool isRegistered
  ) public {
    userCount ++;
    users[userCount] = User(userCount, name, role, profileImg, isRegistered);
  }
}
