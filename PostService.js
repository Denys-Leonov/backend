import Post from "./Post.js";
import fileService from "./fileService.js";
 
class PostService {
  async create(post, picture) {
    const fileName = fileService.saveFile(picture)
    const createdPost = await Post.create({...post, picture: fileName});
    return createdPost;
  }

  async getAll() {
    const posts = await Post.find();
    return posts;
  }

  async getOne(postID) {
    if (!postID) {
        throw new Error('no ID')
    }
    const post = await Post.findById(postID);
    return post;
  }
  async update(id, post) {
    if (!id) {
        throw new Error('no ID')
    }
    const updatedPost = await Post.findByIdAndUpdate(id, post, {
      new: true,
    });

    return updatedPost;
  }

  async delete(id) {
    if (!id) {
        throw new Error('no ID')
    }
    const deletedPost = await Post.findByIdAndDelete(id);
    if (!deletedPost) {
        throw new Error('Post has been recently removed')
    }
    return deletedPost;
  }
}

export default new PostService();
