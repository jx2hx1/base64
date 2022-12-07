import express from "express";
import imageToBase64 from "image-to-base64";
import cors from "cors";

const app = express();
app.use(express.json());
app.use(cors());

app.get("/", (req, res) => {
  res.send("hello world");
});

app.get("/getBase64", async (req, res) => {
  const { text } = req.query;

  const result = await imageToBase64(text)
    .then((response) => {
      return "data:image/jpg;base64," + response;
      // console.log(response);
    })
    .catch((error) => {
      console.log(error);
    });
  res.send(result);
});

app.listen(3000, () => {
  // console.log(`Example app listening on port ${3000}`);
});
