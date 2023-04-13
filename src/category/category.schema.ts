import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Document } from "mongoose";

export type CategoryDocument = Category & Document;

@Schema()
export class Category {
    @Prop()
    name: string;
    @Prop()
    bonus: string;
    @Prop()
    createdAt: Date;
}

export const CategorySchema = SchemaFactory.createForClass(Category);