const express = require('express');
const router = express.Router();
const verifyToken = require('../middleware/authJWT');
const TeamsController = require('../Controller/TeamsController')

//create teams
router.post('/', verifyToken, TeamsController.createTeam);

//join to team
router.post('/:id', verifyToken, TeamsController.joinTeam);

//get all teams
router.get('/', verifyToken, TeamsController.getAllTeams);


module.exports = router;