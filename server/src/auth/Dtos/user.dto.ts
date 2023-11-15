import { IsEmail, IsNotEmpty } from "class-validator";

export class userDto{
    @IsEmail()
    email: string;

    @IsNotEmpty()
    password: string;
}