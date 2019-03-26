const express = require('express');
const {projects} = require('../data.json');
const router = express.Router();


router.get('/', (req, res) => res.redirect('/'))
//^ Redirect when going to /projects ^

router.get(`/:id`,(req, res) => {
    const theProject = projects[req.params.id -1]
    res.render('project', {theProject})
});
//^ Render the project according to the id that is asked ^

module.exports = router;
