import express from "express";

const app = express();

const PORT = 8080;

app.get("/", (req, res) => {
    res.send("Hello from TypeScript server 🚀");
});

app.get("/order", (req, res) => {
    res.send("This is order Page");
})

app.get("/me", (req, res) => {
    res.send("My name is Shobhit");
})

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});