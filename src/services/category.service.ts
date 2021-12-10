import { createCategoryDto } from '@/dtos/categories.dto';
import { HttpException } from '@exceptions/HttpException';
import { Category } from '@/interfaces/category.interface';
import CategoryModel from '@/models/category.model';
import { isEmpty } from '@utils/util';

class CategoryService {
  public Category = CategoryModel;

  public async findAllCategory(): Promise<Category[]> {
    const category: Category[] = await this.Category.find();
    return category;
  }

  public async findCategoryById(CategoryId: string): Promise<Category> {
    if (isEmpty(CategoryId)) throw new HttpException(400, "You're not CategoryId");

    const category: Category = await this.Category.findOne({ _id: CategoryId });
    if (!category) throw new HttpException(409, "You're not category");

    return category;
  }

  public async createCategory(categoryData: createCategoryDto): Promise<Category> {
    if (isEmpty(categoryData)) throw new HttpException(400, "You're not categoryData");
    const createCategoryData: Category = await this.Category.create({ ...categoryData });
    return createCategoryData;
  }
}

export default CategoryService;
