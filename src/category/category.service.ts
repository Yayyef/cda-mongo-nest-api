import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { Category, CategoryDocument } from './category.schema';

export class CategoryService {
    constructor(
        @InjectModel(Category.name)
        private categoryModel: Model<CategoryDocument>,
    ) {}

    async getCategories(): Promise<Category[]> {
        return this.categoryModel.find().populate('products').exec();
    }

    async getCategoryById(categoryId: string): Promise<Category> {
        return this.categoryModel.findById(categoryId).populate('products').exec();
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