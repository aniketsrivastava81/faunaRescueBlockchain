pragma solidity ^0.8.0;

contract SensorData {
    // Variables to store sensor data
    uint256 public sensorReading;
    uint256 public lastUpdateTime;

    // Function to update sensor reading
    function updateSensorReading(uint256 _reading) public {
        sensorReading = _reading;
        lastUpdateTime = block.timestamp;
    }

    // Function to get sensor data
    function getSensorData() public view returns (uint256, uint256) {
        return (sensorReading, lastUpdateTime);
    }
}
