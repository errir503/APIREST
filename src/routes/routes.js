const express = require('express');

const router = express.Router();


router.route('/list').get(()=>{
    console.log("teste");
})
module.exports = router;