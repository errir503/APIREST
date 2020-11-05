const express = require('express');
const app = express();
const path = require('path');
const cors = require('cors');
const PORT = 3001;
const api = require('./routes/routes');
const dotenv = require("dotenv");
dotenv.config();
require('./database/index');

app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use('/file', express.static(path.resolve(__dirname,'..',"tmp","uploads")));
app.use(cors());

app.use('/api',api);

app.listen(PORT,()=>{
    console.log(`serve run ${PORT}`);
});