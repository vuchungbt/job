import allcodeService from '../services/allcodeService';

let handleCreateNewAllCode = async (req, res) => {
    try {
        let data = await allcodeService.handleCreateNewAllCode(req.body);
        return res.status(200).json(data);
    } catch (error) {
        console.log(error)
        return res.status(200).json({
            errCode: -1,
            errMessage: 'Lỗi máy chủ'
        })
    }
}
let getAllCodeService = async (req, res) => {
    try {
        let data = await allcodeService.getAllCodeService(req.query.type);
        return res.status(200).json(data);
    } catch (error) {
        console.log(error)
        return res.status(200).json({
            errCode: -1,
            errMessage: 'Lỗi máy chủ'
        })
    }
}
let handleUpdateAllCode = async (req, res) => {
    try {
        let data = await allcodeService.handleUpdateAllCode(req.body);
        return res.status(200).json(data);
    } catch (error) {
        console.log(error)
        return res.status(200).json({
            errCode: -1,
            errMessage: 'Lỗi máy chủ'
        })
    }
}
let getDetailAllcodeByCode = async (req, res) => {
    try {
        let data = await allcodeService.getDetailAllcodeByCode(req.query.code);
        return res.status(200).json(data);
    } catch (error) {
        console.log(error)
        return res.status(200).json({
            errCode: -1,
            errMessage: 'Lỗi máy chủ'
        })
    }
}
let handleDeleteAllCode = async (req, res) => {
    try {
        let data = await allcodeService.handleDeleteAllCode(req.body.code);
        return res.status(200).json(data);
    } catch (error) {
        console.log(error)
        return res.status(200).json({
            errCode: -1,
            errMessage: 'Lỗi máy chủ'
        })
    }
}
let getListAllCodeService = async (req, res) => {
    try {
        let data = await allcodeService.getListAllCodeService(req.query);
        return res.status(200).json(data);
    } catch (error) {
        console.log(error)
        return res.status(200).json({
            errCode: -1,
            errMessage: 'Lỗi máy chủ'
        })
    }
}

let getListJobTypeAndCountPost = async (req, res) => {
    try {
        let data = await allcodeService.getListJobTypeAndCountPost(req.query);
        return res.status(200).json(data);
    } catch (error) {
        console.log(error)
        return res.status(200).json({
            errCode: -1,
            errMessage: 'Lỗi máy chủ'
        })
    }
}

let handleCreateNewSkill = async (req, res) => {
    try {
        let data = await allcodeService.handleCreateNewSkill(req.body);
        return res.status(200).json(data);
    } catch (error) {
        console.log(error)
        return res.status(200).json({
            errCode: -1,
            errMessage: 'Lỗi máy chủ'
        })
    }
}

let handleDeleteSkill = async (req, res) => {
    try {
        let data = await allcodeService.handleDeleteSkill(req.body.id);
        return res.status(200).json(data);
    } catch (error) {
        console.log(error)
        return res.status(200).json({
            errCode: -1,
            errMessage: 'Lỗi máy chủ'
        })
    }
}

let getAllSkillByJobCode = async (req, res) => {
    try {
        let data = await allcodeService.getAllSkillByJobCode(req.query.categoryJobCode);
        return res.status(200).json(data);
    } catch (error) {
        console.log(error)
        return res.status(200).json({
            errCode: -1,
            errMessage: 'Lỗi máy chủ'
        })
    }
}

let getListSkill = async (req, res) => {
    try {
        let data = await allcodeService.getListSkill(req.query);
        return res.status(200).json(data);
    } catch (error) {
        console.log(error)
        return res.status(200).json({
            errCode: -1,
            errMessage: 'Lỗi máy chủ'
        })
    }
}

let handleUpdateSkill = async (req, res) => {
    try {
        let data = await allcodeService.handleUpdateSkill(req.body);
        return res.status(200).json(data);
    } catch (error) {
        console.log(error)
        return res.status(200).json({
            errCode: -1,
            errMessage: 'Lỗi máy chủ'
        })
    }
}
let getDetailSkillById = async (req, res) => {
    try {
        let data = await allcodeService.getDetailSkillById(req.query.id);
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
    handleCreateNewAllCode: handleCreateNewAllCode,
    getAllCodeService: getAllCodeService,
    handleUpdateAllCode: handleUpdateAllCode,
    getDetailAllcodeByCode: getDetailAllcodeByCode,
    handleDeleteAllCode: handleDeleteAllCode,
    getListAllCodeService: getListAllCodeService,
    getListJobTypeAndCountPost: getListJobTypeAndCountPost,
    handleCreateNewSkill, handleDeleteSkill,
    getAllSkillByJobCode, getListSkill,
    handleUpdateSkill, getDetailSkillById
}