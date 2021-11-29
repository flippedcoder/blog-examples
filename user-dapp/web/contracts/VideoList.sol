pragma solidity ^0.5.0;

contract VideoList {
  uint public videoCount = 0;

  struct Video {
    uint id;
    string url;
  }

  mapping(uint => Video) public videos;

  constructor() public {
    createVideo("https://res.cloudinary.com/milecia/video/upload/c_pad,h_360,w_480,q_70,du_10/elephant_herd.mp4");
  }

  function createVideo(string memory _content) public {
    videoCount ++;
    videos[videoCount] = Video(videoCount, _content);
  }
}
