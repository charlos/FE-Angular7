export interface User {
    id?: number;
    username: string;
    pass: string;
    tenant?: string;
    token?: string;
    fechaCreacion?: string;
}
