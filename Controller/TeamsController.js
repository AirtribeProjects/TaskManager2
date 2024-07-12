const teamService = require('../serives/teamService');
const Team = require('../Model/TeamModel');

const TeamsController = {
    //create team
    createTeam: async(req,res) => {
        const { name, members } = req.body;
        try {
          
          const teamMember = [req.user.userId, ...members];
          const team = await teamService.createTeam(name,teamMember);
          res.json(team);
        } catch (err) {
          console.error(err.message);
          res.status(500).send('Server error');
        }
    },
    // join team 
    joinTeam: async(req,res) => {
        try{
            const {userId} = req.body;
            const teamId = req.params.id;
            const team = await teamService.joinTeam(userId,teamId);
            if(team.code === 404 ){
                return res.status(404).json(team.message);
            }
            res.status(200).json(team);
        } catch (error){
            res.status(500).json({ message: 'Error occured user joins team' + error });
        } 
    },
    //get all team
    getAllTeams: async(req,res) => {
        try{
            const task = await teamService.getAllTeams(req.user.userId);
            if(task.length == 0) {
                return res.status(404).json({message:'no teams assigned to the user'});
            }
            res.status(200).json(task);
        } catch(error) {
            res.status(500).json({ message: 'Error occured getting the team details' + error });
        }
    },
}

module.exports = TeamsController;