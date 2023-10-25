import { Type } from 'class-transformer';
import { IsInt, IsNumber, IsString } from 'class-validator';

export class CreateProductDto {
    @IsString()
    name: string;

    @IsNumber()
    @Type(() => Number)
    price: number;

    @IsInt()
    @Type(() => Number)
    inventory: number;
}
