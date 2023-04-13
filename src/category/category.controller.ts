import { Body, Controller, Delete, Get, Param, Post, Put } from "@nestjs/common";
import { Category } from "./category.schema";
import { CategoryService } from "./category.service";

@Controller('category')
export class CategoryController {
    constructor(private categoryService: CategoryService) {}
    
    @Get()
    public async findAll(): Promise<Category[]> {
        return await this.categoryService.findAll();
    }

    @Post()
    public async create(@Body() category: Category): Promise<Category> {
        return await this.categoryService.create(category);
    }

    @Delete(':id')
    async delete(@Param('id') id: string): Promise<Category> {
        return await this.categoryService.delete(id);
    }

    @Put(':id')
    async update(@Param('id') id: string, @Body() category: Category): Promise<Category> {
        return await this.categoryService.update(id, category);
    }
};