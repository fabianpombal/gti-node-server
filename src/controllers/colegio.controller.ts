
import {Colegio} from "../models/colegio.model";
import connection from '../db/connection';
import { Response } from "express";

export const getColegios = async (req, res) => {
    connection.query(
        'SELECT * FROM `colegio`',
        (err, results: Array<Colegio>, fields) => {
            res.status(200).json(results);

             // results contains rows returned by server
            // fields contains extra meta data about results, if available
        }
    );
}

export const getColegio = async (req, res) => {
    

}

export const createColegio = (req, res: Response) => {
    connection.query(
        'INSERT INTO colegio (nombre, hash) VALUES (?,?)', [req.body.nombre, req.body.hash],
        function(err, results) {
            if(err){
                console.log(err);
            }else{
                console.log(results);
                res.status(200).send('All good!!')

            }
        }
      );
}