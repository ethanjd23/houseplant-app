// import * as dotenv from 'dotenv';

// const envFound = dotenv.config()

// if (!envFound) {
//     throw new Error("Cannot find .env file");
// }

export default {
    mysql: {
        connectionLimit: 10,
        host: "localhost",
        user: "plants",
        password: "plants123",
        database: "plants"
    },
    auth: {
        secret: "dev-dont-care-env-later"
    }
}