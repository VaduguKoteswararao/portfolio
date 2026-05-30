import path from "path";

export const downloadResume = (req, res) => {
  const filePath = path.join(
    process.cwd(),
    "uploads",
    "resume.pdf"
  );

  res.download(filePath,"resume.pdf");
};