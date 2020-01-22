const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');

const comments = [];
const PORT = process.env.PORT || 8000;
/**
 * Initialize express server.
 * @type {app}
 */
const app = express();

/**
 * Set static folder.
 */
app.use(express.static(path.join(__dirname, 'public')));

/**
 * Routes HTTP request and push every new instance of the object into array.
 */
app.use(bodyParser.urlencoded({extended: true}));
app.post('/', (req, res) => {
    comments.push({name: req.body.name, message: req.body.message});
    console.log(comments);
    res.send(comments);
});

/**
 * Starts UNIX socket and listens for connections on given path.
 */
app.listen(PORT, () => {
    console.log(`Server started on port ${PORT}`);
});