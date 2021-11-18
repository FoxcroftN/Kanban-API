const e = require('express');
const mongoose = require('mongoose');

const projectSchema =  mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    projName: {type: String, required: false},
    projUsers: [{type: String, ref: 'User'}],
    sprints: [
        {
            sprintNumber: {type: Number, required: true},
            startDate: {type: Date, required: false},
            endDate: {type: Date, required: false},
            sprintType: {type: Number, required: false},
            lists: [
                {
                    listName: {type: String, required: true, default: ''},
                    tasks: [
                        {
                            taskName: {type: String, required: true, default: ''},
                            taskUsers: [{type: String, ref: 'User', default: ''}],
                        } 
                    ]
                }
            ]
        }
        
]
});

module.exports = mongoose.model('Projects',projectSchema);