import { ApiProperty } from "@nestjs/swagger"
import { IsEmail, IsNotEmpty } from "class-validator"

export class GoogleUserDto {
    @ApiProperty({
        description: "firstname of the user",
        example: "moumni",
        required: true,
        type: String,
    })
    @IsNotEmpty()
    firstname: string

    @ApiProperty({
        description: "lastname of the user",
        example: "moumni",
        required: true,
        type: String,
    })
    @IsNotEmpty()
    lastname: string

    @ApiProperty({
        description: "email of the user",
        example: "moumni",
        required: true,
        type: String,
    })
    @IsEmail()
    email: string
}