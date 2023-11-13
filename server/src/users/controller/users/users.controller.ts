import { Body, Controller, Get, Post, UseFilters } from '@nestjs/common';
import { userCreateDto } from '../../Dtos/userCreate.dto';
import { UsersService } from '../../service/users/users.service';
import { error } from 'console';

@Controller('users')
export class UsersController {
    constructor(private userService: UsersService) {
        
    }

    @Post('/register')
    registerUser(@Body() userCreateDto: userCreateDto) {
        return this.userService.createUser(userCreateDto);
    }

    @Get()
    getUsers() {
        return this.userService.getUsers();
    }

}
