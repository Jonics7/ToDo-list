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
        required: false,
        createIndexes: true,
    },
    todos: [{ type: Schema.Types.ObjectId, ref: 'Todo' }],
    // avatar: {
    //     type: File,
    //     required: false,
    // },
});

UserSchema.set('toJSON', {
    virtuals: true,
});

export const User = model('User', UserSchema);
