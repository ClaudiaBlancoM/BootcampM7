const { Router } = require("express");
const {
  createUser,
  findUserById,
  findAll,
  updateUserById,
  deleteUserById,
} = require("../controllers/user.controller");
const {
  createBootcamp,
  findById,
  addUserBootcamp,
  findThem,
} = require("../controllers/bootcamp.controller");

const router = Router();

router.post("/users", createUser);
router.get("/users/:id", findUserById);
router.get("/users/", findAll);
router.put("/users/:id", updateUserById);
router.delete("/users/:id", deleteUserById);

router.post("/bootcamps", createBootcamp);
router.post("/bootcamps/adduser", addUserBootcamp);
router.get("/bootcamps/:id", findById);
router.get("/bootcamp/", findThem);

module.exports = router;

