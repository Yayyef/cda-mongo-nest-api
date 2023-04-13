import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { Category, CategoryDocument } from './category.schema';

export class CategoryService {
    constructor(
        @InjectModel(Category.name)
        private categoryModel: Model<CategoryDocument>,
    ) {}

    async findAll(): Promise<Category[]> {
        return this.categoryModel.find().exec();
    }

    async create(category: Category): Promise<Category> {
        const createdCategory = new this.categoryModel({
            ...category,
            createdAt: new Date
        });
        return createdCategory.save();
    }

    async delete(id: string): Promise<Category> {
        return await this.categoryModel.findByIdAndDelete(id).exec();
    }

    async update(id: string, category: Category): Promise<Category> {
        return await this.categoryModel.findByIdAndUpdate(id, category).exec();
    }
}