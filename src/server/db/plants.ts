import { Query } from "./index"

const getAll = async () => Query(`SELECT * FROM plantsinformation`);

const getOne = async (id: number) => Query(`SELECT * FROM plantsinformation WHERE id = ?`, [id])

export default {
    getAll,
    getOne
}