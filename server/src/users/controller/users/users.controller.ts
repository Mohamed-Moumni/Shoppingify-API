import { Body, Controller, Get, Post, UseFilters, UseGuards } from '@nestjs/common';
import { userCreateDto } from '../../Dtos/userCreate.dto';
import { UsersService } from '../../service/users/users.service';
import { AuthGuard } from '../../../auth/common/gurads/Auth.guard';
import { JwtService } from '@nestjs/jwt';

@Controller('users')
export class UsersController {
    constructor(
        private userService: UsersService,
    ) {
        
    }

    @Get()
    @UseGuards(AuthGuard)
    getUsers() {
        return this.userService.getUsers();
    }

    @Get('/home')
    @UseGuards(AuthGuard)
    home() {
        console.log("Hello World");
    }
}
