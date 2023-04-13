import { Module } from '@nestjs/common';
import { UserModule } from './user/user.module';
import { MongooseModule } from '@nestjs/mongoose';
import { CategoryModule } from './category/category.module';
import { ProductsService } from './products/products.service';
import { ProductsController } from './products/products.controller';
import { ProductsModule } from './products/products.module';
import { ConfigModule } from '@nestjs/config';
import appConfig from '../config'

@Module({
  imports: [
    ConfigModule.forRoot(),
    MongooseModule.forRoot(appConfig.MONGO_URI), 
    UserModule, CategoryModule, ProductsModule],
  controllers: [ProductsController],
  providers: [ProductsService],
})
export class AppModule {}
