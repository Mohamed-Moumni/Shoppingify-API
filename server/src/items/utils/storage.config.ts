import { diskStorage } from "multer";
import { extname } from "path";


export const storage = diskStorage({
    destination: "./public/items/images",
    filename: (req, file, cb) => {
        cb(null, generateFilename(file));
    }
})

function generateFilename(file) {
    return `${Date.now()}${extname(file.originalname)}`;
}