import { NextFunction, Request, Response } from 'express';
import { Slider } from '@/interfaces/slider.interface';
import SlidersService from '@/services/slider.service';
import { createSliderDto } from '@/dtos/slider.dto';

class IndexController {
  public slidersService = new SlidersService();

  public index = (req: Request, res: Response, next: NextFunction) => {
    try {
      res.sendStatus(200);
    } catch (error) {
      next(error);
    }
  };
  public getSlider = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const CategoryId: string = req.params.id;
      const categoryData: Slider = await this.slidersService.findCategoryById(CategoryId);

      res.status(200).json({ data: categoryData, message: 'findOne' });
    } catch (error) {
      next(error);
    }
  };

  public createSlider = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const categoryData: createSliderDto = req.body;
      const createCategoryData: Slider = await this.slidersService.createCategory(categoryData);

      res.status(201).json({ data: createCategoryData, message: 'created' });
    } catch (error) {
      next(error);
    }
  };
  public createFavorite = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const categoryData: createSliderDto = req.body;
      const createCategoryData: Slider = await this.slidersService.createCategory(categoryData);

      res.status(201).json({ data: createCategoryData, message: 'created' });
    } catch (error) {
      next(error);
    }
  };
}

export default IndexController;