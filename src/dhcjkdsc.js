const { URL } = require('url');

const connectionString = "mongodb+srv://preethikasri009:<password>@cluster0.cgtqmcp.mongodb.net/mydatabase";

const parsedUrl = new URL(connectionString);
const databaseName = parsedUrl.pathname.substr(1); // Remove the leading slash

console.log(databaseName);
