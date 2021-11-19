const express = require('express') ;
const router = express.Router();

const SprintsController = require('../controllers/sprint') ;
require('dotenv').config();


router.get('/',SprintsController.sprint_get_all);

router.get('/:sprName/:project', SprintsController.sprint_get_single);

router.patch('/:sprName/:project', SprintsController.sprint_patch);
router.patch('/addtask/:sprName/:project', SprintsController.add_task);

router.delete('/:sprName',SprintsController.sprint_delete);

router.post('/sprint_create', SprintsController.sprint_create);

module.exports = router;