const cloudinary= require("cloudinary").v2;

cloudinary.config({
  cloud_name: "dvxdrrkql",
  api_key: "226736932481697",
  api_secret: "AA3zzhlgBkMYBetPL6ob5Jiug5s",
});

//upload an image

async function cloudinaryFileUpload(file) {
  const uploadResult = await cloudinary.uploader.upload(file).catch((error) => {
    console.error(error);
  });
  return uploadResult.url

  console.log(uploadResult)
}

module.exports = { cloudinaryFileUpload };
