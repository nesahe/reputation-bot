import { Telegraf } from 'telegraf';
import { Command } from "./command.class";

import UserService from '../services/user.service';

export class PeopleCommand extends Command {

    constructor(bot: Telegraf) {
        super(bot);
    }

    handle(): void {
        this.bot.command('people_top', async (ctx) => {
            const users = await UserService.getUsers();

            ctx.reply(users);
        })
    }
}