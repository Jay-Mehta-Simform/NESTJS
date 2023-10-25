import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { User } from './entities/user.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { LessThan, Repository } from 'typeorm';
import { QueryUserDto } from './dto/query-user.dto';

@Injectable()
export class UsersService {
    constructor(@InjectRepository(User) private userRepo: Repository<User>) {}
    async create(user: CreateUserDto) {
        const result = await this.userRepo.create(user);
        return this.userRepo.save(result);
    }

    async findAll(query: QueryUserDto) {
        //const sql = await this.userRepo.createQueryBuilder();

        //if (query.isAdmin)
        //    sql.where(`isAdmin= :isAdmin`, { isAdmin: query.isAdmin });
        //if (query.age) sql.andWhere(`age >= :age`, { age: query.age });
        //if (query.sort) sql.orderBy(query.sort);
        //if (query.limit) sql.limit(query.limit);

        //return sql.getManyAndCount();

        const result = await this.userRepo.findAndCount({
            where: {
                ...(query.hasOwnProperty('age') && {
                    age: LessThan(query.age),
                }),
                ...(query.hasOwnProperty('isAdmin') && {
                    isAdmin: query.isAdmin,
                }),
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
        return this.userRepo.findOne({ where: { id } });
    }

    update(id: number, user: UpdateUserDto) {
        return this.userRepo.update(id, user);
    }

    remove(id: number) {
        return this.userRepo.delete(id);
    }
}
