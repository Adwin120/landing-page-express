import express from "express";
import page from "./page";

const app = express();
const port = 3030;

app.use(express.static("./dist/assets"));

app.get("/", (_, res) => {
    res.send(page);
});

app.listen(port, () => {
    console.log(`listening on port ${port}`);
});
