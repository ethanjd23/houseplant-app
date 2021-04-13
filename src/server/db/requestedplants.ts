import { Query } from './index';


const insert = async (request: string) => Query(`INSERT INTO requestedPlants (plant_requested) VALUES (?)`, [request]);

export default {
    insert
}