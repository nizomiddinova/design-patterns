import { DatabaseConnection } from "./DatabaseConnection";

const db1 = DatabaseConnection.getInstance();
const db2 = DatabaseConnection.getInstance();
const db3 = DatabaseConnection.getInstance();

db1.connect();
db2.showMessage();

console.log("db1 === db2:", db1 === db2);
console.log("db2 === db3:", db2 === db3);
console.log("db1 === db3:", db1 === db3);