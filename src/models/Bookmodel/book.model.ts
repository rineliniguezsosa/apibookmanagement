import { Entity, PrimaryGeneratedColumn, Column,ManyToOne,OneToMany,JoinColumn } from "typeorm"
import { AuthorsEntity } from "../Authormodel/author.model";
import { PublisherEntity } from "../Publishermodel/publisher.model";
import { GenresEntity } from "../Genresmodel/genres.model";
import { ReviewsEntity } from "../Reviesmodel/review.model";

@Entity('Books')
export class BooksEntity {
    @PrimaryGeneratedColumn()
    id!:number;

    @Column({type:'varchar',length:150,nullable:false})
    title!:string

    @Column({type:'varchar',unique:true,length:20,nullable:false})
    isbn!:string

    @Column({type:'date',nullable:true})
    publication_date!:Date

    @Column({type:'int',nullable:true})
    number_of_pages!:number

    @Column({type:'timestamp'})
    created_at!:Date

    @ManyToOne(()=> AuthorsEntity, (author) => author.books, {nullable:false})
    @JoinColumn()
    author_id!:AuthorsEntity;

    @ManyToOne(()=> PublisherEntity, (publisher) => publisher.books, {nullable:false})
    @JoinColumn()
    publisher_id!:AuthorsEntity;

    @ManyToOne(()=> GenresEntity, (genres) => genres.books, {nullable:false})
    @JoinColumn()
    genre_id!:GenresEntity;

    @OneToMany(() => ReviewsEntity, (review) => review.book_id)
    reviews!: ReviewsEntity[];
}