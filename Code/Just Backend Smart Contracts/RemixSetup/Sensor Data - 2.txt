pragma solidity ^0.8.0;

contract SensorData {
    uint256 public sensorReading;
    uint256 public lastUpdateTime;

    function updateSensorReading(uint256 _reading) public {
        sensorReading = _reading;
        lastUpdateTime = block.timestamp;
    }

    function getSensorData() public view returns (uint256, uint256) {
        return (sensorReading, lastUpdateTime);
    }
}
