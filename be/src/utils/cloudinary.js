const cloudinary = require("cloudinary").v2;
require('dotenv').config();

cloudinary.config({
    cloud_name: process.env.CLOUD_NAME,
    api_key: process.env.API_KEY,
    api_secret: process.env.API_SECRET,
});

const uploadImage = async (file) => {
    try {
        const result = await cloudinary.uploader.upload(file, {
            upload_preset: 'dev_setups'
        });
        return result.url;
    } catch (error) {
        console.error('Error uploading image:', error);
        throw error;
    }
};

module.exports = { uploadImage };