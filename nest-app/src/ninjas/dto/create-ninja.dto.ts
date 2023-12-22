import { IsEnum, MinLength } from 'class-validator';

export class CreateNinjaDto {
  @MinLength(3)
  name: string;
  @IsEnum(['star', 'nunchucks'], { message: 'Wrong weapon!' })
  weapon: string;
}
