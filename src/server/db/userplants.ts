import { Query } from './index';

const getUserPlants = async (userid: number) => Query(`SELECT * FROM userplants WHERE userid = ?`, [userid]);


const insert = (newPlants: { plant_name: string; userid: number }) =>
Query('INSERT INTO plants SET ?', newPlants);

const update = (editedPlants: { plant_name?: string}, id: number) =>
Query('UPDATE plants SET ? WHERE id = ?', [editedPlants, id]);

const destroy = (id: number) => Query('DELETE FROM plants where id = ?', [id]);
    

export default {
    getUserPlants,
    insert,
    update,
    destroy
}