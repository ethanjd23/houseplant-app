import { Query } from './index';

const getUserPlants = async (userid: number) => Query(`SELECT * FROM userplants WHERE userid = ?`, [userid]);

export default {
    getUserPlants
}