import mongoose from "mongoose";

const singleGallerySchema = new mongoose.Schema({
    // user_id: {
    //     type: String,
    //     required: true,
    //   },
    fileName: {
        type: String,
        required: true
    },
    filePath: {
        type: String,
        required: true
    },
    fileType: {
        type: String,
        required: true
    },
    fileSize: {
        type: String,
        required: true
    }
});

const singleGallery = mongoose.model("singleGallery", singleGallerySchema);

export default singleGallery;
