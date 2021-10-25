const { Router } = require('express');

const leilao = require('../models/leilaoModel');

const router = Router();

router.get('/', async (_req, res) => {
  const leilao = await leilao.getAll();
  res.status(200).json(leilao);
});

module.exports = router;