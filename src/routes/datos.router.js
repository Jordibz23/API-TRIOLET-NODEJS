import { Router } from 'express'
import { tb_encargado, tb_matricula, ultimoID, insert_matricula } from '../controllers/datos.controller.js'

const router = Router()

router.get('/datos/encargado', tb_encargado)
router.get('/datos/matricula', tb_matricula)
router.get('/datos/ultimoid', ultimoID)
router.post('/datos/nuevaMatricula', insert_matricula)
router.post('/datos/enviar', (req, res) => {
    console.log(req.body)
    console.log(req.files);

    res.json(req.body)
})

export default router


