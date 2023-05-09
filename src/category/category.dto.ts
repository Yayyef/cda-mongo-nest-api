import { IsNotEmpty, IsString, IsDateString } from 'class-validator';

export class CreateCategoryDto {
  @IsNotEmpty()
  @IsString()
  name: string;

  @IsNotEmpty()
  @IsString()
  bonus: string;

  @IsNotEmpty()
  @IsDateString()
  createdAt: Date;

  products: string[];
}

export class UpdateCategoryDto {
  @IsNotEmpty()
  @IsString()
  name: string;

  @IsNotEmpty()
  @IsString()
  bonus: string;

  @IsNotEmpty()
  @IsDateString()
  createdAt: Date;

  products: string[];
}
