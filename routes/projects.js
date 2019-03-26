const express = require('express');
const {projects} = require('../data.json');
const router = express.Router();


  router.get('/', (req, res) => res.redirect('/'))

  router.get(`/:id`,(req, res) => {
      const theProject = projects[req.params.id -1]
      res.render('project', {theProject})
  });


module.exports = router;
