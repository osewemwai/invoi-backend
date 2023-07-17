import { Sequelize } from "sequelize";
import dotenv from "dotenv";

dotenv.config();

const { DB_HOST, DB_USER, DB_PASSWORD, DB_NAME } = process.env;

const sequelize = new Sequelize(DB_NAME!, DB_USER!, DB_PASSWORD!, {
    host: DB_HOST, dialect: "mysql", dialectOptions: {
        ssl: {
            rejectUnauthorized: true,
        }
    }
});

export async function testConnection() {
    try {
        await sequelize.authenticate();
        console.log("Connection has been established successfully.");
    } catch (error) {
        console.error("Unable to connect to the database:", error);
    }
}

export default sequelize;