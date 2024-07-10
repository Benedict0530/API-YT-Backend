const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = process.env.PORT || 3000;

let apiKeyStatuses = {}; // Store API key statuses

app.use(bodyParser.json());

// Endpoint to update API key status
app.post('/api/updateKeyStatus', (req, res) => {
    const { apiKey, timestamp } = req.body;

    try {
        if (!apiKey || !timestamp) {
            throw new Error('Missing apiKey or timestamp');
        }wqe

        // Parse timestamp to integer
        const parsedTimestamp = parseInt(timestamp);
        if (isNaN(parsedTimestamp)) {
            throw new Error('Invalid timestamp format');
        }

        // Update API key status
        apiKeyStatuses[apiKey] = parsedTimestamp;

        res.status(200).send('API key status updated');
    } catch (err) {
        console.error('Error updating API key status:', err.message);
        res.status(400).send('Failed to update API key status');
    }
});

// Endpoint to fetch all API key statuses
app.get('/api/getKeyStatuses', (req, res) => {
    res.status(200).json(apiKeyStatuses);
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
