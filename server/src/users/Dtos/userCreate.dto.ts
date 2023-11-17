import { ApiProperty } from "@nestjs/swagger";
import { IsEmail, IsNotEmpty, IsStrongPassword, MaxLength, MinLength, minLength } from "class-validator";

export class userCreateDto {
    @IsNotEmpty()
    @MinLength(5, {
        message:"firstname is too little"
    })
    @MaxLength(20, {
        message:"firstname is too long"
    })
    @ApiProperty({
        description: "firstname of the user",
        example: "mohamed",
        required: true,
        type: String,
    })
    firstname: string;

    @IsNotEmpty()
    @MinLength(5, {
        message: "firstname is too little"
    })
    @MaxLength(20, {
        message: "firstname is too long"
    })
    @ApiProperty({
        description: "lastname of the user",
        example: "moumni",
        required: true,
        type: String,
    })
    lastname: string;

    @IsEmail()
    @ApiProperty({
        description: "Email of the user",
        example: "user@gmail.com",
        required:true,
        type: String,
    })
    email: string;

    @ApiProperty({
        description: "password of the user",
        example: "User@1234",
        required: true,
        type: String,
    })
    @IsStrongPassword()
    password: string;
}