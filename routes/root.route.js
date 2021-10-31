const express = require('express');
const root = require('../services/root');
const router = new express.Router();
 
router.get('/', async (req, res, next) => {
  let options = { 
  };
  try {
    const result = await root.get(options);
    res.status(result.status || 200).send(result.data);
  }
  catch (err) {
    return res.status(500).send({
      error: err || 'Something went wrong.'
    });
  }
});

module.exports = router;