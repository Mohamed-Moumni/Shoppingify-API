import { Body, Controller, Delete, FileTypeValidator, FileValidator, Get, HttpStatus, MaxFileSizeValidator, Param, ParseFilePipe, Patch, Post, Req, Res, UploadedFile, UseGuards, UseInterceptors } from '@nestjs/common';
import { ItemsService } from '../services/items.service';
import { ItemUpdateDto } from '../Dtos/item.update.dto';
import { ItemCreateDto } from '../Dtos/item.create.dto';
import { ApiBody, ApiConsumes, ApiOkResponse, ApiResponse } from '@nestjs/swagger';
import { AuthGuard } from '../../auth/common/gurads/Auth.guard';
import { FileInterceptor } from '@nestjs/platform-express';
import { Request, Express, Response } from 'express';
import { storage } from '../utils/storage.config';
import { Item } from '@prisma/client';

@Controller('items')
export class ItemsController {
    constructor(private itemService: ItemsService) {
        
    }

    @Post('')
    @ApiResponse({
        status: HttpStatus.CREATED,
        description: "Item created"
    })
    @ApiBody({
        type: ItemCreateDto,
        description: 'Json structure for Item'
    })
    @UseGuards(AuthGuard)
    addItem(@Body() itemCreateDto: ItemCreateDto, @Req() req: Request) {
        const userId = req.user['id'] as string;
        return this.itemService.createItem(itemCreateDto, userId);
    }

    @Post('/upload')
    @UseGuards(AuthGuard)
    @ApiResponse({
        status: HttpStatus.OK,
        description: "image uploaded"
    })
    @ApiResponse({
        status: HttpStatus.BAD_REQUEST,
        description: "Unexpected field"
    })
    @ApiConsumes('multipart/form-data')
    @UseInterceptors(FileInterceptor('file', { storage: storage }))
    uploadImage(@Req() req: Request, @UploadedFile(new ParseFilePipe({
        validators: [new FileTypeValidator({ fileType: '.(png|jpeg|jpg)' }),
            new MaxFileSizeValidator({ maxSize: 1024 * 1024 * 3 })]
    })) image: Express.Multer.File) {
        return image.path;
    }
    
    @Delete('/:itemId')
    @ApiResponse({
        status: HttpStatus.OK,
        description: "Item deleted"
    })
    @UseGuards(AuthGuard)
    removeItem(@Param('itemId') itemId: string) {
        return this.itemService.deleteItemById(itemId);
    }
    
    @Patch('/:itemId')
    @ApiResponse({
        status: HttpStatus.OK,
        description: "Item updated"
    })
    @ApiBody({
        type: ItemUpdateDto,
        description: 'Json structure for upadted Item'
    })
    @UseGuards(AuthGuard)
    updateItem(@Param('itemId') itemId: string, @Body() itemUpdateDto: ItemUpdateDto) {
        return this.itemService.updateItemById(itemId, itemUpdateDto);
    }

    @Get('/')
    @ApiOkResponse({
        description: 'User Items',
        isArray: true
    })
    @UseGuards(AuthGuard)
    async getItems(@Req() req:Request, @Res() res: Response) {
        const userId: string = req.user['id'] as string;
        const Items: { categoryName: string, item: Item }[] = await this.itemService.getItemsByUserId(userId);
        res.json(Items).status(HttpStatus.OK);
    }
}
