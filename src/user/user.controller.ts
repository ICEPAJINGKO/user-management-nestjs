import { Body, Controller, Get, Patch, Post, Delete } from '@nestjs/common';
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

    @Patch()
    async updateUser(): Promise<any> {
        return await this.userService.updateAndFind('USER004', { email: 'qwer@rwrwq.com' });
    }

    @Delete()
    async deleteUser(): Promise<any> {
        return await this.userService.delete('USER004');
    }
}
