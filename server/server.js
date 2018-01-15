const express = require('express');
const app = express();
const port = process.env.PORT || 3000;
const { json } = require('body-parser');
const { connect } = require('./database/db.js');
const router = require('./routes');
const mongoose = require('mongoose');

// Parse json
app.use(json());

app.use(router);

// Connect to db and listen to server
connect()
.then(() => {
    app.listen(port, () => console.log(`Listening on port ${port}`));
})
.catch(console.error);
