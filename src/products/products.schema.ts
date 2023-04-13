import { Prop, SchemaFactory, Schema } from "@nestjs/mongoose";

export type ProductsSchema = Products & Document;

@Schema()
export class Products {
    @Prop()
    name: string;
    
}

export const CategoryScema = SchemaFactory.createForClass(Products);
