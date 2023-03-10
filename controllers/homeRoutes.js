const router = require('express').Router();
const { User } = require('../models/User');
const withAuth = require('../utils/auth');


router.get(('/'), withAuth, async (req, res) =>{

});

router.get('/login', (req, res) => {
    
    if (req.session.logged_in) {
      res.redirect('/');
      return;
    }
  
    res.render('login');
  });
  
module.exports = router;