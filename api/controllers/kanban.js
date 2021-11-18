const Sprints = require('../models/sprintSchema');
const mongoose = require('mongoose');

exports.get_lists = (req, res, next) => {
    // Sprints.find({sprName: req.params.sprName})
    // .select('sprName lists')
    // .exec()
    // .then(doc => {
    //     if(doc)
    //     {
    //         res.status(200).json({
    //             sprName : doc.sprName,
    //             lists: doc.lists,
    //             request: {
    //                 type : 'GET',
    //                 description : 'Get all lists and tasks for sprint',
    //                 url : 'https://kanban-api-624.herokuapp.com/'
    //             }
    //         });
    //     }
    //     else
    //     {
    //         res.status(404).json({
    //             message: 'Entry not found in database'
    //         });
    //     }
    // })

    Sprints.find({project: req.params.project})
    .select('_id sprName project lists')
    .exec()
    .then(doc => {
        if(doc)
        {
            res.status(200).json({
                sprint : doc,
                lists : doc.lists,
                request: {
                    type : 'GET',
                    description : 'Get single sprint',
                    url : 'https://kanban-api-624.herokuapp.com/'

                }
            });
        }
        else
        {
            res.status(404).json({
                message: 'Entry not found in database'
            });
        }
    })
    .catch(err => {
        console.log(err);
        res.status(500).json({
            error: err
        });
    });
}

exports.update_lists = (req, res, next) =>{
    const sprintId = req.params._id;
    const updateOps = {};

    for(const ops of req.body)
    {
        updateOps[ops.propName] = ops.value;
    }

    Sprints.update({_id: sprintId}, {$set: updateOps}).exec()
    .then(result => {
        res.status(200).json({
            message: 'Lists updated',
            request : {
                type : 'GET',
                url : 'https://kanban-api-624.herokuapp.com/' + id
            }
        });
    })
    .catch(err => {
        console.log(err);
        res.status(500).json({
            error: err
        });
    });

}