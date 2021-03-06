import { createProductDto } from "@/dtos/product.dto";

import { HttpException } from "@exceptions/HttpException";
import { Products } from "@/interfaces/products.interface";
import ProductsModel from "@/models/products.model";
import CategoryModel from "@/models/category.model";

import { isEmpty } from "@utils/util";
import { Category } from "@/interfaces/category.interface";

class ProductsService {
  public Category = CategoryModel;
  public Products = ProductsModel;


  public async findProductsById(productsId: string): Promise<Products> {
    if (isEmpty(productsId))
      throw new HttpException(400, "You're not CategoryId");

    const products: Products = await this.Products.findOne({ id: productsId });

    if (!products) throw new HttpException(409, "products not found");

    return products;
  }

  public async createProducts(
    productsData: createProductDto
  ): Promise<Products> {
    if (isEmpty(productsData))
      throw new HttpException(400, "You're not productsData");
    const products: Products[] = await this.Products.find();
    const category: Category = await this.Category.findOne({ id: productsData.category });
    if (!category)
    throw new HttpException(400, "Not found category");
    const length: number = products.length;
    productsData.id = length;
    const createProductsData: Products = await this.Products.create(
      productsData
    );
    return createProductsData;
  }
}

export default ProductsService;
