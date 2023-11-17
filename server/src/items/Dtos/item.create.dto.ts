import { ApiProperty } from "@nestjs/swagger"
import { IsNotEmpty } from "class-validator"

export class ItemCreateDto{
    @ApiProperty({
        description: "Item name",
        example: "Orange",
        required: true,
        type: String,
    })
    @IsNotEmpty()
    name: string
    
    @ApiProperty({
        description: "Item note",
        example: "Orange is fruit that contains vitamine C",
        required: true,
        type: String,
    })
    @IsNotEmpty()
    note: string
    
    @ApiProperty({
        description: "Image of the item",
        example: "http://www.url.com/img1.png",
        required: true,
        type: String,
    })
    @IsNotEmpty()
    image: string
    
    @ApiProperty({
        description: "Category name of Item",
        example: "Fruit",
        required: true,
        type: String,
    })
    @IsNotEmpty()
    category: string
}