const express = require('express');
const passport = require('passport');

const router = express.Router();

router.post(
  '/login',
  passport.authenticate('local', { failureMessage: true, session: false }),
  async (req, res, next) => {
    try {
      res.json(req.user);
    } catch (error) {
      next(error);
    }
  }
);
router.get(
  '/login',

  async (req, res, next) => {
    try {
      return console.log('123123');
    } catch (error) {
      next(error);
    }
  }
);

module.exports = router;
