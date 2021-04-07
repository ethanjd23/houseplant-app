import { Query } from "./index";
import { MysqlResponse, UsersTable } from "./models/index";

const find = (column: string, value: string) =>
  Query<UsersTable[]>("SELECT * FROM users WHERE ?? = ?", [column, value]);

const insert = (newUser: {email: string, password: string, username: string}) =>
  Query<MysqlResponse>(
    "INSERT INTO users SET ?",
    newUser
  );

export default {
  find,
  insert,
};
