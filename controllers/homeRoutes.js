const router = require('express').Router();
const { User } = require('../models/User');
const withAuth = require('../utils/auth');

// paste back in after ('./') when setting up auth : withAuth,
router.get(('/'),  async (req, res) =>{
  res.render('homepage');
});

router.get('/login', (req, res) => {
    
    if (req.session.logged_in) {
      res.redirect('/');
      return;
    }
  
    res.render('login');
  });
  
module.exports = router;