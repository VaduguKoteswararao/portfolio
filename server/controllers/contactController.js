import Contact from "../models/Contact.js";

export const sendMessage = async (req, res) => {
  try {
    const { name, email, message } = req.body;

    const newMessage = await Contact.create({
      name,
      email,
      message,
    });

    res.status(201).json({
      success: true,
      data: newMessage,
    });
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};