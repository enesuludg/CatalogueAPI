import { NextFunction, Request, Response } from "express";
import { createProductDto } from "@/dtos/product.dto";
import { Products } from "@/interfaces/products.interface";
import ProductsService from "@/services/product.service";

class ProductController {
  public productsService = new ProductsService();

  public getProductById = async (
    req: Request,
    res: Response,
    next: NextFunction
  ) => {
    try {
      const ProductId: string = req.params.id;
      const ProductData: Products =
        await this.productsService.findProductsById(ProductId);

      res.status(200).json({ data: ProductData, message: "findOne" });
    } catch (error) {
      next(error);
    }
  };

  public createProduct = async (
    req: Request,
    res: Response,
    next: NextFunction
  ) => {
    try {
      const ProductData: createProductDto = req.body;
      const createProductData: Products =
        await this.productsService.createProducts(ProductData);
      res.status(201).json({ data: createProductData, message: "created" });
    } catch (error) {
      next(error);
    }
  };
}

export default ProductController;
