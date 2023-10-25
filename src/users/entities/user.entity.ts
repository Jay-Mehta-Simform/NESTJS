import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class User {
    @PrimaryGeneratedColumn()
    id: number;

    @Column('text', { unique: true, nullable: false })
    email: string;

    @Column({ length: 100 })
    name: string;

    @Column('text')
    addr: string;

    @Column('int')
    age: number;

    @Column()
    isAdmin: boolean;
}
