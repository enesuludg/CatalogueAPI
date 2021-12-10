import { IsString } from 'class-validator';

export class createCategoryDto {
  @IsString()
  public name: string;

  @IsString()
  public description: string;
}
