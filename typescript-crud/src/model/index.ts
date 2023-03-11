import { ReactNode } from "react";

export interface IUser {
    id: number | string;
    name: string;
    email: string;
}

export interface IUserObject {
    name: string;
    email: string;
}
export interface IChildren {
    children: ReactNode
}

export interface IUserContext {
    users: IUser[];
    setUsers: React.Dispatch<React.SetStateAction<IUser[]>>
}


