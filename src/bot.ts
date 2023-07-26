import { Telegraf } from 'telegraf';

import { Command } from './commands/command.class';

import { StartCommand } from './commands/start.command';
import { PeopleCommand } from './commands/people.command';

export class Bot {
    bot: Telegraf;
    commands: Command[] = [];


    constructor(token: string) {
        this.bot = new Telegraf(token);
    }

    init() {
        this.bot.launch();

        this.commands = [new StartCommand(this.bot), new PeopleCommand(this.bot)];

        for (let command of this.commands) {
            command.handle();
        }
    }
}