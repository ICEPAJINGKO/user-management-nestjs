import { IsNotEmpty, IsOptional, IsString, IsDate } from "class-validator";

export class CreateUserDto {
    @IsNotEmpty()
    @IsString()
    readonly username: string;

    @IsOptional()
    @IsString()
    readonly email: string;

    @IsOptional()
    @IsString()
    readonly firstName: string;

    @IsOptional()
    @IsString()
    readonly lastName: string;

    @IsNotEmpty()
    @IsDate()
    readonly dateOfBirth: Date;
}