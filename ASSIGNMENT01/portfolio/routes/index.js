// Home Page
// Home Page
const express = require('express');
const router = express.Router(); // Create an instance of the router

router.get('/', function(req, res) {
  res.render('index', { title: 'Home' });
});

// About Page
router.get('/about', function(req, res) {
  res.render('about', { title: 'About Me' });
});

// Projects Page
router.get('/projects', function(req, res) {
  res.render('projects', { title: 'Projects' });
});


// Contact Page
router.get('/contact', function(req, res) {
  res.render('contact', { title: 'Contact Me' });
});

module.exports = router;

