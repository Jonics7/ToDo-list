import { Schema, model } from 'mongoose';

const UserSchema = new Schema({
    username: {
        type: String,
        required: true,
        createIndexes: true,
    },
    password: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        createIndexes: true,
    },
    // avatar: {
    //     type: File,
    //     required: false,
    // },
});

export const User = model('User', UserSchema);
