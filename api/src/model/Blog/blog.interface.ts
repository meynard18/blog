import { Types } from 'mongoose';

export interface Blog extends BlogContent {
   author: {
      firstName: string;
      lastName: string;
      email: string;
      phoneNumber?: string;
      authorId: string;
   };
}

export interface BlogContent {
   title: string;
   content: string;
   image: string;
}
