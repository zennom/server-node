import {Router, Request, Response} from 'express'

const router = Router()

router.get('/',(req: Request,res:Response) =>{
    res.send("Hello World!")
})
router.get('/contato',(req:Request,res:Response) =>{
    res.send("Página de Contato!")
})


export default router