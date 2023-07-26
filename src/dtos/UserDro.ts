import { IUser } from "../types";

export class UserDto {

    public login;
    public reputation;
    public gender;

    constructor(public model: IUser) {
        this.login = model.login;
        this.reputation = model.reputation;
        this.gender = model.gender;
    }

}