import { IsEmail, IsNotEmpty, IsStrongPassword, MaxLength, MinLength, minLength } from "class-validator";

export class userCreateDto {
    @IsNotEmpty()
    @MinLength(5, {
        message:"firstname is too little"
    })
    @MaxLength(20, {
        message:"firstname is too long"
    })
    firstname: string;

    @IsNotEmpty()
    @MinLength(5, {
        message: "firstname is too little"
    })
    @MaxLength(20, {
        message: "firstname is too long"
    })
    lastname: string;

    @IsEmail()
    email: string;

    @IsStrongPassword()
    password: string;
}