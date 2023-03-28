import Post from "./Post.js";

class PostController {
  async create(req, res) {
    try {
      const { author, title, content, picture } = req.body;
      const post = await Post.create({ author, title, content, picture });
      console.log(req.body);
      return res.status(200).json(post);
    } catch (e) {
      res.status(500).json(e);
      console.log(e);
    }
  }

  async getAll(req, res) {
    try {
      const posts = await Post.find();
      return res.status(200).json(posts);
    } catch (e) {
      res.status(500).json(e);
      console.log(e);
    }
  }
  async getOne(req, res) {
    try {
      const { id } = req.params;
      console.log('req: ', req.params);
      const post = await Post.findById(id);
      return res.status(200).json(post);
    } catch (e) {
      res.status(500).json(e);
      console.log(e);
    }
  }
  async update(req, res) {
    try {
    } catch (e) {
      res.status(500).json(e);
      console.log(e);
    }
  }
  async delete(req, res) {
    try {
    } catch (e) {
      res.status(500).json(e);
      console.log(e);
    }
  }
}

export default new PostController();
