import { createCategoryDto } from '@/dtos/categories.dto';
import { HttpException } from '@exceptions/HttpException';
import { Products } from '@/interfaces/products.interface';
import { Slider } from '@/interfaces/slider.interface';
import ProductsModel from '@/models/products.model';
import SliderModel from '@/models/slider.model';
import { isEmpty } from '@utils/util';

class SlidersService {
  public products = ProductsModel;
  public slider = SliderModel;

  public async findAllSlider(): Promise<Slider[]> {
    const slider: Slider[] = await this.slider.find();
    return slider;
  }

  public async createSlider(productsData: createCategoryDto): Promise<any> {
    if (isEmpty(productsData)) throw new HttpException(400, "You're not productsData");
    const createSliderData: Slider = await this.slider.create({ ...productsData });
    return createSliderData;
  }

  public async createFavorite(productsData: createCategoryDto): Promise<Products> {
    if (isEmpty(productsData)) throw new HttpException(400, "You're not productsData");
    const createCategoryData: Products = await this.products.create({ ...productsData });
    return createCategoryData;
  }
}

export default SlidersService;
