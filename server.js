const express = require('express');
const bodyParser = require('body-parser');
const port = 8000;
const app = express();

app.use(bodyParser.json());
app.listen(port, () => console.log(`Server is running on port ${port}`));
require('./server/routes')(app);