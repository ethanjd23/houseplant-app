import { Query } from "./index"

const getAll = async () => Query(`SELECT * FROM plants`);

const getOne = async (id: number) => Query(`SELECT * FROM plants WHERE id = ?`, [id])

export default {
    getAll,
    getOne
}