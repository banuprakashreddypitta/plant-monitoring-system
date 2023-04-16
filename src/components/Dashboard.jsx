import React, { useEffect, useContext, useState } from "react";
import {
  LineChart,
  BarChart,
  PieChart,
  Pie,
  Cell,
  Line,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from "recharts";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import AppContext from "../AppContext";

const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042"];

const Dashboard = () => {
    const {soilMoistureData, temperatureData, lightData, humidityData, nutrientSensorData} = useContext(AppContext);
    const [data, setData] = useState({
        soilMoisture: soilMoistureData.slice(0,15),
        temperature: temperatureData.slice(0,15),
        light: lightData.slice(0,15),
        humidity: humidityData.slice(0,15),
        nutrient: nutrientSensorData.slice(0,15)
    });
    useEffect(() => {
       setData({
        soilMoisture: soilMoistureData.slice(0,15),
        temperature: temperatureData.slice(0,15),
        light: lightData.slice(0,15),
        humidity: humidityData.slice(0,15),
        nutrient: nutrientSensorData.slice(0,15)
       })
    }, [soilMoistureData, temperatureData, lightData, humidityData, nutrientSensorData])
  return (
    <Container maxWidth="lg">
      <Typography variant="h2" gutterBottom>
        Dashboard
      </Typography>
      <Grid container spacing={4}>
        <Grid item xs={12} md={6}>
          <Typography variant="h4" gutterBottom>
            Soil Moisture
          </Typography>
          <LineChart
            width={400}
            height={300}
            data={data.soilMoisture}
            margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="date" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Line type="monotone" dataKey="value" stroke="#8884d8" />
          </LineChart>
        </Grid>
        <Grid item xs={12} md={6}>
          <Typography variant="h4" gutterBottom>
            Temperature
          </Typography>
          <LineChart
            width={400}
            height={300}
            data={data.temperature}
            margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="date" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Line type="monotone" dataKey="min" stroke="#8884d8" />
            <Line type="monotone" dataKey="max" stroke="#82ca9d" />
          </LineChart>
        </Grid>
        <Grid item xs={12} md={6}>
          <Typography variant="h4" gutterBottom>
            Light
          </Typography>
          <PieChart width={400} height={300}>
            <Pie
              data={data.light}
              dataKey="value"
              nameKey="name"
              cx="50%"
              cy="50%"
              outerRadius={100}
              fill="#8884d8"
            >
              {data.light.map((entry, index) => (
                <Cell
                  key={`cell-${index}`}
                  fill={COLORS[index % COLORS.length]}
                />
              ))}
            </Pie>
            <Tooltip />
            <Legend />
          </PieChart>
        </Grid>
        <Grid item xs={12} md={6}>
          <Typography variant="h4" gutterBottom>
            Humidity
          </Typography>
          <BarChart
            width={400}
            height={300}
            data={data.humidity}
            margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="date" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar dataKey="value" fill="#8884d8" />
          </BarChart>
        </Grid>
        <Grid item xs={12} md={6}>
          <Typography variant="h4" gutterBottom>
            Nutrient
          </Typography>
          <LineChart
            width={400}
            height={300}
            data={data.nutrient}
            margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="date" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Line type="monotone" dataKey="nitrogen" stroke="#8884d8" />
            <Line type="monotone" dataKey="phosphorus" stroke="#82ca9d" />
            <Line type="monotone" dataKey="potassium" stroke="#ffc658" />
          </LineChart>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Dashboard;
