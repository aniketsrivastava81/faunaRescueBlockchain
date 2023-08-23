pragma solidity ^0.8.0;

contract AnimalCrud {
    // Struct to hold animal data
    struct Animal {
        uint256 id;
        string name;
        string species;
        // Add more attributes as needed
    }

    // Array to store animal instances
    Animal[] public animals;
    uint256 public nextAnimalId = 0;

    // Function to create a new animal
    function createAnimal(string memory _name, string memory _species) public {
        animals.push(Animal(nextAnimalId, _name, _species));
        nextAnimalId++;
    }

    // Function to read animal data by ID
    function readAnimal(uint256 _id) public view returns (string memory, string memory) {
        require(_id < animals.length, "Animal not found");
        Animal storage animal = animals[_id];
        return (animal.name, animal.species);
    }

    // Function to update animal data
    function updateAnimal(uint256 _id, string memory _name, string memory _species) public {
        require(_id < animals.length, "Animal not found");
        Animal storage animal = animals[_id];
        animal.name = _name;
        animal.species = _species;
    }
}
