import { createSliderDto } from "@/dtos/slider.dto";
import { HttpException } from "@exceptions/HttpException";
import { Slider } from "@/interfaces/slider.interface";
import ProductsModel from "@/models/products.model";
import SliderModel from "@/models/slider.model";
import { isEmpty } from "@utils/util";
import { Product } from "@rhaimes/whatsapp-web.js";

class SlidersService {
  public products = ProductsModel;
  public slider = SliderModel;

  public async findAllSlider(): Promise<Slider[]> {
    const slider: Slider[] = await this.slider.find();
    return slider;
  }

  public async createSlider(sliderData: createSliderDto): Promise<Slider> {
    if (isEmpty(sliderData))
      throw new HttpException(400, "You're not productsData");
    const slider: Slider[] = await this.slider.find();
    const product: Product = await this.products.findOne({ id: sliderData.productId });
    if (!product)
    throw new HttpException(400, "Not found Product");
    const length: number = slider.length;
    sliderData.id = length ;
    const createSliderData: Slider = await this.slider.create(sliderData);
    return createSliderData;
  }

  public async createFavorite(productsData: any): Promise<any> {
    if (isEmpty(productsData))
      throw new HttpException(400, "You're not productsData");
    const createFavoriteData = await this.products
      .findOne({ id: productsData.productId })
      .then(async (products) => {
        if (!products) throw new HttpException(400, "Product not found");
        Object.assign(products, { isFavorite: true });
        await this.products.updateOne(
          { id: products.id },
          { isFavorite: true }
        );
      });
    return createFavoriteData;
  }
}

export default SlidersService;
