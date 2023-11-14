import { Injectable, UnauthorizedException } from "@nestjs/common";
import { PassportStrategy } from "@nestjs/passport";
import { Strategy } from "passport-local";
import { AuthService } from "../../service/auth/auth.service";
import { UsersService } from "../../../users/service/users/users.service";
import { JwtService } from "@nestjs/jwt";

@Injectable()
export class LocalStrategy extends PassportStrategy(Strategy) {
    constructor(
        private authService: AuthService,
        private userService: UsersService,
        private jwtService: JwtService
    ) {
        super({
            usernameField: 'email',
            passwordField: 'password',
        })
    }

    async validate(email: string, password: string): Promise<any>{
        const user = await this.authService.validateUser(email, password);
        if (!user)
            throw new UnauthorizedException();
        const payload = { sub: user.id, firstname: user.firstname, lastname: user.lastname, email: user.email };
        return {
            access_token: await this.jwtService.signAsync(payload),
        }
    }
}