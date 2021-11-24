import dotenv from 'dotenv';
dotenv.config();

const env = {
    app_port: process.env.APP_PORT || 8085,
    db_port: process.env.DB_PORT,
    db_name: process.env.DB_NAME,
    db_user: process.env.DB_USER,
    db_host: process.env.DB_HOST,
    db_password: process.env.DB_PASSWORD,
}

export default env;