const express = require('express')
const router = express.Router()
const path = require('path');

// Shop home page
router.get('/', (req, res) => {
    res.render('shophome')
})


// Admin Page
router.get('/admin', (req, res) => {
    res.render('login', {
        layout: 'login'
    })
})

module.exports = router