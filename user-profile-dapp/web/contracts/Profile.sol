pragma solidity ^0.5.0;

contract Profile {
  address private _owner;
  uint256 public userCount = 0;

  event NewProfile(uint256 userId, string name, string profileImg, string role);

  struct User {
    uint256 id;
    string name;
    string role;
    string profileImg;
    bool isRegistered;
  }

  mapping(address => User) public usersByAddress;
  mapping(uint256 => User) public usersById;

  constructor() public {
    _owner = msg.sender;

    createUser(
      'Milecia',
      'admin',
      'https://res.cloudinary.com/milecia/video/upload/c_pad,h_360,w_480,q_70,du_10/elephant_herd.mp4',
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

    usersByAddress[msg.sender] = User(
      userCount,
      _name,
      _role,
      _profileImg,
      _isRegistered
    );

    emit NewProfile(userCount, _name, _role, _profileImg);
  }

  // Check if user is the contract owner
  function _isOwner(address _address) private view returns (bool isOwner) {
    if (_owner == _address) {
      return true;
    }
    return false;
  }

  // Allow the owner to chaange registration status
  function updateRegistration(uint256 _userId, bool _isRegistered) public {
    require(msg.sender == _owner, 'Only the owner can change registration.');
    usersById[_userId].isRegistered = _isRegistered;
  }
}
