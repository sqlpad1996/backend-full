const express = require("express");
const cors = require("cors");

const app = express();
const PORT = process.env.PORT || 5000;

// Enable CORS
app.use(cors());

// Middleware to parse JSON requests
app.use(express.json());

// Default route
app.get("/", (req, res) => {
    res.send("Backend is running...");
});

// Example API Endpoint
app.get("/api/data", (req, res) => {
    res.json({
        message: "Hello from the backend!",
        timestamp: new Date().toISOString(),
    });
});

// Start Server
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
