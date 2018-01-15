const express = require('express');
const app = express();
const port = process.env.PORT || 3000;
const { json } = require('body-parser');
const morgan = require('morgan');
const { connect } = require('./database/db.js');
const router = require('./routes');

// Middleware
app.use(json());
app.use(morgan('dev'));

// Prefix all routes with /api/v1/
app.use('/api/v1/', router);

// 404 middleware
app.use((req, res) => {
    res.statusCode = 404;
    res.json({ message: 'Route not found', status: res.statusCode });
});

// Error handling middleware
app.use((err, req, res, next) => {
    console.error(req.method, req.url);
    console.error(err.stack);
    res.json({ error: 'Something went wrong' });
});

// Connect to db and listen to server
connect()
.then(() => {
    app.listen(port, () => console.log(`Listening on port ${port}`));
})
.catch(console.error);
