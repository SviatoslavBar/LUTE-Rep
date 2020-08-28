import { PostInterface } from './postInterface';

export class newPost implements PostInterface {
constructor(
    public id:number,
    public title:string,
    public subtitle:string,
    public text:string,
    public author:string,
    public date:string,
    public main:boolean,
    public img?: string
){}
}