import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Product } from './products.schema';
import { CreateProductDto, UpdateProductDto } from './products.dto';

@Injectable()
export class ProductService {
  constructor(
    @InjectModel(Product.name) private productModel: Model<Product>,
  ) {}

  async createProduct(createProductDto: CreateProductDto): Promise<Product> {
    const createdProduct = new this.productModel(createProductDto);
    return createdProduct.save();
  }

  async getProducts(): Promise<Product[]> {
    return this.productModel.find().populate('category').exec();
  }

  async getProductById(productId: string): Promise<Product> {
    return this.productModel.findById(productId).populate('category').exec();
  }

  async updateProduct(
    productId: string,
    updateProductDto: UpdateProductDto,
  ): Promise<Product> {
    return await this.productModel.findByIdAndUpdate(
      productId,
      updateProductDto,
      { new: true },
    ).populate('category').exec();
  }

  async deleteProduct(productId: string): Promise<Product> {
    return this.productModel.findByIdAndRemove(productId).populate('category').exec();
  }
}
