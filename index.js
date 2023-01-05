const express = require("express");
const cors = require("cors");
const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
const categories = require("./data/categories.json");
const courses = require("./data/courses.json");

app.get("/categories", (req, res) => {
    res.send(categories);
});

app.get("/courses", (req, res) => {
    res.send(courses);
});

// get category based data
app.get("/courses/category/:id", (req, res) => {
    const id = req.params.id;

    const category_courses = courses.filter((n) => n.category_id === id);
    res.send(category_courses);
});

// get single course data
app.get("/courses/course/:id", (req, res) => {
    const id = req.params.id;
    const course = courses.find((n) => n._id === id);
    res.send(course);
    console.log("Hello: ", course);
});

// testing the server
app.listen(port, () => {
    console.log("Tech Learner Server running on port", port);
});