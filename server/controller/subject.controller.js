import Subject from "../model/subject.model.js";

// =========================
// GET ALL SUBJECTS
// =========================

const getSubjectsController = async (req, res) => {
  try {
    const subjects = await Subject.find().sort({
      createdAt: -1,
    });

    return res.status(200).json({
      success: true,
      subjects,
    });
  } catch (err) {
    console.log(err);

    return res.status(500).json({
      success: false,
      Message: "Server error",
    });
  }
};


// =========================
// ADD SUBJECT
// =========================

const addSubjectController = async (req, res) => {
  const body = req.body;

  try {
    // Check fields
    if (!body.name || !body.color) {
      return res.status(400).json({
        success: false,
        Message: "Subject name and color are required",
      });
    }

    // Create subject
    const subject = await Subject.create({
      name: body.name,
      color: body.color,
      progress: 0,
    });

    return res.status(201).json({
      success: true,
      Message: "Subject added successfully",
      subject,
    });
  } catch (err) {
    console.log(err);

    return res.status(500).json({
      success: false,
      Message: "Server error",
    });
  }
};


// =========================
// DELETE SUBJECT
// =========================

const deleteSubjectController = async (req, res) => {
  const { id } = req.params;

  try {
    const subject = await Subject.findByIdAndDelete(id);

    if (!subject) {
      return res.status(404).json({
        success: false,
        Message: "Subject not found",
      });
    }

    return res.status(200).json({
      success: true,
      Message: "Subject deleted successfully",
    });
  } catch (err) {
    console.log(err);

    return res.status(500).json({
      success: false,
      Message: "Server error",
    });
  }
};


export {
  getSubjectsController,
  addSubjectController,
  deleteSubjectController,
};