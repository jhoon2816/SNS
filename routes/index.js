const express = require('express');

const router = express.Router();

/* GET home page. */

router.get('/profile', (req,res)=>{
  res.render('profile', {
    title: '내 정보 - NodeBird',
    user: null
  });
});

router.get('/join', (req,res)=>{
  res.render('join', {
    title: 'signup - NodeBird',
    user: null,
    joinError: req.flash('joinError')
  });
});

router.get('/', (req, res, next) => {
    res.render('main', {
        title: 'NodeBird',
        twits: [],
        user: null,
        loginError: req.flash('loginError')
    });
});


module.exports = router;
