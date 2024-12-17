import cvService from '../services/cvService';

let handleCreateNewCV = async (req, res) => {
    try {
        let data = await cvService.handleCreateCv(req.body);
        return res.status(200).json(data);
    } catch (error) {
        console.log(error)
        return res.status(200).json({
            errCode: -1,
            errMessage: 'Lỗi máy chủ'
        })
    }
}
let getAllListCvByPost = async (req, res) => {
    try {
        let data = await cvService.getAllListCvByPost(req.query);
        return res.status(200).json(data);
    } catch (error) {
        console.log(error)
        return res.status(200).json({
            errCode: -1,
            errMessage: 'Lỗi máy chủ'
        })
    }
}
let getDetailCvById = async (req, res) => {
    try {
        let data = await cvService.getDetailCvById(req.query);
        return res.status(200).json(data);
    } catch (error) {
        console.log(error)
        return res.status(200).json({
            errCode: -1,
            errMessage: 'Lỗi máy chủ'
        })
    }
}
let getAllCvByUserId = async (req, res) => {
    try {
        let data = await cvService.getAllCvByUserId(req.query);
        return res.status(200).json(data);
    } catch (error) {
        console.log(error)
        return res.status(200).json({
            errCode: -1,
            errMessage: 'Lỗi máy chủ'
        })
    }
}
let getStatisticalCv= async (req, res) => {
    try {
        let data = await cvService.getStatisticalCv(req.query);
        return res.status(200).json(data);
    } catch (error) {
        console.log(error)
        return res.status(200).json({
            errCode: -1,
            errMessage: 'Lỗi máy chủ'
        })
    }
}

let fillterCVBySelection= async (req, res) => {
    try {
        let data = await cvService.fillterCVBySelection(req.query);
        return res.status(200).json(data);
    } catch (error) {
        console.log(error)
        return res.status(200).json({
            errCode: -1,
            errMessage: 'Lỗi máy chủ'
        })
    }
}
let checkSeeCandiate= async (req, res) => {
    try {
        let data = await cvService.checkSeeCandiate(req.query);
        return res.status(200).json(data);
    } catch (error) {
        console.log(error)
        return res.status(200).json({
            errCode: -1,
            errMessage: 'Lỗi máy chủ'
        })
    }
}
module.exports = {
    handleCreateNewCV: handleCreateNewCV,
    getAllListCvByPost: getAllListCvByPost,
    getDetailCvById: getDetailCvById,
    getAllCvByUserId: getAllCvByUserId,
    getStatisticalCv: getStatisticalCv,
    fillterCVBySelection: fillterCVBySelection,
    checkSeeCandiate:checkSeeCandiate
}