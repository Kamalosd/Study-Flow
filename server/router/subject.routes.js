import express from "express";

import {
  getSubjectsController,
  addSubjectController,
  deleteSubjectController,
} from "../controller/subject.controller.js";

const router = express.Router();


// Get all subjects
router.get(
  "/",
  getSubjectsController
);


// Add subject
router.post(
  "/",
  addSubjectController
);


// Delete subject
router.delete(
  "/:id",
  deleteSubjectController
);


export default router;