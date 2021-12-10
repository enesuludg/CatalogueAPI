import { NextFunction, Request, Response } from 'express';
import { createCategoryDto } from '@/dtos/categories.dto';
import { Category } from '@/interfaces/category.interface';
import CategoryService from '@/services/category.service';

class CategoryController {
  public CategoryService = new CategoryService();

  public getCategory = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const findAllUsersData: Category[] = await this.CategoryService.findAllCategory();

      res.status(200).json({ data: findAllUsersData, message: 'findAll' });
    } catch (error) {
      next(error);
    }
  };

  public getCategoryById = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const CategoryId: string = req.params.id;
      const categoryData: Category = await this.CategoryService.findCategoryById(CategoryId);

      res.status(200).json({ data: categoryData, message: 'findOne' });
    } catch (error) {
      next(error);
    }
  };
  public getProducts = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const CategoryId: string = req.params.id;
      const categoryData: Category = await this.CategoryService.findCategoryById(CategoryId);

      res.status(200).json({ data: categoryData, message: 'findOne' });
    } catch (error) {
      next(error);
    }
  };

  public createCategory = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const categoryData: createCategoryDto = req.body;
      const createCategoryData: Category = await this.CategoryService.createCategory(categoryData);

      res.status(201).json({ data: createCategoryData, message: 'created' });
    } catch (error) {
      next(error);
    }
  };
}

export default CategoryController;
