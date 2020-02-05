import { Router, Request, Response } from 'express';

export const router = Router();

router.get('/mensajes', (req:Request, res:Response)=> {
    res.json({
        ok:true,
        mensaje:'Todo ok con el GET'
    });
})

router.post('/mensajes/:id', (req:Request, res:Response)=> {
    
    const body = req.body.body;
    const from = req.body.from;
    const id = req.params.id;
    res.json({
        ok:true,
        mensaje:'Ok con el Post',
        body,
        from,
        id
    });
})