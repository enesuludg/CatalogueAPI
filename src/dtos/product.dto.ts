import { IsString, IsInt, IsBoolean } from 'class-validator';

export class createProductDto {
  @IsInt()
  public id: number;
  @IsString()
  public name: string;
  @IsString()
  public description: string;
  @IsInt()
  public price: number;
  @IsBoolean()
  public isFavorite: boolean;
}
