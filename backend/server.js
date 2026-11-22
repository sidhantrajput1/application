const express = require('express');

const app = express();

const PORT = 3000;

app.get('/', (req, res) => {
    res.send('Hello! My Node.js server is running on AWS EC2 🚀');
});

app.get('/api', (req, res) => {
    res.json({
        message: 'Node.js API is working!',
        status: 'success'
    });
});

app.listen(PORT, '0.0.0.0', () => {
    console.log(`Server running on port ${PORT}`);
});
