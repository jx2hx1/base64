// const express = require('express')
import express from "express";
import imageToBase64 from "image-to-base64";
import cors from "cors";

const app = express();
app.use(express.json());
app.use(cors());

app.get("/", (req, res) => {
  res.send("hello world");
});

// GET 요청이 들어왔을 때
app.get("/getBase64", async (req, res) => {
  // res.send("Hello World!");
  const { text } = req.query;

  const temp = text.slice(
    text.indexOf("http://www.nature.go.kr"),
    text.indexOf("</imgUrl>")
  );
  // console.log(text);
  const result = await imageToBase64(temp)
    .then((response) => {
      return response;
      // console.log(response);
    })
    .catch((error) => {
      console.log(error);
    });
  // return result;
  res.send(result);
});

app.listen(3000, () => {
  // console.log(`Example app listening on port ${3000}`);
}); // 3000번 포트
