import cloudinary from "../lib/cloudinary.js";

export const uploadImage = async (req, res) => {
    try {
        if (!req.file) {
            return res.status(400).json({ message: "No file uploaded" });
        }

        const uploadResponse = await new Promise((resolve, reject) => {
            const uploadStream = cloudinary.uploader.upload_stream(
                { resource_type: "auto" },
                (error, result) => {
                    if (error) {
                        reject(error);
                    } else {
                        resolve(result);
                    }
                }
            );
            uploadStream.end(req.file.buffer);
        });

        res.status(200).json({ url: uploadResponse.secure_url });
    } catch (error) {
        console.log("error in upload image:", error);
        res.status(500).json({ message: "Internal server error" });
    }
};