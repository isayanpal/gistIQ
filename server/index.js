const express = require("express");
const multer = require("multer");
const { promises: fs } = require("fs");
const pdfParse = require("pdf-parse");
const { GoogleGenerativeAI } = require("@google/generative-ai");
const cors = require("cors");

require("dotenv").config();

const app = express();
const port = 5000;

app.use(cors());
app.use(express.json());

const storage = multer.memoryStorage();
const upload = multer({ storage: storage });

const genAI = new GoogleGenerativeAI(process.env.GOOGLE_API_KEY);

async function generateSummary(buffer) {
  try {
    const data = await pdfParse(buffer);
    const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });
    const result = await model.generateContent([
      {
        inlineData: {
          data: Buffer.from(buffer).toString("base64"),
          mimeType: "application/pdf",
        },
      },
      "Summarize this document",
    ]);
    return result.response.text();
  } catch (error) {
    console.error("Error processing PDF:", error);
    return "Error generating summary.";
  }
}

app.post("/upload", upload.single("pdf"), async (req, res) => {
  if (!req.file) {
    return res.status(400).send("No file uploaded");
  }
  try {
    const summary = await generateSummary(req.file.buffer);
    res.json({ summary: summary });
  } catch (error) {
    res.status(500).send("Error processing PDF");
  }
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
