//install express server
const express = require('express');
const path = require('path');
const app = express();

// serve only the static files  form the dist directory
app.use(express.static('/dist/frontend'));

app.get('*', (req, res) => {
    res.sendFile(`./frontend/dist/index.html`); // load the single view file (angular will handle the page changes on the front-end)
});

app.listen(process.env.PORT || 8080);
