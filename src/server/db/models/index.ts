export interface UsersTable {
    id?: number;
    username?: string;
    email?: string;
    password?: string;
    role?: string;
    _created?: Date;
}

export interface MysqlResponse {
    affectedRows: number;
    insertId: number;

}