import { Module } from '@nestjs/common';
import { UserModule } from './user/user.module';
import { MongooseModule } from '@nestjs/mongoose';
import { CategoryModule } from './category/category.module';
import { ProductsModule } from './products/products.module';
import { ConfigModule } from '@nestjs/config';
import appConfig from '../config'

@Module({
  imports: [
    ConfigModule.forRoot(),
    MongooseModule.forRoot(appConfig.MONGO_URI), 
    UserModule, CategoryModule, ProductsModule],
    controllers: [],
    providers: [],
})
export class AppModule {}
