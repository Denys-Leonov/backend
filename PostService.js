import Post from "./Post.js";

class PostService {
  async create(post) {
    const createdPost = await Post.create(post);
    return createdPost;
  }

  async getAll() {
    const posts = await Post.find();
    return posts;
  }

  async getOne(postID) {
    const post = await Post.findById(postID);
    return post;
  }
  async update(id, post) {
    const updatedPost = await Post.findByIdAndUpdate(id, post, {
      new: true,
    });

    return updatedPost;
  }

  async delete(id) {
    const deletedPost = await Post.findByIdAndDelete(id);
    return deletedPost;
  }
}

export default new PostService();
