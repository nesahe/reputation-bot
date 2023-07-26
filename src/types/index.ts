import { Schema } from 'mongoose';


export interface IUser {
    login: string,
    password: string,
    gender: string,
    isActivated: boolean,
    activationLink: string
    _id: string
    reputation: number,
    lastVoting: string,
    likedUsers: string[],
    isLiked: boolean
}

export interface IToken {
    user: Schema.Types.ObjectId,
    refreshToken: string
}