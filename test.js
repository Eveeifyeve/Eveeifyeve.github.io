const express = require('express');
const path = require('path');
const app = express();

app.use(express.static(path.join(__dirname, 'pages')));

app.use((req, res, next) => {
    if (path.extname(req.path).length > 0) {
        // normal static file request
        next();
    } else {
        // should force express.static to deliver an HTML file
        req.url += '.html';
        express.static(path.join(__dirname, 'pages'))(req, res, next);
    }
});

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Server is running on http://localhost:${port}`));