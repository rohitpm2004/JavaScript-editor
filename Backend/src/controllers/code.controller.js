import Code from "../models/Code.js";

// POST /api/code
export const createCode = async (req, res, next) => {
  try {
    const { code, language } = req.body;

    if (!code) {
      return res.status(400).json({ message: "Code is required" });
    }

    const savedCode = await Code.create({
      code,
      language
    });

    const shareUrl = `${process.env.FRONTEND_URL}/code/${savedCode._id}`;

    res.status(201).json({
      id: savedCode._id,
      url: shareUrl,
      message: "Code saved successfully"
    });
  } catch (error) {
    next(error);
  }
};

// GET /api/code/:id
export const getCodeById = async (req, res, next) => {
  try {
    const codeDoc = await Code.findById(req.params.id);

    if (!codeDoc) {
      return res.status(404).json({ message: "Code not found" });
    }

    res.json(codeDoc);
  } catch (error) {
    next(error);
  }
};
