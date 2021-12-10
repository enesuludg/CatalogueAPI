import { Router } from 'express';
import UsersController from '@/controllers/category.controller';
import { Routes } from '@interfaces/routes.interface';

class UsersRoute implements Routes {
  public path = '/products';
  public router = Router();
  public usersController = new UsersController();

  constructor() {
    this.initializeRoutes();
  }

  private initializeRoutes() {
    this.router.get(`${this.path}/:id`, this.usersController.getCategoryById);
    this.router.post(`${this.path}`, this.usersController.createCategory);
  }
}

export default UsersRoute;
