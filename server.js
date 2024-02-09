const express = require('express');
const path = require('path');
const app = express();
const port = process.env.PORT || 3000; // Heroku will provide the PORT

app.use(express.static('public')); // Serve static files from 'public' directory

app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'public', 'index.html'));
});

app.listen(port, () => console.log(`App listening on port ${port}`));
