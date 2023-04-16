import React from "react";
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

const mockData = {
  soilMoisture: [
    { date: "Jan", value: 40 },
    { date: "Feb", value: 45 },
    { date: "Mar", value: 50 },
    { date: "Apr", value: 55 },
  ],
  temperature: [
    { date: "Jan", min: 10, max: 25 },
    { date: "Feb", min: 12, max: 28 },
    { date: "Mar", min: 15, max: 30 },
    { date: "Apr", min: 18, max: 32 },
  ],
  light: [
    { name: "Low", value: 30 },
    { name: "Medium", value: 50 },
    { name: "High", value: 20 },
  ],
  humidity: [
    { date: "Jan", value: 30 },
    { date: "Feb", value: 40 },
    { date: "Mar", value: 50 },
    { date: "Apr", value: 60 },
  ],
  nutrient: [
    { date: "Jan", nitrogen: 20, phosphorus: 30, potassium: 25 },
    { date: "Feb", nitrogen: 25, phosphorus: 35, potassium: 30 },
    { date: "Mar", nitrogen: 30, phosphorus: 40, potassium: 35 },
    { date: "Apr", nitrogen: 35, phosphorus: 45, potassium: 40 },
  ],
};

const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042"];

const Analytics = () => {
  return (
    <Container maxWidth="lg">
      <Typography variant="h2" gutterBottom>
        Analytics
      </Typography>
      <Grid container spacing={4}>
        <Grid item xs={12} md={6}>
          <Typography variant="h4" gutterBottom>
            Soil Moisture
          </Typography>
          <LineChart
            width={400}
            height={300}
            data={mockData.soilMoisture}
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
            data={mockData.temperature}
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
              data={mockData.light}
              dataKey="value"
              nameKey="name"
              cx="50%"
              cy="50%"
              outerRadius={100}
              fill="#8884d8"
            >
              {mockData.light.map((entry, index) => (
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
            data={mockData.humidity}
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
            data={mockData.nutrient}
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

export default Analytics;
