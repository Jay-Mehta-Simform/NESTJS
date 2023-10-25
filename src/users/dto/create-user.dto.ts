import { IsBoolean, IsEmail, IsInt, IsString } from 'class-validator';

export class CreateUserDto {
    @IsEmail()
    email: string;
    @IsString()
    name: string;
    @IsInt()
    age: number;
    @IsString()
    addr: string;
    @IsBoolean()
    isAdmin: boolean;
}
