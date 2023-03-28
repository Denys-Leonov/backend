import PostService from "./PostService.js";

class PostController {
  async create(req, res) {
    try {
      console.log(req.files); 
      const post = await PostService.create(req.body, req.files.picture);
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
      const post = await PostService.getOne(req.params.id);
      return res.status(200).json(post);
    } catch (e) {
      res.status(500).json(e);
      console.log(e);
    }
  }
  async update(req, res) {
    try {
      const updatedPost = await PostService.update(req.body._id, req.body);
      return res.status(200).json(updatedPost);
    } catch (e) {
      res.status(500).json(e.message);
      console.log(e);
    }
  }
  async delete(req, res) {
    try {
      const deletedPost = await PostService.delete(req.params.id);
      return res
        .status(200)
        .json({ message: `Post ${req.params.id} has been removed`, deletedPost });
    } catch (e) {
      res.status(500).json(e.message);
      console.log(e);
    }
  }
}

export default new PostController();
