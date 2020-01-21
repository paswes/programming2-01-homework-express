const express = require('express');
const path = require('path');
const comments = require('./Comments');

const app = express();

// get all comments
app.get('/comments', (req, res) => res.json(comments));

// set static folder
app.use(express.static(path.join(__dirname, 'public')));

/*
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});
*/

const PORT = process.env.PORT || 8000;

app.listen(PORT, () => console.log(`Server started on port localhost ${PORT}`));