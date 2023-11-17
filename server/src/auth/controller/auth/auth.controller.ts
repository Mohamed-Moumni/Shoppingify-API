import { Body, Controller, Get, HttpStatus, Post, Req, Res, UseGuards } from '@nestjs/common';
import { userDto } from '../../Dtos/user.dto';
import { AuthService } from '../../service/auth/auth.service';
import { userCreateDto } from '../../../users/Dtos/userCreate.dto';
import { LocalGuard } from '../../common/gurads/local.guard';
import { Request, Response } from 'express';
import { AuthGuard } from '../../common/gurads/Auth.guard';
import { configService } from '../../../config/config.service';
import { UsersService } from '../../../users/service/users/users.service';
import { ApiBody, ApiResponse, ApiTags } from '@nestjs/swagger';
import { GoogleOauthGuard } from '../../common/gurads/google.guard';

@ApiTags('Authentication')
@Controller('auth')
export class AuthController {
    constructor(
        private authService: AuthService,
        private userService: UsersService) {
    }
    
    @Post('/register')
    @ApiResponse({ status: HttpStatus.CREATED, description: 'The record has been successfully created.' })
    @ApiResponse({ status: HttpStatus.CONFLICT, description: 'The record already stored.' })
    @ApiResponse({ status: HttpStatus.BAD_REQUEST, description: 'Wrong Type of input fields' })
    @ApiBody({
        type: userCreateDto,
        description: 'Json structure for user'
    })
    async registerUser(@Body() userCreateDto: userCreateDto, @Res() res:Response) {
        const user = await this.userService.createUser(userCreateDto);
        this.authService.signToken({ sub: user['id'], email: user['email'] }, res);
        res.send({ status: HttpStatus.CREATED, message: 'User Created' });
    }
    
    @Post('/login')
    @ApiResponse({ status: HttpStatus.UNAUTHORIZED, description: 'Wrong Credential from the User' })
    @ApiResponse({ status: HttpStatus.CREATED, description: 'The User logged successfully' })
    @ApiResponse({ status: HttpStatus.BAD_REQUEST, description: 'Wrong Type of input fields' })
    @ApiBody({
        type: userDto,
        description: 'json object contains email and password for the user'
    })
    async login(@Body() userDto: userDto, @Res() res:Response) {
        const user = await this.authService.validateUser(userDto.email, userDto.password);
        this.authService.signToken({ sub: user['id'], email: user['email'] }, res);
        res.send({ status: HttpStatus.CREATED, message: 'User logged successfully' });
    }
    
    @Get('/logout')
    @UseGuards(AuthGuard)
    @ApiResponse({ status: HttpStatus.CREATED, description: 'The User logged out successfully' })
    logout(@Res() res: Response) {
        res.cookie('jwt', '');
        res.send({ status: HttpStatus.NO_CONTENT, message: "user logout successfully" });
    }

    @Get('google')
    @UseGuards(GoogleOauthGuard)
    async auth() {
    }

    @Get('/google/callback')
    @UseGuards(GoogleOauthGuard)
    async googleAuthCallback(@Req() req: Request, @Res() res: Response) {
        let user = await this.userService.findOneByEmail(req.user['email']);
        if (!user)
            user = await this.userService.createGoogleUser({
                email: req.user['email'],
                firstname: req.user['firstname'],
                lastname: req.user['lastname']
            });
        this.authService.signToken({ sub: user['id'], email: user['email'] }, res);
        res.send({ status: HttpStatus.CREATED, message: 'User logged successfully' });
    }

}
