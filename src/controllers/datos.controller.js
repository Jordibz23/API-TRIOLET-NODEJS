import { pool } from '../db.js'

export const tb_area = async (req, res) => {
    const [result] = await pool.query('SELECT * FROM  tb_area;')
    res.send(result)
}

export const tb_encargado = async (req, res) => {
    const [result] = await pool.query('Select * from tb_encargado')
    res.send(result)
}

export const tb_tipo_incidencias = async (req, res) => {
    const [result] = await pool.query('SELECT * FROM tb_tipo_incidencia;')
    res.send(result)
}

export const cantidad_incidencia = async (req, res) => {
    const [result] = await pool.query('SELECT count(*) as cantidad, ti.nom_tipo_incidencia FROM `tb_incidencias` d inner join tb_tipo_incidencia ti on ti.id_tipo_incidencia= d.id_tipo_incidencia GROUP BY d.id_tipo_incidencia;')
    res.send(result)
}

export const insert_incidencia = async (req, res) => {
    try {
        const { id_usuario, id_area, id_tipo_incidencia, descripcion_incidencia, fecha_incidencia, estado_incidencia } = req.body
        const [rows] = await pool.query('INSERT INTO matricula( id_usuario, id_area, id_tipo_incidencia, descripcion_incidencia, fecha_incidencia, estado_incidencia) values(?,?,?,?,?,?)',
            [id_usuario, id_area, id_tipo_incidencia, descripcion_incidencia, fecha_incidencia, estado_incidencia])
        res.send({ message: 'Incidencia guardada correctamente' })
    } catch (error) {
        return res.send({ message: error })
    }


}