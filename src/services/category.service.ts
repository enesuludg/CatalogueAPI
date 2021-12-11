import { createCategoryDto } from "@/dtos/categories.dto";
import { HttpException } from "@exceptions/HttpException";
import { Category } from "@/interfaces/category.interface";
import { Products } from "@/interfaces/products.interface";
import CategoryModel from "@/models/category.model";
import ProductsModel from "@/models/products.model";
import { isEmpty } from "@utils/util";

class CategoryService {
  public Category = CategoryModel;
  public Products = ProductsModel;

  public async findAllCategory(): Promise<Category[]> {
    const category: Category[] = await this.Category.find();
    return category;
  }

  public async findCategoryById(CategoryId: string): Promise<Category> {
    if (isEmpty(CategoryId))
      throw new HttpException(400, "You're not CategoryId");

    const category: Category = await this.Category.findOne({ id: CategoryId });
    if (!category) throw new HttpException(409, "You're not category");

    return category;
  }
  public async findProductByCId(CategoryId: string): Promise<any> {
    if (isEmpty(CategoryId))
      throw new HttpException(400, "You're not Products");
    const products: Products[] = await this.Products.find({
      category: CategoryId,
    });
    if (!products) throw new HttpException(409, "You're not Products");
    return products;
  }
  public async createCategory(
    categoryData: createCategoryDto
  ): Promise<Category> {
    if (isEmpty(categoryData))
      throw new HttpException(400, "You're not categoryData");
    const category: Category[] = await this.Category.find();
    const length: number = category.length;
    categoryData.id = length + 1;
    const createCategoryData: Category = await this.Category.create(
      categoryData
    );
    return createCategoryData;
  }
}

export default CategoryService;
