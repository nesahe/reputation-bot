import UserModel from "../models/UserModel";

import { UserDto } from "../dtos/UserDro";
import { IUser } from "../types";

class UserService {
    async getUsers() {
        const users = await UserModel.find();

        if (!users) {
            return 'Users not found';
        }

        return this.toFullFormat(users);
    }


    toFullFormat(users: IUser[]): string {

        const formattedLoginUser = this.toFormatLogin(users);
        return this.toStringUsersArr(formattedLoginUser);
    }

    toFormatLogin(users: IUser[]) {

        const formattedLoginUsersArr = users.map(item => {
            const formattedUser = new UserDto(item);

            const formattedUserLogin = formattedUser.login.split('@')[0]

            return { ...formattedUser, login: formattedUserLogin };
        })

        return formattedLoginUsersArr
    }

    toStringUsersArr(users: UserDto[]) {
        let formattedUsers = '';

        users.map(item =>
            formattedUsers += `login: ${item.login}\ngender: ${item.gender}\nreputation: ${item.reputation}\n\n`
        )

        return formattedUsers
    }

}

export default new UserService();