import postService from '../services/postService';

let handleCreateNewPost = async (req, res) => {
  try {
    let data = await postService.handleCreateNewPost(req.body);
    return res.status(200).json(data);
  } catch (error) {
    console.log(error)
    return res.status(200).json({
      errCode: -1,
      errMessage: 'Lỗi máy chủ'
    })
  }
}
let handleReupPost = async (req, res) => {
  try {
    let data = await postService.handleReupPost(req.body);
    return res.status(200).json(data);
  } catch (error) {
    console.log(error)
    return res.status(200).json({
      errCode: -1,
      errMessage: 'Lỗi máy chủ'
    })
  }
}
let handleUpdatePost = async (req, res) => {
  try {
    let data = await postService.handleUpdatePost(req.body);
    return res.status(200).json(data);
  } catch (error) {
    console.log(error)
    return res.status(200).json({
      errCode: -1,
      errMessage: 'Lỗi máy chủ'
    })
  }
}
let handleBanPost = async (req, res) => {
  try {
    let data = await postService.handleBanPost(req.body);
    return res.status(200).json(data);
  } catch (error) {
    console.log(error)
    return res.status(200).json({
      errCode: -1,
      errMessage: 'Lỗi máy chủ'
    })
  }
}

let handleAcceptPost = async (req, res) => {
  try {
    let data = await postService.handleAcceptPost(req.body);
    return res.status(200).json(data);
  } catch (error) {
    console.log(error)
    return res.status(200).json({
      errCode: -1,
      errMessage: 'Lỗi máy chủ'
    })
  }
}
let getListPostByAdmin = async (req, res) => {
  try {
    let data = await postService.getListPostByAdmin(req.query);
    return res.status(200).json(data);
  } catch (error) {
    console.log(error)
    return res.status(200).json({
      errCode: -1,
      errMessage: 'Lỗi máy chủ'
    })
  }
}

let getAllPostByAdmin = async (req, res) => {
  try {
    let data = await postService.getAllPostByAdmin(req.query);
    return res.status(200).json(data);
  } catch (error) {
    console.log(error)
    return res.status(200).json({
      errCode: -1,
      errMessage: 'Lỗi máy chủ'
    })
  }
}
let getDetailPostById = async (req, res) => {
  try {
    let data = await postService.getDetailPostById(req.query.id);
    return res.status(200).json(data);
  } catch (error) {
    console.log(error)
    return res.status(200).json({
      errCode: -1,
      errMessage: 'Lỗi máy chủ'
    })
  }
}
let handleActivePost = async (req, res) => {
  try {
    let data = await postService.handleActivePost(req.body);
    return res.status(200).json(data);
  } catch (error) {
    console.log(error)
    return res.status(200).json({
      errCode: -1,
      errMessage: 'Lỗi máy chủ'
    })
  }
}
let getFilterPost = async (req, res) => {
  try {
    let data = await postService.getFilterPost(req.query);
    return res.status(200).json(data);
  } catch (error) {
    console.log(error)
    return res.status(200).json({
      errCode: -1,
      errMessage: 'Lỗi máy chủ'
    })
  }
}

let getStatisticalTypePost = async (req, res) => {
  try {
    let data = await postService.getStatisticalTypePost(req.query);
    return res.status(200).json(data)
  } catch (error) {
    console.log(error)
    return res.status(200).json({
      errCode: -1,
      errMessage: 'Lỗi máy chủ'
    })
  }
}

let getListNoteByPost = async (req, res) => {
  try {
    let data = await postService.getListNoteByPost(req.query);
    return res.status(200).json(data)
  } catch (error) {
    console.log(error)
    return res.status(200).json({
      errCode: -1,
      errMessage: 'Lỗi máy chủ'
    })
  }
}
module.exports = {
  handleCreateNewPost: handleCreateNewPost,
  handleUpdatePost: handleUpdatePost,
  handleBanPost: handleBanPost,
  getListPostByAdmin: getListPostByAdmin,
  getAllPostByAdmin: getAllPostByAdmin,
  getDetailPostById: getDetailPostById,
  handleActivePost: handleActivePost,
  handleAcceptPost: handleAcceptPost,
  getFilterPost: getFilterPost,
  getStatisticalTypePost: getStatisticalTypePost,
  getListNoteByPost: getListNoteByPost,
  handleReupPost: handleReupPost
}