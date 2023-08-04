import Router from 'express';
export const router = Router();

router.get('/colegios', (_req, res)=>{
    res.json([{
        hash: '87123123hjsddasd123'
    }])
})


//  TODO: hacer post de colegios
