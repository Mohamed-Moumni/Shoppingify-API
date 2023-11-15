import { CanActivate, ExecutionContext, Injectable } from "@nestjs/common";
import { Request } from "express";
import { configService } from "../../../config/config.service";
import { JwtService } from "@nestjs/jwt";
import { UsersService } from "../../../users/service/users/users.service";
import { payload } from "../../service/auth/auth.service";

@Injectable()
export class AuthGuard implements CanActivate{
    constructor(
        private jwtService: JwtService,
        private userService:UsersService
    ) {
        
    }

    async canActivate(context: ExecutionContext) {
        const req: Request = context.switchToHttp().getRequest();
        const token: any = req.headers.cookie?.split('=')[1] as string;

        if (!token)
            return false;

        const secret:string = configService.getSecret();
        const payload:payload = this.jwtService.verify(token, { secret: secret });
        const { password, ...user } = await this.userService.findOneByEmail(payload.email);

        if (!user)
            return false;

        req.user = user;
        return true;
    }
}