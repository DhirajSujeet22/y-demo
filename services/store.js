const router = require("express").Router();
const UAParser = require('ua-parser-js');

// stoire urls


router.get('/', (req, res) => {
    const ua = UAParser(req.headers['user-agent']);
    const deviceType = ua.device.type;

    if (deviceType === 'mobile') {
        // User is on a mobile device
        res.render('store/index-mobile');
    } else {
        res.render('store/index');
    }
});

router.get('/gallery', (req, res) => {
    const ua = UAParser(req.headers['user-agent']);
    const deviceType = ua.device.type;

    if (deviceType === 'mobile') {
        // User is on a mobile device
        res.render('store/mobile-gallery');
    } else {
        res.render('store/gallery');
    }
});

router.get('/girl/:slug', (req, res) => {
    const ua = UAParser(req.headers['user-agent']);
    const deviceType = ua.device.type;

    if (deviceType === 'mobile') {
        // User is on a mobile device
        res.render('store/mobile-girl-detail');
    } else {
        res.render('store/girl-detail');
    }
});

router.get('/girls', (req, res) => {
    const ua = UAParser(req.headers['user-agent']);
    const deviceType = ua.device.type;

    if (deviceType === 'mobile') {
        // User is on a mobile device
        res.render('store/mobile-listing');
    } else {
        res.render('store/listing');
    }
});

module.exports = router