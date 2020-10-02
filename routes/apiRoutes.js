//Install dependencies
const fs = require("fs");
const db = require("../db/db.json");

//Export routes
module.exports = (app) => {
    //Get request
    app.get("/api/notes", (req, res) => {
        fs.readFile("./db/db.json", "utf-8", (err) => {
            if (err) {
                console.log(err);
                return res.status(500).json({
                    error: true,
                    data: null,
                    message: "Unable to retrieve note",
                }); 
            };
            res.json({
                error: false,
                data: JSON.parse(data),
                message: "Retrieved Notes successfully"
            });
        });
    });

    //Post request
    app.post("/api/notes", (req, res) => {
        fs.readFile("./db/db.json", "utf-8", (err) => {
            if (err) {
                console.log(err)
                return res.status(500).json({
                    error: true,
                    data: null,
                    message: "Unable to retrieve note"
                });
            };
            for (let i = 0; i < db.length; i++) {
                const id = 0;
                const newBody = req.body;
                id = id + 1;
                newBody[i].id = id;
                db.push(newBody[i]);
            };
            
        });
        fs.writeFile("./db/db.json", JSON.stringify(db), (err) => {
            if (err) {
                console.log(err);
                return res.status(500).json({
                    error: true,
                    data: null,
                    message: "Unable wrote to JSON file",
                });
            };
            res.json({
                error: false,
                data: newBody,
                message: "Successfully wrote note"
            });
        });

    });
};