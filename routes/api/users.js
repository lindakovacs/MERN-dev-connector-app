const express = require('express');
const router = express.Router();

//@route    GET api/use
//@desc     Test route
//@access   Public
router.post('/', (req, res) => {
    console.log(req.body);
    res.send('User route');
});

module.exports = router;