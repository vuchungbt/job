import packageService from '../services/packagePostService';

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

let getPackageByType = async (req, res) => {
  try {
    let data = await packageService.getPackageByType(req.query);
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

let creatNewPackagePost = async (req, res) => {
  try {
    let data = await packageService.creatNewPackagePost(req.body);
    return res.status(200).json(data);
  } catch (error) {
    console.log(error)
    return res.status(200).json({
      errCode: -1,
      errMessage: 'Lỗi máy chủ'
    })
  }
}

let updatePackagePost = async (req, res) => {
  try {
    let data = await packageService.updatePackagePost(req.body);
    return res.status(200).json(data);
  } catch (error) {
    console.log(error)
    return res.status(200).json({
      errCode: -1,
      errMessage: 'Lỗi máy chủ'
    })
  }
}

let getStatisticalPackage = async (req, res) => {
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
  getPackageByType: getPackageByType,
  getPaymentLink: getPaymentLink,
  paymentOrderSuccess: paymentOrderSuccess,
  getAllPackage: getAllPackage,
  setActiveTypePackage: setActiveTypePackage,
  getPackageById: getPackageById,
  creatNewPackagePost: creatNewPackagePost,
  updatePackagePost: updatePackagePost,
  getStatisticalPackage: getStatisticalPackage,
  getHistoryTrade: getHistoryTrade,
  getSumByYear: getSumByYear
}