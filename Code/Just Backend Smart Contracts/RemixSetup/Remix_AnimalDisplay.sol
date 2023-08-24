pragma solidity ^0.8.0;

contract AnimalRescue {
    // Struct to hold animal data
    struct Animal {
        uint256 id;
        string name;
        string species;
        // Add more attributes as needed
    }

    // Array to store animal instances
    Animal[] public animals;

    // Function to add a new animal to the array
    function addAnimal(string memory _name, string memory _species) public {
        uint256 id = animals.length;
        animals.push(Animal(id, _name, _species));
    }

    // Function to get animal data by ID
    function getAnimal(uint256 _id) public view returns (uint256, string memory, string memory) {
        Animal storage animal = animals[_id];
        return (animal.id, animal.name, animal.species);
    }
}
