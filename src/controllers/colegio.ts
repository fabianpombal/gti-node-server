
import {Colegio} from "../models/colegio";
import connection from '../db/connection';

export const getColegios = async (req, res) => {
    connection.query(
        'SELECT * FROM `Colegio`',
        function(err, results: Array<Colegio>, fields) {
            res.json(results) // results contains rows returned by server
           // fields contains extra meta data about results, if available
        }
    );
}

export const getColegio = async (req, res) => {
    

}

export const createColegio = (req, res) => {
res.json({
    msg: 'createColegio',
    body: req
})
}