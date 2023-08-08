import db from "../db/connection";
import { DataTypes } from 'sequelize';

const Colegio = db.define('Colegio', {
    nombre: {
        type: DataTypes.STRING
    },
    hash: {
        type: DataTypes.STRING,
        primaryKey: true
    }
})

export default Colegio;