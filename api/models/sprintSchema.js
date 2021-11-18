const e = require('express');
const mongoose = require('mongoose');

const sprintSchema =  mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    sprNumber: {type: Number, required: false},
    project: {type: String, ref: 'Projects'},
    startDate: {type: Date},
    endDate: {type: Date},
    sprintType: {type:number},
    lists: [
        {
            _id: mongoose.Schema.Types.ObjectId,
            listName: {type: String, required: true, default: ''},
            tasks: [
                {
                    _id: mongoose.Schema.Types.ObjectId,
                    taskName: {type: String, required: true, default: ''},
                    taskUsers: [{type: String, ref: 'User', default: ''}],
                } 
            ]
        }
    ]
});

module.exports = mongoose.model('Sprint',sprintSchema);