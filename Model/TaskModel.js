const mongoose = require('mongoose');

const Tasks = new mongoose.Schema({
    title : {type:String, 
            required:true
    },
    description: {
        type: String,
        required:true
    },
    dueDate: { 
        type: Date, 
        required: true 
    },
    status: { 
        type: String, 
        default: 'open' 
    },
    createdBy: {
         type: mongoose.Schema.Types.ObjectId, 
        ref: 'User' 
    },
    assignedTo: [{ 
        type: mongoose.Schema.Types.ObjectId, 
        ref: 'User' 
    }],
    team: {
         type: mongoose.Schema.Types.ObjectId,
          ref: 'Team'
    },
    comments: [{ 
      user: { type: mongoose.Schema.Types.ObjectId, 
            ref: 'User'
         }, 
      text: { type: String }, 
      date: { type: Date, default: Date.now } 
    }],
    attachments: [{ 
      filename: { type: String }, 
      filepath: { type: String }, 
      date: { type: Date, default: Date.now } 
    }],
    date: { type: Date, default: Date.now }
})
const Task = mongoose.model('Task',Tasks);
module.exports = Task;