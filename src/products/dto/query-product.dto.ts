import { BadRequestException } from '@nestjs/common';
import { Transform, Type } from 'class-transformer';
import {
    IsBoolean,
    IsEnum,
    IsInt,
    IsOptional,
    IsString,
} from 'class-validator';
import { CreateProductDto } from './create-product.dto';
import { PartialType } from '@nestjs/mapped-types';

export class QueryProductDto extends PartialType(CreateProductDto) {
    @IsOptional()
    @IsBoolean()
    @Transform(({ value }) => {
        if (value === 'true') return true;
        else if (value === 'false') return false;
        else throw new BadRequestException('Invalid available value');
    })
    available: boolean;

    @IsOptional()
    @IsString()
    sort: string;

    @IsOptional()
    @IsEnum({ ASC: 'ASC', DESC: 'DESC' })
    order: string;

    @IsOptional()
    @IsInt()
    @Type(() => Number)
    limit: number;
}
