import { Telegraf, Markup } from 'telegraf';

import { Command } from "./command.class";

const command = Markup.keyboard([
    '/people_top'
]).resize()

export class StartCommand extends Command {

    constructor(bot: Telegraf) {
        super(bot);
    }

    handle(): void {
        this.bot.start((ctx) => {
            ctx.reply('Choose the commands from below', command)
        });
    }
}