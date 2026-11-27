export class DatabaseConnection {
    private static instance: DatabaseConnection;

    private constructor() {
        console.log("Database connection created!");
    }

    public static getInstance(): DatabaseConnection {
        if (!DatabaseConnection.instance) {
            DatabaseConnection.instance = new DatabaseConnection();
        }

        return DatabaseConnection.instance;
    }

    public connect(): void {
        console.log("Connected to database successfully!");
    }

    public showMessage(): void {
        console.log("This is a single database connection.");
    }
}