import { Module } from '@nestjs/common';
import { UserModule } from './user/user.module';
import { MongooseModule } from '@nestjs/mongoose';
import { CategoryModule } from './category/category.module';

@Module({
  imports: [MongooseModule.forRoot('mongodb+srv://chassangxavier:root@naturebeaute.c0ladah.mongodb.net/nature_beaute?retryWrites=true&w=majority'), UserModule, CategoryModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
