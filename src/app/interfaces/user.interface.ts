export interface User {
    status: string;
    data:   Data;
}

export interface Data {
    user:  string;
    pass:  string;
    email: string;
}
