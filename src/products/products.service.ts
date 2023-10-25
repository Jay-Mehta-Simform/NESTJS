import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Equal, LessThan, Repository } from 'typeorm';
import { CreateProductDto } from './dto/create-product.dto';
import { QueryProductDto } from './dto/query-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { Product } from './entities/product.entity';

@Injectable()
export class ProductsService {
    constructor(
        @InjectRepository(Product) private productRepo: Repository<Product>,
    ) {}

    create(product: CreateProductDto) {
        const prod = this.productRepo.create(product);
        return this.productRepo.save(prod);
    }

    async findAll(query: QueryProductDto) {
        const result = await this.productRepo.findAndCount({
            where: {
                ...(query.hasOwnProperty('price') && {
                    price: LessThan(query.price),
                }),
                ...(query.hasOwnProperty('inventory') && {
                    inventory: Equal(query.inventory),
                }),
                ...(query.hasOwnProperty('available') && {
                    available: query.available,
                }),
                ...(query.hasOwnProperty('name') && { name: query.name }),
            },
            order: {
                ...(query.hasOwnProperty('sort') && {
                    [query.sort]: query.order || 'asc',
                }),
            },
            take: query?.limit,
        });
        return result;
    }

    findOne(id: number) {
        return this.productRepo.findBy({ id });
    }

    update(id: number, updateProductDto: UpdateProductDto) {
        return this.productRepo.update(id, updateProductDto);
    }

    remove(id: number) {
        return this.productRepo.delete(id);
    }
}

// Led, Lead, Lead
