const Author = require("../models/Author");

exports.test = async (req, res) => {
  try {
    const newAuthor = await Author.create({
      firstName: "John",
      lastName: "Doe",
      age: 30,
    });
    res.status(201).json({ success: true, data: newAuthor });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
};

exports.getAll = async (req, res) => {
  try {
    const authors = await Author.find();
    res.status(200).json({ success: true, data: authors });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
};
