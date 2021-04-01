import * as mysql from 'mysql';

import config from '../config';
import plantsDB from './plants'
import userplantsDB from './userplants';

export const pool = mysql.createPool(config.mysql)

export const Query = (query: string, values?: Array<string | number>) => {
    return new Promise <Array<any>>((resolve, reject) => {
        pool.query(query, values, (err, result) => {
            if(err) throw err;
            return resolve(result);
        })
    })
};

export default {
    plantsDB,
    userplantsDB
}