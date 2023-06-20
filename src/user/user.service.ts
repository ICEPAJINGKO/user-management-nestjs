import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateUserDto } from './dto/user.dto';
import { User, UserDocument } from './schemas/user.schema';

@Injectable()
export class UserService {
    constructor(@InjectModel(User.name) private readonly userModel: Model<User>) { }

    async create(createUserDto: CreateUserDto): Promise<UserDocument> {
        const createdUser = new this.userModel(createUserDto);
        return createdUser.save();
    }

    async findAll(): Promise<UserDocument[]> {
        return this.userModel.find().exec();
    }

    async update(username: string, update: object): Promise<any> {
        return this.userModel.updateOne({ username }, update).exec();
    }

    async updateAndFind(username: string, update: object): Promise<UserDocument> {
        return this.userModel.findOneAndUpdate({ username }, update, { new: true }).exec();
    }

    async delete(username: string): Promise<any> {
        return this.userModel.deleteOne({ username }).exec();
    }
}
