const express = require('express') ;
const router = express.Router();

const KanbanController = require('../controllers/kanban') ;
require('dotenv').config();

router.get('/:sprName', KanbanController.get_lists);

router.patch('/', KanbanController.update_lists);


module.exports = router;