import { Body, Controller, Get, Post, Req, Res, UseGuards } from '@nestjs/common';
import { userDto } from '../../Dtos/user.dto';
import { AuthService } from '../../service/auth/auth.service';
import { userCreateDto } from '../../../users/Dtos/userCreate.dto';
import { LocalGuard } from '../../common/gurads/local.guard';
import { Request, Response } from 'express';
import { AuthGuard } from '../../common/gurads/Auth.guard';
import { configService } from '../../../config/config.service';


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
    async login(@Body() userDto: userDto, @Res() res:Response) {
        const user = await this.authService.validateUser(userDto.email, userDto.password);
        this.authService.signToken({ sub: user['id'], email: user['email'] }, res);
    }

    @Get('/logout')
    @UseGuards(AuthGuard)
    logout(@Res() res: Response) {
        res.cookie('jwt', '');
        res.redirect(`${configService.getValue('HOST')}:${configService.getValue('PORT')}/api/users/home`);
    }
}
