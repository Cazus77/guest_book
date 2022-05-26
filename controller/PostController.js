import Post from "../models/Post.js";

class PostController {
  async getAll(req, res) {
    try {
      const posts = await Post.find().lean();
      res.render("index", { posts: posts, title: "Отзывы" });
    } catch (e) {
      res.status(500).json(e);
    }
  }

  async create(req, res) {
    try {
      const post = await Post.create(req.body);
      res.redirect("/");
    } catch (e) {
      res.status(404).render("404");
    }
  }
}

export default new PostController();
