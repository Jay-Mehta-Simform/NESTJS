import {
    BaseEntity,
    Column,
    DeleteDateColumn,
    Entity,
    PrimaryGeneratedColumn,
    VirtualColumn,
} from 'typeorm';

@Entity()
export class Product extends BaseEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @Column()
    price: number;

    @Column()
    inventory: number;

    @VirtualColumn({
        query: (alias) =>
            `SELECT CASE WHEN ${alias}.inventory = 0 THEN false ELSE true END`,
    })
    available: boolean;

    @DeleteDateColumn()
    deletedAt: Date;
}
