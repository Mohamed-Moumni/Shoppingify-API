import { ApiProperty } from "@nestjs/swagger"
import { IsNotEmpty } from "class-validator"

export class ItemUpdateDto {
    @ApiProperty({
        description: "Item name to update",
        example: "Orange",
        required: true,
        type: String,
    })
    @IsNotEmpty()
    name: string

    @ApiProperty({
        description: "Item note to update",
        example: "Orange is fruit that contains vitamine C",
        required: true,
        type: String,
    })
    @IsNotEmpty()
    note: string

    @ApiProperty({
        description: "Image of the item to update",
        example: "http://www.url.com/img1.png",
        required: true,
        type: String,
    })
    @IsNotEmpty()
    image: string

    @ApiProperty({
        description: "Category name of Item update",
        example: "Fruit",
        required: true,
        type: String,
    })
    @IsNotEmpty()
    category: string
}