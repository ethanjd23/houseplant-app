import { Request } from 'express';

export interface ReqUser extends Request {
    user?: UsersTable | Payload;
}

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

export interface Payload {
    userid: number;
    email: string;
    role: string;
}