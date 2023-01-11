import express from "express";
import auth from "../middleware/auth.js";
import {
  getNotes,
  createNote,
  updateNote,
  deleteNote,
} from "../controllers/notes.js";

const router = express.Router();

router.route("/").get(auth, getNotes).post(auth, createNote);

router
  .route("/:id")
  .put(auth, updateNote)
  .delete(auth, deleteNote);

export default router;
