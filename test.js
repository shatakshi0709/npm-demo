
const app = require("./server");

const {
    inspectRoutes,
    printRoutes,
    getStats,
    findRoute,
    findDuplicates,
    getMiddlewares
} = require("express-route-inspector");

// Test 1: Print all routes
console.log("\n1. PRINT ROUTES");
printRoutes(app);

// Test 2: Find a particular route
console.log("\n2. FIND USER ROUTE");
console.log(findRoute(app, "/users/:id", "GET"));

// Test 3: Route statistics
console.log("\n3. ROUTE STATISTICS");
console.log(getStats(app));

// Test 4: Find duplicate routes
console.log("\n4. DUPLICATE ROUTES");
console.log(findDuplicates(app));

// Test 5: Find middlewares
console.log("\n5. MIDDLEWARES");
console.log(getMiddlewares(app));

// Test 6: Inspect all routes
console.log("\n6. INSPECT ROUTES");
console.log(inspectRoutes(app));
