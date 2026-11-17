
const express = require("express");

const app = express();

app.use(express.json());

// ========== MIDDLEWARES ==========

function logger(req, res, next) {
    console.log(req.method, req.url);
    next();
}

function authMiddleware(req, res, next) {
    next();
}

function adminMiddleware(req, res, next) {
    next();
}

app.use(logger);

// ========== ROUTES ==========

// User routes
app.get("/users", (req, res) => {
    res.send("All users");
});

app.post("/users", (req, res) => {
    res.send("Create user");
});

app.get("/users/:id", authMiddleware, (req, res) => {
    res.send("User details");
});

app.delete("/users/:id", authMiddleware, (req, res) => {
    res.send("Delete user");
});

// Product routes
app.get("/products", (req, res) => {
    res.send("All products");
});

app.post("/products", adminMiddleware, (req, res) => {
    res.send("Create product");
});

// Admin routes
app.get("/admin/dashboard", authMiddleware, adminMiddleware, (req, res) => {
    res.send("Admin dashboard");
});

app.delete("/admin/users/:id", adminMiddleware, (req, res) => {
    res.send("Delete user by admin");
});

// Start server only when directly executed
if (require.main === module) {
    app.listen(3000, () => {
        console.log("Server running on port 3000");
    });
}

module.exports = app;
