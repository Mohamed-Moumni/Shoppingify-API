import { Body, Controller, Post } from '@nestjs/common';
import { userCreateDto } from '../../Dtos/userCreate.dto';
import { UsersService } from '../../service/users/users.service';

@Controller('users')
export class UsersController {
    constructor(private userService: UsersService) {
        
    }

    @Post('/register')
    registerUser(@Body() userCreateDto: userCreateDto) {
        this.userService.createUser(userCreateDto);
    }

    
}
