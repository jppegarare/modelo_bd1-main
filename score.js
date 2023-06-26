const express = require('express');
const db = require('./conn.js');

const router = express.Router();

// Registrar um novo resultado
router.post("/", async (req, res) => {
    // seu código aqui
    let col = await db.collection ('player');
    let out = await col.insetOne(req.body);
    res.send(out).status(204);

});


// Pegar os 10 melhores resultados
router.get("/", async (req, res) => {
    // seu código aqui
    let col = await db.collection ('player');
    let out = await col.find().sort({
        pontos: -1
    }).limit(10).toArray();
    res.send(out).status(200)

})



module.exports = router;
