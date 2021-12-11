import { IsString, IsInt } from "class-validator";

export class createSliderDto {
  @IsInt()
  public id: number;
  @IsString()
  public image: string;

  @IsInt()
  public productId: number;
}
