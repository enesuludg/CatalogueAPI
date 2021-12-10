import { NextFunction, Request, Response } from 'express';
import { createProductDto } from '@/dtos/product.dto';
import { Products } from '@/interfaces/products.interface';
import ProductsService from '@/services/product.service';

class UsersController {
  public productsService = new ProductsService();

  public getProductById = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const CategoryId: string = req.params.id;
      const categoryData: Products = await this.productsService.findProductsById(CategoryId);

      res.status(200).json({ data: categoryData, message: 'findOne' });
    } catch (error) {
      next(error);
    }
  };

  public createProduct = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const categoryData: createProductDto = req.body;
      const createCategoryData: Products = await this.productsService.createProducts(categoryData);

      res.status(201).json({ data: createCategoryData, message: 'created' });
    } catch (error) {
      next(error);
    }
  };
}

export default UsersController;
