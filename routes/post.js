const router = require("express").Router();
const postController = require("../controllers/postController");
const isAuth = require("../middlewares/isAuth");
// http://localhost:5000/api/posts/newPost
// create a post
//
router.post("/newPost", isAuth, postController.createPost);

// http://localhost:5000/api/posts/
// get  posts
//
router.get("/", isAuth, postController.getPosts);

// http://localhost:5000/api/posts/:id
// get a post by id
//
router.get("/:id", isAuth, postController.getPostById);

// http://localhost:5000/api/posts/deletePost/:idUser/:idPost
// delete post
//
router.delete("/deletePost/:idUser/:idPost", isAuth, postController.deletePost);

// http://localhost:5000/api/posts/editPost/:id
// edit post
//
router.put("/editPost/:id", isAuth, postController.editPost);

module.exports = router;
