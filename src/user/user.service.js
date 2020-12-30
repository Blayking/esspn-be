import { Types } from 'mongoose';
import { UserModel } from './user.model';
import { InvalidUser } from './errors';

async function getUserById(userId) {
    if(!Types.ObjectId.isValid(userId)) {
        throw new Error('User not found!');
    }

    const user = await UserModel.find({ _id: userObjectId });

    if (!user) {
        throw new Error('User not found!');
    }
}

async function getUsers() {
    return UserModel.find();
}

async function createUser(user) {
    if (!user.email) {
        throw new InvalidUser('Requires email field to create user');
    }

    return UserModel.create(user);
}

export { getUsers, createUser, getUserById };