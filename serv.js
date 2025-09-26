const express = require("express");
const app = express();
const PORT = 3000;
//
app.get("/home", (req, res) => {
    res.send(`
        <h1> home page ,  hello first app express </h1>
        `);
});
//
app.get("/about", (req, res) => {
    res.send(`
        <h1> about page </h1>
        `);
});
//
app.get("/user/:name", (req, res) => {
    res.send(`hello ${req.params.name}`);
});
//
app.use(express.json());
app.use(express.static("public"));

app.post("/data", (req, res) => {
    res.json({ received: req.body });
});
//
app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});