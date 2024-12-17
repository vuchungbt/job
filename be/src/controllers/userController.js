import userService from '../services/userService';


let handleCreateNewUser = async (req, res) => {
    try {
        let data = await userService.handleCreateNewUser(req.body);
        return res.status(200).json(data);
    } catch (error) {
        console.log(error)
        return res.status(200).json({
            errCode: -1,
            errMessage: 'Lỗi máy chủ'
        })
    }
}
let handleUpdateUser = async (req, res) => {
    try {
        let data = await userService.updateUserData(req.body);
        return res.status(200).json(data);
    } catch (error) {
        console.log(error)
        return res.status(200).json({
            errCode: -1,
            errMessage: 'Lỗi máy chủ'
        })
    }
}
let handleBanUser = async (req, res) => {
    try {
        let data = await userService.banUser(req.body.data.id);
        return res.status(200).json(data);
    } catch (error) {
        console.log(error)
        return res.status(200).json({
            errCode: -1,
            errMessage: 'Lỗi máy chủ'
        })
    }
}
let handleUnbanUser = async (req, res) => {
    try {
        let data = await userService.unbanUser(req.body.data.id);
        return res.status(200).json(data);
    } catch (error) {
        console.log(error)
        return res.status(200).json({
            errCode: -1,
            errMessage: 'Lỗi máy chủ'
        })
    }
}
let handleLogin = async (req, res) => {
    try {
        let data = await userService.handleLogin(req.body);
        return res.status(200).json(data);
    } catch (error) {
        console.log(error)
        return res.status(200).json({
            errCode: -1,
            errMessage: 'Lỗi máy chủ'
        })
    }
}

let forgotPassword = async (req, res) => {
    try {
        let data = await userService.forgotPassword(req.body);
        return res.status(200).json(data);
    } catch (error) {
        return res.status(200).json({
            errCode: -1,
            errMessage: 'Lỗi máy chủ'
        })
    }
}

let handleChangePassword = async (req, res) => {
    try {
        let data = await userService.handleChangePassword(req.body);
        return res.status(200).json(data);
    } catch (error) {
        console.log(error)
        return res.status(200).json({
            errCode: -1,
            errMessage: 'Lỗi máy chủ'
        })
    }
}
let getAllUser = async (req, res) => {
    try {
        let data = await userService.getAllUser(req.query);
        return res.status(200).json(data);
    } catch (error) {
        console.log(error)
        return res.status(200).json({
            errCode: -1,
            errMessage: 'Lỗi máy chủ'
        })
    }
}
let getDetailUserById = async (req, res) => {
    try {
        let data = await userService.getDetailUserById(req.query.id);
        return res.status(200).json(data);
    } catch (error) {
        console.log(error)
        return res.status(200).json({
            errCode: -1,
            errMessage: 'Lỗi máy chủ'
        })
    }
}
let checkUserPhone = async (req, res) => {
    try {
        let data = await userService.checkUserPhone(req.query.phonenumber);
        return res.status(200).json(data);
    } catch (error) {
        console.log(error)
        return res.status(200).json({
            errCode: -1,
            errMessage: 'Lỗi máy chủ'
        })
    }
}

let changePaswordByPhone = async (req, res) => {
    try {
    let data = await userService.changePaswordByPhone(req.body);
        return res.status(200).json(data);
    } catch (error) {
        console.log(error)
        return res.status(200).json({
            errCode: -1,
            errMessage: 'Lỗi máy chủ'
        })
    }
}

let setDataUserSetting = async (req, res) => {
    try {
    let data = await userService.setDataUserSetting(req.body);
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
    handleCreateNewUser: handleCreateNewUser,
    handleUpdateUser: handleUpdateUser,
    handleBanUser: handleBanUser,
    handleUnbanUser: handleUnbanUser,
    handleLogin: handleLogin,
    forgotPassword: forgotPassword,
    handleChangePassword: handleChangePassword,
    getAllUser: getAllUser,
    getDetailUserById: getDetailUserById,
    checkUserPhone: checkUserPhone,changePaswordByPhone,
    setDataUserSetting
}