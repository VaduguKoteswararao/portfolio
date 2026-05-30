export const getProjects = async (req, res) => {
  try {
    const projects = [
      {
        title: "Portfolio Website",
        tech: "React, CSS, Node.js",
      },
      {
        title: "E-commerce Website",
        tech: "MERN Stack",
      },
    ];

    res.status(200).json(projects);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};