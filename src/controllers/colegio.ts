
import colegio from "../models/colegio";

export const getColegios = async (req, res) => {
    const Colegio = await colegio.findAll()
   res.json(Colegio)
}

export const getColegio = async (req, res) => {
    const { hash } = req.params;
    const Colegio = await colegio.findByPk(hash)
    if(Colegio){
        res.json(Colegio)
    }else{
        res.status(404).json({
            msg: 'No existe el colegio'
        })
    }
}

export const createColegio = (req, res) => {
res.json({
    msg: 'createColegio',
    body: req
})
}