pragma solidity ^0.8.0;

contract AnimalRescue {
    struct Animal {
        uint256 id;
        string name;
        string species;
    }

    Animal[] public animals;

    function addAnimal(string memory _name, string memory _species) public {
        uint256 id = animals.length;
        animals.push(Animal(id, _name, _species));
    }

    function getAnimal(uint256 _id) public view returns (uint256, string memory, string memory) {
        Animal storage animal = animals[_id];
        return (animal.id, animal.name, animal.species);
    }
}
