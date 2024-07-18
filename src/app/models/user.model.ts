export interface IUserLoginDetails {
    userName: string;
    password: string;
}

export interface IUserLoginResponse {
    success: boolean;
    message: string;
    token: string;
    statusCode: number;
}

export interface IUserRegisterDetails {
    firstName: string;
    lastName: string;
    userName: string;
    password: string;
}

export interface IUserRegisterResponse {
    success: boolean;
    message: string;
    statusCode: number;
    userDetails: IUserDetails
}

export interface IUserDetails {
    firstName: string;
    lastName: string;
    userName: string;
}