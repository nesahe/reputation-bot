import { config } from 'dotenv';

import mongoose from 'mongoose';

import { Bot } from './bot';

config({ path: './config/.env' });

const { DB_LOGIN, DB_PASSWORD, DB_NAME, BOT_TOKEN } = process.env;

const start = async () => {
    try {

        console.log('bot starting')

        await mongoose.connect(`mongodb+srv://${DB_LOGIN}:${DB_PASSWORD}@cluster0.fwflrmv.mongodb.net/${DB_NAME}?retryWrites=true&w=majority`)

        const bot = new Bot(BOT_TOKEN || '');

        bot.init();

    } catch (e) {
        console.log(e);
    }
}

start();