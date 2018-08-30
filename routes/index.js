var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Mike Paquin & Associates' });
});
router.get('/coachingtip', function(req, res, next) {
  res.render('coachingtip', { title: 'Coaching Tip' });
});

module.exports = router;
