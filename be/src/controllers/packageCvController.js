import packageService from '../services/packageCvService';

let getAllPackage = async (req, res) => {
    try {
        let data = await packageService.getAllPackage(req.query);
        return res.status(200).json(data);
    } catch (error) {
        console.log(error)
        return res.status(200).json({
            errCode: -1,
            errMessage: 'Lỗi máy chủ'
        })
    }
}

let getAllToSelect = async (req, res) => {
    try {
        let data = await packageService.getAllToSelect(req.query);
        return res.status(200).json(data);
    } catch (error) {
        console.log(error)
        return res.status(200).json({
            errCode: -1,
            errMessage: 'Lỗi máy chủ'
        })
    }
}

let getPackageById = async (req, res) => {
    try {
        let data = await packageService.getPackageById(req.query);
        return res.status(200).json(data);
    } catch (error) {
        console.log(error)
        return res.status(200).json({
            errCode: -1,
            errMessage: 'Lỗi máy chủ'
        })
    }
}


let getPaymentLink = async (req, res) => {
    try {
        let data = await packageService.getPaymentLink(req.query);
        return res.status(200).json(data);
    } catch (error) {
        console.log(error)
        return res.status(200).json({
            errCode: -1,
            errMessage: 'Lỗi máy chủ'
        })
    }
}

let paymentOrderSuccess = async (req, res) => {
    try {
        let data = await packageService.paymentOrderSuccess(req.body);
        return res.status(200).json(data);
    } catch (error) {
        console.log(error)
        return res.status(200).json({
            errCode: -1,
            errMessage: 'Lỗi máy chủ'
        })
    }
}

let setActiveTypePackage = async (req, res) => {
    try {
        let data = await packageService.setActiveTypePackage(req.body);
        return res.status(200).json(data);
    } catch (error) {
        console.log(error)
        return res.status(200).json({
            errCode: -1,
            errMessage: 'Lỗi máy chủ'
        })
    }
}

let creatNewPackageCv = async (req, res) => {
    try {
        let data = await packageService.creatNewPackageCv(req.body);
        return res.status(200).json(data);
    } catch (error) {
        console.log(error)
        return res.status(200).json({
            errCode: -1,
            errMessage: 'Lỗi máy chủ'
        })
    }
}

let updatePackageCv = async (req, res) => {
    try {
        let data = await packageService.updatePackageCv(req.body);
        return res.status(200).json(data);
    } catch (error) {
        console.log(error)
        return res.status(200).json({
            errCode: -1,
            errMessage: 'Lỗi máy chủ'
        })
    }
}

let getStatisticalPackageCv = async (req, res) => {
    try {
        let data = await packageService.getStatisticalPackage(req.query);
        return res.status(200).json(data);
    } catch (error) {
        console.log(error)
        return res.status(200).json({
            errCode: -1,
            errMessage: 'Lỗi máy chủ'
        })
    }
}

let getHistoryTrade = async (req, res) => {
    try {
        let data = await packageService.getHistoryTrade(req.query);
        return res.status(200).json(data);
    } catch (error) {
        console.log(error)
        return res.status(200).json({
            errCode: -1,
            errMessage: 'Lỗi máy chủ'
        })
    }
}

let getSumByYear = async (req, res) => {
    try {
        let data = await packageService.getSumByYear(req.query);
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
    getPaymentLink: getPaymentLink,
    paymentOrderSuccess: paymentOrderSuccess,
    getAllPackage: getAllPackage,
    setActiveTypePackage: setActiveTypePackage,
    getPackageById: getPackageById,
    creatNewPackageCv: creatNewPackageCv,
    updatePackageCv: updatePackageCv,
    getStatisticalPackageCv: getStatisticalPackageCv,
    getAllToSelect: getAllToSelect,
    getHistoryTrade: getHistoryTrade,
    getSumByYear: getSumByYear
}