const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = process.env.PORT || 3000;

let apiKeyStatuses = {}; // Store API key statuses

app.use(bodyParser.json());

// Endpoint to update API key status
app.post('/api/updateKeyStatus', (req, res) => {
    const { apiKey, failureTimestamp } = req.body;
    apiKeyStatuses[apiKey] = failureTimestamp;
    res.status(200).send('API key status updated');
});

// Endpoint to fetch all API key statuses
app.get('/api/getKeyStatuses', (req, res) => {
    res.status(200).json(apiKeyStatuses);
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
