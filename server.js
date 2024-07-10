const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = process.env.PORT || 3000;

// Simulate a database with an in-memory object
let apiKeyStatuses = {};

// Middleware
app.use(bodyParser.json());

// Update API key status
app.post('/api/update', (req, res) => {
    const { apiKey, timestamp } = req.body;
    apiKeyStatuses[apiKey] = timestamp;
    res.status(200).send('API key status updated');
});

// Get all API key statuses
app.get('/api/statuses', (req, res) => {
    res.status(200).json(apiKeyStatuses);
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
