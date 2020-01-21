const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
//const comments = require('./Comments');

const app = express();
app.use(bodyParser.urlencoded({ extended: true }));

/*
// get all comments
app.get('/comments', (req, res) => res.json(comments));
*/

// set static folder
app.use(express.static(path.join(__dirname, 'public')));

app.post('/', (req, res) => {
    console.log(`Name: ${req.body.name} Message: ${req.body.message}`);
    res.send('roger');
});

const PORT = process.env.PORT || 8000;

app.listen(PORT, () => console.log(`Server started on port localhost ${PORT}`));