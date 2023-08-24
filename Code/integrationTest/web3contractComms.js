// Sample interactions using web3.js

// For Smart Contract 1 (AnimalRescue)
const animalRescueContract = new web3.eth.Contract(ABI, contractAddress);

// Add an animal
animalRescueContract.methods.addAnimal("Lion", "Mammal").send({ from: userAddress });

// Get animal data by ID
const animalId = 0;
animalRescueContract.methods.getAnimal(animalId).call({ from: userAddress });

// For Smart Contract 2 (AnimalCrud)
const animalCrudContract = new web3.eth.Contract(ABI, contractAddress);

// Create an animal
animalCrudContract.methods.createAnimal("Tiger", "Mammal").send({ from: userAddress });

// Read animal data by ID
const animalId = 0;
animalCrudContract.methods.readAnimal(animalId).call({ from: userAddress });

// Update an animal
animalCrudContract.methods.updateAnimal(animalId, "Lion", "Mammal").send({ from: userAddress });

// For Smart Contract 3 (SensorData)
const sensorDataContract = new web3.eth.Contract(ABI, contractAddress);

// Update sensor reading
const newReading = 25;
sensorDataContract.methods.updateSensorReading(newReading).send({ from: userAddress });

// Get sensor data
sensorDataContract.methods.getSensorData().call({ from: userAddress });

// For Smart Contract 4 (AnimalFeeding)
const animalFeedingContract = new web3.eth.Contract(ABI, contractAddress);

// Feed the animal
animalFeedingContract.methods.feedAnimal().send({ from: userAddress });
