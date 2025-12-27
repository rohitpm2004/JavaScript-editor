import express from "express";
import {
  createCode,
  getCodeById
} from "../controllers/code.controller.js";

const router = express.Router();

router.post("/", createCode);
router.get("/:id", getCodeById);

export default router;