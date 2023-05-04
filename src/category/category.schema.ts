import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Document, Types } from "mongoose";
import { Product } from "src/products/products.schema";

export type CategoryDocument = Category & Document;

@Schema()
export class Category {
    @Prop()
    name: string;
    @Prop()
    bonus: string;
    @Prop()
    createdAt: Date;
    @Prop({ type: [{ type: Types.ObjectId, ref: 'Product'}] })
    products: Product;
}

export const CategorySchema = SchemaFactory.createForClass(Category);