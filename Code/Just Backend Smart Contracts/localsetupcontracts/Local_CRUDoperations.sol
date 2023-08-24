pragma solidity ^0.8.0;

contract AnimalCrud {
    struct Animal {
        uint256 id;
        string name;
        string species;
    }

    Animal[] public animals;
    uint256 public nextAnimalId = 0;

    function createAnimal(string memory _name, string memory _species) public {
        animals.push(Animal(nextAnimalId, _name, _species));
        nextAnimalId++;
    }

    function readAnimal(uint256 _id) public view returns (string memory, string memory) {
        require(_id < animals.length, "Animal not found");
        Animal storage animal = animals[_id];
        return (animal.name, animal.species);
    }

    function updateAnimal(uint256 _id, string memory _name, string memory _species) public {
        require(_id < animals.length, "Animal not found");
        Animal storage animal = animals[_id];
        animal.name = _name;
        animal.species = _species;
    }
}
