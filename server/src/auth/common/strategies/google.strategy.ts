import { PassportStrategy } from "@nestjs/passport";
import { Strategy, VerifyCallback } from "passport-google-oauth2";
import { configService } from "../../../config/config.service";
import { Injectable } from "@nestjs/common";

@Injectable()
export class GoogleStrategy extends PassportStrategy(Strategy, 'google') {
    constructor() {
        super({
            clientID: configService.getValue('CLIENT_ID'),
            clientSecret: configService.getValue('CLIENT_SECRET'),
            callbackURL: configService.getValue('CALLBACK_URL'),
            scope: ['profile', 'email'],
        });
    }

    async validate(
        _accessToken: string,
        _refreshToken: string,
        profile: any,
        done: VerifyCallback,
    ): Promise<any> {
        const { name, emails} = profile;
        const user:any = {
            firstname: `${name.givenName}`,
            lastname: `${name.familyName}`,
            email: emails[0].value,
        };
        done(null, user);
    }
}