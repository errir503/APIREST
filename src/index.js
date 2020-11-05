const express = require('express');
const app = express();

const PORT = 3001;
const api = require('./routes/routes');





app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.use('/api',api);
app.listen(PORT,()=>{
    console.log(`serve run ${PORT}`);
});