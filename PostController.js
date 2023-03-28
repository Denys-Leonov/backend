import Post from "./Post.js";
import PostService from "./PostService.js";

class PostController {
  async create(req, res) {
    try {
      const post = await PostService.create(req.body);
      console.log(req.body);
      return res.status(200).json(post);
    } catch (e) {
      res.status(500).json(e);
      console.log(e);
    }
  }

  async getAll(req, res) {
    try {
      const posts = await PostService.getAll();
      return res.status(200).json(posts);
    } catch (e) {
      res.status(500).json(e);
      console.log(e);
    }
  }
  async getOne(req, res) {
    try {
      const { id } = req.params;
      if (!id) {
        res.status(400).json({ message: "No ID sent" });
      }
      const post = await PostService.getOne(id);
      return res.status(200).json(post);
    } catch (e) {
      res.status(500).json(e);
      console.log(e);
    }
  }
  async update(req, res) {
    try {
      const post = req.body;
      if (!post._id) {
        return res.status(400).json({ message: "ID not found" });
      }
      const updatedPost = await PostService.update(post._id, post);

      return res.status(200).json(updatedPost);
    } catch (e) {
      res.status(500).json(e);
      console.log(e);
    }
  }
  async delete(req, res) {
    try {
      const { id } = req.params;

      if (!id) {
        return res.status(400).json({ message: "ID not found" });
      }
      const deletedPost = await PostService.delete(id);
      return res
        .status(200)
        .json({ message: `Post ${id} has been removed`, deletedPost });
    } catch (e) {
      res.status(500).json(e);
      console.log(e);
    }
  }
}

export default new PostController();
