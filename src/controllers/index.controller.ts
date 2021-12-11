import { NextFunction, Request, Response } from "express";
import { Slider } from "@/interfaces/slider.interface";
import SlidersService from "@/services/slider.service";
import { createSliderDto } from "@/dtos/slider.dto";

class IndexController {
  public slidersService = new SlidersService();

  public index = (req: Request, res: Response, next: NextFunction) => {
    try {
      res.sendStatus(200);
    } catch (error) {
      next(error);
    }
  };
  public getSlider = async (
    req: Request,
    res: Response,
    next: NextFunction
  ) => {
    try {
      const sliderData: Slider[] = await this.slidersService.findAllSlider();

      res.status(200).json({ data: sliderData, message: "findOne" });
    } catch (error) {
      next(error);
    }
  };

  public createSlider = async (
    req: Request,
    res: Response,
    next: NextFunction
  ) => {
    try {
      const sliderData: createSliderDto = req.body;
      const createSliderData: Slider = await this.slidersService.createSlider(
        sliderData
      );

      res.status(201).json({ data: createSliderData, message: "created" });
    } catch (error) {
      next(error);
    }
  };
  public createFavorite = async (
    req: Request,
    res: Response,
    next: NextFunction
  ) => {
    try {
      const ProductId: createSliderDto = req.body;
      const createFavoriteData: Slider =
        await this.slidersService.createFavorite(ProductId);

      res
        .status(200)
        .json({ data: createFavoriteData, message: "AddFavorite" });
    } catch (error) {
      next(error);
    }
  };
}

export default IndexController;
