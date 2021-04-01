import { Query } from './index';
import { MysqlResponse, UsersTable } from './models/index';

const find = () => Query<UsersTable[]>("", []);

const insert = () => Query<MysqlResponse>("", []);

export default {
    find, 
    insert
}