const express=require("express");
const { getUsers, getUser, createUser, updateUser, deleteUser } = require("../controllers/user");
const router=express.Router();

router.get("/",getUsers);
router.get("/:id",getUser),
router.post("/",createUser),
router.patch("/:id",updateUser),
router.delete("/:id",deleteUser)
module.exports=router;