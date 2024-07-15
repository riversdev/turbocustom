var express = require('express');
var router = express.Router();

router.get('/', (req, res) => {
  res.status(200).json({ ok: true, message: 'API response', data: [] })
})

/* GET home page. */
router.get('/hello', function (req, res, next) {
  res.render('index', { title: 'Hello world' });
});

module.exports = router;
