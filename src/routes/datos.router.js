import { Router } from 'express'
import { tb_encargado, tb_area, tb_tipo_incidencias, insert_incidencia, cantidad_incidencia } from '../controllers/datos.controller.js'

const router = Router()

router.get('/datos/encargado', tb_encargado)
router.get('/datos/areas', tb_area)
router.get('/datos/tipo-incidencias', tb_tipo_incidencias)
router.post('/datos/nueva-incidencia', insert_incidencia)
router.get('/datos/cantidad-incidencia', cantidad_incidencia)
router.post('/datos/enviar', (req, res) => {
    console.log(req.body)
    console.log(req.files);

    res.json(req.body)
})

export default router


