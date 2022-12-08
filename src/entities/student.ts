import { Person } from "./person";


export interface Student extends Person{
    inscription:number;
    level:string
}