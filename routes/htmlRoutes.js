//Install dependencies
const path = require("path");

//Export Route
module.exports = (app) => {
    //Notes Route
    app.get("/notes", (req, res) => {
        res.sendFile(path.join(__dirname, "../public/notes.html"))
    });

    //Index Route
    app.get("*", (req, res) => {
        res.sendFile(path.join(__dirname, "../public/index.html"))
    });
};

