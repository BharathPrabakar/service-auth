const express = require('express');
const app = express();

app.get('/', (req, res) => res.send('Service Auth Running!'));

const port = 7001;
app.listen(port, () => console.log(`Auth service listening on port ${port}`));
