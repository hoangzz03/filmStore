import express from "express";
import { uploadImage } from "../upload/upload.controller.js";
import upload from "../middleware/multer.middleware.js";

const router = express.Router();

router.post("/", upload.single("file"), uploadImage);

export default router;