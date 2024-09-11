const express = require('express');
const app = express();
require('dotenv').config();

app.use(express.json());

const PORT = process.env.PORT || 10000;

app.listen(PORT, () => console.log(`Server is running at port ${PORT}`));
