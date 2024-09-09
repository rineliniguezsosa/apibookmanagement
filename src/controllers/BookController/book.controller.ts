import { Request,Response } from 'express'
import { AppDataSource } from '../../config/data.source'
import { BooksEntity } from '../../models'


export const saveBook = async (req:Request,resp:Response) =>{
    try {
        const bookRepository = AppDataSource.getRepository(BooksEntity);

        const data = await bookRepository.save(req.body)

        return resp.status(200).json({
            status:true,
            menssage:data
        })
    } catch (error) {
        console.log(error);
        
        return resp.status(400).json({
            status:false,
            message:'Porfavor vuelva a intentar, algo salio mal :('
        })   
    }
}

export const allBooks = async (req:Request,resp:Response) =>{
    try {
        const bookRepository = AppDataSource.getRepository(BooksEntity);

        const bookQuery = bookRepository.createQueryBuilder("Books")
        .innerJoinAndSelect('Books.author_id','Authors')
        .innerJoinAndSelect('Books.publisher_id','Publishers')
        .innerJoinAndSelect('Books.genre_id','Genres')

        const data = await bookQuery.getMany();

        return resp.status(200).json({
            status:true,
            menssage:data
        })

    } catch (error) {
        console.log(error);
        
        return resp.status(400).json({
            status:false,
            message:'Porfavor vuelva a intentar, algo salio mal :('
        }) 
    }
}