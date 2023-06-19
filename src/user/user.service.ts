import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { IUser } from './user.interface';
import { CreateUserDto } from './dto/user.dto';

@Injectable()
export class UserService {
    constructor(@InjectModel('users') private readonly userModel: Model<IUser>) { }

    async create(createUserDto: CreateUserDto): Promise<IUser> {
        const createdUser = new this.userModel(createUserDto);
        return createdUser.save();
    }

    async findAll(): Promise<IUser[]> {
        return this.userModel.find().exec();
    }
}
