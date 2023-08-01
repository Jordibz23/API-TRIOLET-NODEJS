import { pool } from '../db.js'

export const tb_matricula = async (req, res) => {
    const [result] = await pool.query('SELECT m.* ,e.nombre as nombreEn from matricula m inner join encargado e on m.id_encargado = e.id_encargado;')
    res.send(result)
}

export const tb_encargado = async (req, res) => {
    const [result] = await pool.query('Select id_encargado, nombre from encargado')
    res.send(result)
}

export const ultimoID = async (req, res) => {
    const [result] = await pool.query('SELECT id_matricula from matricula order by id_matricula DESC LIMIT 1;')
    res.send(result[0])
}

export const insert_matricula = async (req, res) => {
    try {
        const { id_matricula, apoderado, fecha, grado, monto, nivel, tiempo, tipo_pago, tipo_postulante,
            id_encargado } = req.body
        const [rows] = await pool.query('INSERT INTO matricula values(?,?,?,?,?,?,?,?,?,?)',
            [id_matricula, apoderado, fecha, grado, monto, nivel, tiempo, tipo_pago, tipo_postulante,
                id_encargado])
        res.send({ message: 'Matricula guardada correctamente' })
    } catch (error) {
        return res.send({ message: error })
    }


}