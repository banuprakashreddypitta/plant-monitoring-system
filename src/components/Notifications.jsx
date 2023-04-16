import React, { useState, useEffect, useContext } from "react";
import Alert from "@mui/material/Alert";
import Stack from "@mui/material/Stack";
import AppContext from "../AppContext";
const mockNotifications = [];

const generateMockNotifications = ({
  lightIntensity, lightData, soilMoisture, soilMoistureData, humidity, humidityData, nutrientLevel, nutrientSensorData
}) => {

  if (soilMoistureData[0].value < soilMoisture) {
    mockNotifications.push({
      id: 1,
      type: "warning",
      message: "Low soil moisture detected. Consider increasing watering frequency.",
    });
  }

  if (lightData[0].value < lightIntensity) {
    mockNotifications.push({
      id: 2,
      type: "warning",
      message: "Low light detected.",
    });
  }

  if (humidityData[0].value > humidity) {
    mockNotifications.push({
      id: 2,
      type: "warning",
      message: "High humidity detected. Adjust the environment to avoid plant diseases.",
    });
  }

  if (nutrientSensorData[0].nitrogen < nutrientLevel) {
    mockNotifications.push({
      id: 3,
      type: "error",
      message: "Low nutrient levels detected. Consider increasing nutrient levels.",
    });
  }

  // Add more mock notifications based on your requirements
  return mockNotifications.reverse();
};

const Notifications = () => {
  const { lightIntensity, soilMoisture, humidity, nutrientLevel, soilMoistureData, lightData, humidityData, nutrientSensorData } = useContext(AppContext);
  const [notifications, setNotifications] = useState([]);

  useEffect(() => {
    const mockNotifications = generateMockNotifications({ lightIntensity, lightData, soilMoisture, soilMoistureData, humidity, humidityData, nutrientLevel, nutrientSensorData });
    setNotifications(mockNotifications);
  }, [lightIntensity, soilMoisture, humidity, nutrientLevel, soilMoistureData, lightData, humidityData, nutrientSensorData]);

  return (
    <div className="Notifications">
      <h2>Notifications</h2>
      <Stack spacing={2}>
        {notifications.map((notification, index) => (
          <Alert key={index} severity={notification.type}>
            {notification.message}
          </Alert>
        ))}
      </Stack>
    </div>
  );
};

export default Notifications;
