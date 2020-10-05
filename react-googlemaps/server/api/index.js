const router = require('express').Router();
const Marker = require('../marker')

router.get('/markers', async (req, res, next) => {
    try {
        const markers = await Marker.findAll({
            order: [['date', 'DESC']]
        })
        res.send(markers)
    } catch (err) {
        next(err)
    }
})

router.post('/markers', async (req, res, next) => {
    try {
        const marker = await Marker.create(req.body)
        res.send(marker)
    } catch (err) {
        next(err)
    }
})

router.use(function (req, res, next) {
  const err = new Error('Not found.');
  err.status = 404;
  next(err);
});

module.exports = router;