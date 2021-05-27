const router = require('express').Router();
const {
  getAllUsers,
  getUserById,
  createUser,
  updateUser,
  deleteUser
} = require('../../controllers/user-controller');


// Set up GET all and POST at /api/users
router
  .route('/')
  .get(getAllUsers)
  .get(getUserById)
  .post(createUser)
  .put(updateUser)
  .delete(deleteUser);

// Set up GET one, PUT, and DELETE at /api/users/:userId/friends/:friendId
router
  .route('/:id/friends/:friendid')
  .get()
  .put()
  .delete();

module.exports = router;