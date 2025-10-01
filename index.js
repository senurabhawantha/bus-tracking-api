// Importing Express library
const express = require('express');
const path = require('path');

// Create an Express application
const app = express();

// Set up the server to accept JSON data
app.use(express.json());

// Serve static files from the 'public' folder
app.use(express.static(path.join(__dirname, 'public')));

// Sample bus data (In a real project, you'd fetch this from a database)
const buses = [
  { bus_id: 1, route_id: 101, status: 'On Time', current_location: { latitude: 6.9271, longitude: 79.8612 } },
  { bus_id: 2, route_id: 102, status: 'Delayed', current_location: { latitude: 6.9272, longitude: 79.8615 } }
];

const routes = [
  { route_id: 101, route_name: 'Colombo to Kandy' },
  { route_id: 102, route_name: 'Colombo to Galle' }
];

// 1. GET /buses: List all buses
app.get('/buses', (req, res) => {
  res.json(buses);
});

// 2. GET /routes: List all routes
app.get('/routes', (req, res) => {
  res.json(routes);
});

// 3. GET /buses/:bus_id: Get details of a specific bus
app.get('/buses/:bus_id', (req, res) => {
  const bus = buses.find(b => b.bus_id === parseInt(req.params.bus_id));
  if (!bus) {
    return res.status(404).send('Bus not found');
  }
  res.json(bus);
});

// 4. GET /buses/:bus_id/location: Get the current location of a specific bus
app.get('/buses/:bus_id/location', (req, res) => {
  const bus = buses.find(b => b.bus_id === parseInt(req.params.bus_id));
  if (!bus) {
    return res.status(404).send('Bus not found');
  }
  res.json({ bus_id: bus.bus_id, location: bus.current_location });
});

// Serve the index.html file when accessing the root route
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// Start the server on port 5000
app.listen(5000, () => {
  console.log('API is running on http://localhost:5000');
});


// // Importing Express library
// const express = require('express');
// const path = require('path');

// // Create an Express application
// const app = express();

// // Set up the server to accept JSON data
// app.use(express.json());

// // Serve static files from the 'public' folder
// app.use(express.static(path.join(__dirname, 'public')));

// // Sample bus data (In a real project, you'd fetch this from a database)
// const buses = [
//   { bus_id: 1, route_id: 101, status: 'On Time' },
//   { bus_id: 2, route_id: 102, status: 'Delayed' }
// ];

// const routes = [
//   { route_id: 101, route_name: 'Colombo to Kandy' },
//   { route_id: 102, route_name: 'Colombo to Galle' }
// ];

// // 1. GET /buses: List all buses
// app.get('/buses', (req, res) => {
//   res.json(buses);
// });

// // 2. GET /routes: List all routes
// app.get('/routes', (req, res) => {
//   res.json(routes);
// });

// // 3. GET /buses/:bus_id: Get details of a specific bus
// app.get('/buses/:bus_id', (req, res) => {
//   const bus = buses.find(b => b.bus_id === parseInt(req.params.bus_id));
//   if (!bus) {
//     return res.status(404).send('Bus not found');
//   }
//   res.json(bus);
// });

// // 4. GET /buses/:bus_id/location: Get the current location of a specific bus
// app.get('/buses/:bus_id/location', (req, res) => {
//   const location = { latitude: 6.9271, longitude: 79.8612 };  // Simulated location
//   const bus = buses.find(b => b.bus_id === parseInt(req.params.bus_id));
//   if (!bus) {
//     return res.status(404).send('Bus not found');
//   }
//   res.json({ bus_id: bus.bus_id, location });
// });

// // Start the server on port 5000
// app.listen(5000, () => {
//   console.log('API is running on http://localhost:5000');
// });


// // Importing Express library
// const express = require('express');

// // Create an Express application
// const app = express();

// // Set up the server to accept JSON data
// app.use(express.json());

// // Sample bus data (In a real project, you'd fetch this from a database)
// const buses = [
//   { bus_id: 1, route_id: 101, status: 'On Time' },
//   { bus_id: 2, route_id: 102, status: 'Delayed' }
// ];

// const routes = [
//   { route_id: 101, route_name: 'Colombo to Kandy' },
//   { route_id: 102, route_name: 'Colombo to Galle' }
// ];

// // 1. GET /: Root route
// app.get('/', (req, res) => {
//   res.send('Welcome to the Bus Tracking API');
// });

// // 2. GET /buses: List all buses
// app.get('/buses', (req, res) => {
//   res.json(buses);
// });

// // 3. GET /routes: List all routes
// app.get('/routes', (req, res) => {
//   res.json(routes);
// });

// // 4. GET /buses/:bus_id: Get details of a specific bus
// app.get('/buses/:bus_id', (req, res) => {
//   const bus = buses.find(b => b.bus_id === parseInt(req.params.bus_id));
//   if (!bus) {
//     return res.status(404).send('Bus not found');
//   }
//   res.json(bus);
// });

// // 5. GET /buses/:bus_id/location: Get the current location of a specific bus
// app.get('/buses/:bus_id/location', (req, res) => {
//   const location = { latitude: 6.9271, longitude: 79.8612 };  // Simulated location
//   const bus = buses.find(b => b.bus_id === parseInt(req.params.bus_id));
//   if (!bus) {
//     return res.status(404).send('Bus not found');
//   }
//   res.json({ bus_id: bus.bus_id, location });
// });

// // Start the server on port 5000
// app.listen(5000, () => {
//   console.log('API is running on http://localhost:5000');
// });
