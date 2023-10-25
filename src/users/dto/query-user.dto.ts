import { BadRequestException } from '@nestjs/common';
import { Transform, Type } from 'class-transformer';
import {
    IsBoolean,
    IsEnum,
    IsInt,
    IsOptional,
    IsString,
} from 'class-validator';

export class QueryUserDto {
    @IsBoolean()
    @IsOptional()
    @Transform(({ value }) => {
        if (value === 'true') return true;
        else if (value === 'false') return false;
        else throw new BadRequestException('Invalid isAdmin value');
    })
    isAdmin: boolean;

    @IsOptional()
    @Type(() => Number)
    @IsInt()
    age: number;

    @IsOptional()
    @IsString()
    sort: string;

    @IsOptional()
    @IsInt()
    @Type(() => Number)
    limit: number;

    @IsOptional()
    @IsEnum({ ASC: 'ASC', DESC: 'DESC' })
    order: string;
}
