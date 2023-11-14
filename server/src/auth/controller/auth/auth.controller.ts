import { Body, Controller, Post, Req, Res, UseGuards } from '@nestjs/common';
import { userDto } from '../../Dtos/user.dto';
import { AuthService } from '../../service/auth/auth.service';
import { AuthGuard } from '@nestjs/passport';
import { userCreateDto } from '../../../users/Dtos/userCreate.dto';
import { LocalGuard } from '../../common/gurads/local.guard';
import { Request, Response } from 'express';


@Controller('auth')
export class AuthController {
    constructor(
        private authService:AuthService,) {
    }
    
    @Post('/register')
    async registerUser(@Body() userCreateDto: userCreateDto, @Res() res:Response) {
        const user = await this.authService.createUser(userCreateDto);
        this.authService.signToken({ sub: user['id'], email: user['email'] }, res);
    }

    @Post('/login')
    login(@Body() userDto: userDto, @Req() req: Request) {
        
    }

    @Post('/logout')
    logout() {
        
    }
}
