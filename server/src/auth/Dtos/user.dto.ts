import { ApiProperty } from "@nestjs/swagger";
import { IsEmail, IsNotEmpty } from "class-validator";

export class userDto{
    @ApiProperty({
        description: "email of the user to authenticate",
        example: "user@gmail.com",
        required: true,
        type: String,
    })
    @IsEmail()
    email: string;
    
    @ApiProperty({
        description: "password of the user to authenticate",
        example: "user@gmail.com",
        required: true,
        type: String,
    })
    @IsNotEmpty()
    password: string;
}