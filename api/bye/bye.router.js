import Router from 'express';

const router = Router();

router.get('/:name', (req,res)=>{
    const { name } = req.params;
    res.json({msg:`bye ${name}`});
})


/*router.get('/dani', (req,res)=>{
    res.json({msg:'adios dani'});
})

router.get('/pepe', (req,res)=>{
    res.json({msg:'adios pepe'});
})*/

export default router;