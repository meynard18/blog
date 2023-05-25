import { Author } from './author.model';

export interface Blog {
   author: Author;
   title: string;
   content: string;
   image: string;
   _id: string;
   __v: number;
}
