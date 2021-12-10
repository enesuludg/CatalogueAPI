import { createCategoryDto } from '@/dtos/categories.dto';
import { HttpException } from '@exceptions/HttpException';
import { Products } from '@/interfaces/products.interface';
import ProductsModel from '@/models/products.model';

import { isEmpty } from '@utils/util';

class ProductsService {
  public Products = ProductsModel;

  public async findProductsById(productsId: string): Promise<Products> {
    if (isEmpty(productsId)) throw new HttpException(400, "You're not CategoryId");

    const products: Products = await this.Products.findOne({ _id: productsId });
    if (!products) throw new HttpException(409, "You're not category");

    return products;
  }

  public async createProducts(productsData: createCategoryDto): Promise<Products> {
    if (isEmpty(productsData)) throw new HttpException(400, "You're not productsData");
    const createCategoryData: Products = await this.Products.create({ ...productsData });
    return createCategoryData;
  }
}

export default ProductsService;
