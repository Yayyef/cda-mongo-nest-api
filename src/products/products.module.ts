import { Module } from '@nestjs/common';
import { Product, ProductSchema } from './products.schema';
import { ProductService } from './products.service';
import { ProductController } from './products.controller';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
    imports: [MongooseModule.forFeature([{name: Product.name, schema: ProductSchema}])],
    providers: [ProductService],
    controllers: [ProductController],
    exports: [ProductService],
})
export class ProductsModule {}
