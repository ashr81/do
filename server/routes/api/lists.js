const router = require('express').Router();
const ListController = require('../../controllers/ListController');

router.put('/:id', ListController.update);
router.delete('/:id', ListController.delete);
router.post('/:id/cards', ListController.createCard);

module.exports = router;