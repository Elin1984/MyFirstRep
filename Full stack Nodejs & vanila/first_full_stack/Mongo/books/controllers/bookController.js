const Book = require("../models/Book");
const validateAuthor = require("../validations/authorBodySchema");

exports.test = async (req, res) => {
  try {
    const newBook = await Book.create({
      name: "Harry Potter II",
      pages: 564,
      author: "631a072881ca07985effefd2",
    });

    res.status(200).json({ success: true, data: newBook });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
};

exports.getAll = async (req, res) => {
  try {
    const books = await Book.find().populate("author");
    res.status(200).json({ success: true, data: books });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
};

// findOne with model - by id
exports.getOne = async (req, res) => {
  try {
    const bookById = await Book.findById(req.params.id).populate("author");

    res.status(200).json({ success: true, data: bookById });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
};

exports.getOneByName = async (req, res) => {
  try {
    const bookByName = await Book.findOne({
      name: { $regex: new RegExp(req.params.name, "i") },
    }).populate("author");

    if (bookByName === null) {
      return res
        .status(404)
        .json({ success: false, message: "Book not found" });
    }

    res.status(200).json({ success: true, data: bookByName });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
};

exports.createOne = async (req, res) => {
  try {
    const { name, pages, author } = req.body;
    if (!name || !pages || !author) {
      return res
        .status(400)
        .json({ success: false, message: "Missing information" });
    }
    const newBook = await Book.create({ name, pages, author });
    res.status(201).json({ success: true, data: newBook });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
};

// get the id
// find the target book
// validate body
// update the target book with request body
// return response
exports.updateOne = async (req, res) => {
  try {
    const { id } = req.params;

    const bodyValidate = validateAuthor.validate(req.body);
    if (bodyValidate.error) {
      return res.status(400).json({
        success: false,
        message: bodyValidate.error.details[0].message,
      });
    }

    const bookToUpdate = await Book.findByIdAndUpdate(id, bodyValidate.value, {
      returnDocument: "after",
    });

    res.status(200).json({ success: true, data: bookToUpdate });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
};
