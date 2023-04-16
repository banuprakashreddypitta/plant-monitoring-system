import React, { useState, useEffect, useContext } from "react";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import AppContext from "../AppContext";
import GenericTable from "./GenericTable";
import { IconButton } from "@mui/material";
import SyncIcon from "@mui/icons-material/Sync";

const Reporting = () => {
  const {
    soilMoistureData,
    temperatureData,
    lightData,
    humidityData,
    nutrientSensorData,
    sync
  } = useContext(AppContext);
  const [data, setData] = useState({
    soilMoisture: soilMoistureData,
    temperature: temperatureData,
    light: lightData,
    humidity: humidityData,
    nutrient: nutrientSensorData,
  });
  useEffect(() => {
    setData({
      soilMoisture: soilMoistureData,
      temperature: temperatureData,
      light: lightData,
      humidity: humidityData,
      nutrient: nutrientSensorData,
    });
  }, [
    soilMoistureData,
    temperatureData,
    lightData,
    humidityData,
    nutrientSensorData,
  ]);

  return (
    <Container maxWidth="lg">
      <Typography variant="h2" gutterBottom>
        Reporting
      </Typography>
      <IconButton color="primary" onClick={sync}>
        <SyncIcon />
      </IconButton>
      {data && (
        <Grid container spacing={4}>
          <Grid item xs={12} md={6}>
            <Typography variant="h4" gutterBottom>
              Soil Moisture
            </Typography>
            <GenericTable data={data.soilMoisture} />
          </Grid>
          <Grid item xs={12} md={6}>
            <Typography variant="h4" gutterBottom>
              Temperature
            </Typography>
            <GenericTable data={data.temperature} />
          </Grid>
          <Grid item xs={12} md={6}>
            <Typography variant="h4" gutterBottom>
              Humidity
            </Typography>
            <GenericTable data={data.humidity} />
          </Grid>
          <Grid item xs={12} md={6}>
            <Typography variant="h4" gutterBottom>
              Nutrient
            </Typography>
            <GenericTable data={data.nutrient} />
          </Grid>
          <Grid item xs={12} md={6}>
            <Typography variant="h4" gutterBottom>
              Light
            </Typography>
            <GenericTable data={data.light} />
          </Grid>
        </Grid>
      )}
    </Container>
  );
};

export default Reporting;
