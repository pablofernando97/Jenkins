const { Router } = require('express');
const express = require('express');
const router = express.Router();

router.get('/', (req,res)=>{
    res.json({
        nombre: "Pablo",
        apellido: "Ibarra",
        edad: 26
    });
})

module.exports = router;
