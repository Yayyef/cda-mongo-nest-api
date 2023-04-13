import { Body, Controller, Delete, Get, Param, ParseIntPipe, Post, Put, UseFilters } from '@nestjs/common';
import { ApiCreatedResponse, ApiNotFoundResponse, ApiOkResponse, ApiTags, ApiUnprocessableEntityResponse } from '@nestjs/swagger';
import { HttpExceptionFilter } from 'src/filters/exception.filter';
import { UserModel } from './types/user.interface';
import { UserService } from './user.service';

@Controller('user')
@ApiTags('user')
@UseFilters(new HttpExceptionFilter())
export class UserController {
    constructor(private readonly userService: UserService) {};

    @Get()
    @ApiOkResponse({ description: 'Users retrieved successfully' })
    public findAll(): Array<UserModel> {
        return this.userService.findAll();
    }

    @Get(':id')
    @ApiOkResponse({ description: 'Users retrieved successfully' })
    @ApiNotFoundResponse({description: 'User not found'})
    public findUserById(@Param('id', ParseIntPipe) id: number): UserModel {
        return this.userService.findUserById(id);
    }

    @Post()
    @ApiCreatedResponse({ description: 'User created successfully.' })
    @ApiUnprocessableEntityResponse({ description: 'User title already exists.' })
    public createUser(@Body() user: UserModel): UserModel {
        return this.userService.create(user);
    }

    @Delete(':id')
    public deleteUser(@Param('id', ParseIntPipe) id: number): void {
        this.userService.delete(id);
    }

    @Put(':id')
    public updateUser(@Param('id', ParseIntPipe) id: number, @Body() user: UserModel) {
        return this.userService.update(id, user);
    }
}
