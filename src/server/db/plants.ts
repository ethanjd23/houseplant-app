import { resolveModuleName } from "typescript"
import { Query } from "./index"

//export const getAll = async () => {
  //  return new promise{(resolve, reject) => {
    //    Connection.query('select * from plants', (err, results) => {
      //      if (err) {
       //     return reject(err);
    //    }
    //    resolve(results);
     //   });
//}

//export const getOne = async () => {
  //  return new promise{(resolve, reject) => {
   //     Connection.query('select * from plants', (err, results) => {
    //        if (err) {
     //       return reject(err);
    //    }
    //    resolve(results);
  //      });
//    });
//}

const getAll = async () => Query(`SELECT * FROM plants`);

const getOne = async (id: number) => Query(`SELECT * FROM plants WHERE id = ?`, [id])

export default {
    getAll,
    getOne
};