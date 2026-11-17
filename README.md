# Express Route Inspector – Usage Demo

A practical demonstration of the **[express-route-inspector](https://www.npmjs.com/package/express-route-inspector)** npm package in a real Express.js application.

This project demonstrates how developers can inspect and analyze registered Express routes and middleware using a reusable npm package.

## 📦 NPM Package

**Package:** `express-route-inspector`

**Version:** `1.0.0`

**Author:** Shatakshi

- [View on npm](https://www.npmjs.com/package/express-route-inspector)
- [Original Package Repository](https://github.com/shatakshi0709/express-route-inspector)

## ✨ Features Demonstrated

This demo uses all six functions provided by the npm package:

| Function | Description |
|---|---|
| `inspectRoutes()` | Retrieves all registered Express routes. |
| `printRoutes()` | Prints routes in a readable format. |
| `getStats()` | Generates route statistics by HTTP method. |
| `findRoute()` | Finds routes by path and HTTP method. |
| `findDuplicates()` | Detects duplicate routes. |
| `getMiddlewares()` | Identifies global and route-level middleware. |

## 🛠️ Tech Stack

- Node.js
- Express.js
- JavaScript
- npm

## 📁 Project Structure

```text
express-route-inspector-demo/
│
├── server.js       # Express application with routes and middleware
├── test.js         # Demonstrates npm package functionality
├── package.json
├── package-lock.json
└── node_modules/
```

## 🚀 Getting Started

### 1. Clone the repository

```bash
git clone https://github.com/shatakshi0709/express-route-inspector-demo.git
cd express-route-inspector-demo
```

### 2. Install dependencies

```bash
npm install
```

### 3. Run the demonstration

```bash
node test.js
```

The test file imports the published `express-route-inspector` package and executes its functions on the Express application defined in `server.js`.

## 💻 How It Works

The project contains two main JavaScript files:

**1. server.js**

Contains a normal Express application with:
- Multiple HTTP routes (GET, POST, PUT and DELETE).
- Global middleware.
- Route-level middleware.

**2. test.js**

Imports the Express application and the published npm package.

It demonstrates all six exported functions and displays their results in the terminal.

## 📌 Example Usage

```javascript
const app = require("./server");

const {
    printRoutes,
    findRoute,
    getStats,
    findDuplicates,
    getMiddlewares,
    inspectRoutes
} = require("express-route-inspector");

// Print registered routes
printRoutes(app);

// Find a particular route
console.log(findRoute(app, "/users/:id", "GET"));

// Get route statistics
console.log(getStats(app));

// Detect duplicate routes
console.log(findDuplicates(app));

// Inspect middleware
console.log(getMiddlewares(app));

// Inspect all routes
console.log(inspectRoutes(app));
```

## 🎯 Purpose

The purpose of this project is to demonstrate the practical integration of a published npm package into an Express.js application.

Instead of manually examining route definitions, developers can use `express-route-inspector` to retrieve useful information about their application's routes and middleware.

## 👩‍💻 Author

**Shatakshi**

Created as a practical demonstration of npm package development, publishing and usage.