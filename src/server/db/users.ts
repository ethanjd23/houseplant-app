import { Query } from './index';
import { MysqlResponse, UsersTable } from './models/index';

const find = (column: string, value: string) => Query<UsersTable[]>("SELECT * FROM users WHERE ?? = ?", [column, value]);

const insert = () => Query<MysqlResponse>("", []);

export default {
    find, 
    insert
}