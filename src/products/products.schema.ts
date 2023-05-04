import { Prop, SchemaFactory, Schema } from "@nestjs/mongoose";
import { Category, CategorySchema } from "src/category/category.schema";
import { Document, Types } from "mongoose";

@Schema()
export class Product extends Document {
  @Prop({ required: true })
  name: string;

  @Prop({ required: true })
  price: number;

  @Prop({ default: 0 })
  quantity: number;

  @Prop({ type: Types.ObjectId, ref: 'Category' })
  category: Category;
}

export const ProductSchema = SchemaFactory.createForClass(Product);
