const router = require("express").Router();
const { User, Blog, Comment } = require("../models");

router.get("/", async (req, res) => {
  try {
    const blogData = await Blog.findAll({
      include: [User],
    });
    const blogs = blogData.map((blog) => blog.get({ plain: true }));
    console.log(blogs);
    res.render("home", {
      blogs,
    });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

//Get the blog posts by ID
router.get("/blogpost/:id", async (req, res) => {
  try {
    const dbPostData = await Blog.findByPk(req.params.id, {
      include: [
        {
          model: Comment,
        },
      ],
    });
    console.log(dbPostData);
    const singlePost = dbPostData.get({ plain: true });
    console.log({ singlePost, loggedIn: req.session.loggedIn });
    res.render("blogpost", { ...singlePost, loggedIn: req.session.loggedIn });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

//Login and redirect users to main page
router.get("/login", (req, res) => {
  if (req.session.loggedIn) {
    res.redirect("/");
    return;
  }
  res.render("login");
});

router.get("/dashboard", async (req, res) => {
  console.log(req.session.user_id, "User ID");
  try {
    const userPosts = await Blog.findAll({
      where: {
        user_id: req.session.user_id,
      },
    });
    const userBlogs = userPosts.map((blog) => blog.get({ plain: true }));
    console.log(userPosts);
    res.render("dashboard", { loggedIn: req.session.loggedIn, userBlogs });
  } catch (err) {
    res.status(500).json(err);
  }
});

//Add a comment to a post
router.post("/newcomment", async (req, res) => {
  try {
    console.log(req.body);
    const comment = await Comment.create({
      ...req.body,
      user_id: req.session.user_id,
    });
    res.status(200).json(comment);
  } catch (err) {
    console.log(err);
    res.status(400).json(err);
  }
});

router.get("/createpost", async (req, res) => {
  res.render("createpost", {
    loggedIn: req.session.loggedIn,
    user_id: req.session.user,
  });
});

router.post("/newpost", async (req, res) => {
  try {
    console.log(req.body);
    const post = await Blog.create({
      ...req.body,
      user_id: req.session.user_id,
    });
    res.status(200).json(post);
  } catch (err) {
    console.log(err);
    res.status(400).json(err);
  }
});

module.exports = router;
