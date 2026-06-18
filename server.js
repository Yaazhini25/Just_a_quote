const express = require("express");

const app = express();

app.use(express.static("public"));

app.get("/quote", (req, res) => {

    console.log("Frontend requested a quote");

    const quotes = [
        "Success comes from consistency.",
        "Keep solving problems daily.",
        "Small progress is still progress.",
        "Discipline beats motivation."
    ];

    const randomQuote =
        quotes[Math.floor(Math.random() * quotes.length)];

    res.json({
        quote: randomQuote
    });
});

app.listen(3000, () => {
    console.log("Server running on port 3000");
});