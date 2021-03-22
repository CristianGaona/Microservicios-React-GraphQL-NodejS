import { Sequelize } from "sequelize";

import accessEnv from "#root/helpers/accessEnv";

const DB_URI = accessEnv("DB_URI"); // Access enviroment variable

const sequelize = new Sequelize(DB_URI, {
    dialectOptions:{
        charset: "utf8",
        multipleStatements: true
    },
    loggin: false
})

export default sequelize;