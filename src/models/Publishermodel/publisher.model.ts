import { Entity, PrimaryGeneratedColumn, Column } from "typeorm"


@Entity('Publishers')
export class PublisherEntity {
    @PrimaryGeneratedColumn()
    id!:number;
}