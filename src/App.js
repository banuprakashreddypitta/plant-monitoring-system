import React, { useEffect, useState, useContext } from "react";
import {
  Dashboard,
  Notifications,
  Analytics,
  Control,
  Reporting,
  AWSSync
} from "./components";
import "./App.css";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import { useSnackbar } from 'notistack';
import AppContext from "./AppContext";

function App() {
  const [activeComponent, setActiveComponent] = useState("dashboard");
  const { enqueueSnackbar } = useSnackbar();
  const { lightIntensity, soilMoisture, humidity, nutrientLevel, soilMoistureData, lightData, humidityData, nutrientSensorData } = useContext(AppContext);

  const handleChange = (event, newValue) => {
    setActiveComponent(newValue);
  };

  const notify = () => {
    if (soilMoistureData.length && soilMoistureData[0].value < soilMoisture) {
      enqueueSnackbar('Low soil moisture detected. Consider increasing watering frequency.', { variant: 'warning' });
    }

    if (lightData.length && lightData[0].value < lightIntensity) {
      enqueueSnackbar('Low light detected.', { variant: 'warning' });
    }

    if (humidityData.length && humidityData[0].value > humidity) {
      enqueueSnackbar('High humidity detected. Adjust the environment to avoid plant diseases.', { variant: 'warning' });
    }

    if (nutrientSensorData.length && nutrientSensorData[0].nitrogen < nutrientLevel) {
      enqueueSnackbar('Low nutrient levels detected. Consider increasing nutrient levels.', { variant: 'error' });
    }
  }

  useEffect(() => {
    notify();
  }, [soilMoistureData, lightData, humidityData, nutrientSensorData]);

  return (
    <div className="App">
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Plant Monitoring System
          </Typography>
          <Tabs
            value={activeComponent}
            onChange={handleChange}
            aria-label="navigation tabs"
          >
            <Tab value="dashboard" label="Dashboard" />
            <Tab value="notifications" label="Notifications" />
            <Tab value="analytics" label="Analytics" />
            <Tab value="control" label="Control" />
            <Tab value="reporting" label="Reporting" />
            <Tab value="awssync" label="AWS Sync" />
          </Tabs>
        </Toolbar>
      </AppBar>
      <Container maxWidth="lg" style={{ marginTop: "2rem" }}>
        {activeComponent === "dashboard" && <Dashboard />}
        {activeComponent === "notifications" && <Notifications />}
        {activeComponent === "analytics" && <Analytics />}
        {activeComponent === "control" && <Control />}
        {activeComponent === "reporting" && <Reporting />}
        {activeComponent === "awssync" && <AWSSync />}
      </Container>
    </div>
  );
}

export default App;
