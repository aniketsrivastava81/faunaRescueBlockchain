pragma solidity ^0.8.0;

contract AnimalFeeding {
    // Address of the owner
    address public owner;

    // Constructor to set the owner address
    constructor() {
        owner = msg.sender;
    }

    // Modifier to restrict access to only the owner
    modifier onlyOwner() {
        require(msg.sender == owner, "Only owner can perform this action");
        _;
    }

    // Function to perform feeding, restricted to the owner
    function feedAnimal() public onlyOwner {
        // Implement feeding logic here
    }
}
