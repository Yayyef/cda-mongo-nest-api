import {
    Controller,
    Get,
    Post,
    Put,
    Delete,
    Body,
    Param,
} from '@nestjs/common';
import { ProductService } from './products.service';
import { CreateProductDto, UpdateProductDto } from './products.dto';
import { Product } from './products.schema';

@Controller('products')
export class ProductController {
    constructor(private readonly productService: ProductService) { }

    @Post()
    async createProduct(@Body() createProductDto: CreateProductDto): Promise<Product> {
        return this.productService.createProduct(createProductDto);
    }

    @Get()
    async getProducts(): Promise<Product[]> {
        return this.productService.getProducts();
    }

    @Get(':id')
    async getProductById(@Param('id') productId: string): Promise<Product> {
        return this.productService.getProductById(productId);
    }

    @Put(':id')
    async updateProduct(
        @Param('id') productId: string,
        @Body() updateProductDto: UpdateProductDto,
    ): Promise<Product> {
        return this.productService.updateProduct(productId, updateProductDto);
    }

    @Delete(':id')
    async deleteProduct(@Param('id') productId: string): Promise<Product> {
        return this.productService.deleteProduct(productId);
    }
}
