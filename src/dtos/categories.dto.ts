import { IsString, IsInt } from "class-validator";

export class createCategoryDto {
  @IsInt()
  public id: number;

  @IsString()
  public name: string;

  @IsString()
  public description: string;
}
