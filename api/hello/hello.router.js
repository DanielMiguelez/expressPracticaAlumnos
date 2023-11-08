import Router from 'express';

const router = Router();


router.get('/:name', (req,res)=>{
    const { name } = req.params;
    res.json({msg:`hola ${name}`});
})



/*outer.get('/dani', (req,res)=>{
        res.json({msg:'hola dani'});
})
router.get('/pepe', (req,res)=>{
    res.json({msg:'hola pepe'});
})*/

export default router;