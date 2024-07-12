const Team = require('../Model/TeamModel');
const User = require("../Model/userModel");

const teamService = {

    createTeam: async(name,members) => {
        const team = new Team({ name, members:members });
        await team.save();
        return team;
    },

    joinTeam: async(userId,teamId) => {

        const user =await User.findById(userId);
        if(!user){
            return {
                code: 404,
                message:"user Not found"
            }
        }  
        const team = await Team.findById(teamId);
        if(!team){
            return {
                code: 404,
                message:"team Not found"
            }
        }
        team.members.push(userId);
        await team.save();
        return team;
    },

    getAllTeams: async(userId) => {
        const teams = await Team.find({ members: userId });
        return teams;  
    }
}

module.exports = teamService;