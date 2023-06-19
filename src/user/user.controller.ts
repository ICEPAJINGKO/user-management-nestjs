import { Body, Controller, Get, Post } from '@nestjs/common';
import { CreateUserDto } from './dto/user.dto';
import { UserService } from './user.service';

@Controller('user')
export class UserController {
    constructor(private userService: UserService){}

    @Post()
    async createUser(@Body() body: CreateUserDto): Promise<any>{
        return await this.userService.create(body);
    }

    @Get()
    async getUser(): Promise<any>{
        return await this.userService.findAll();
    }
}
