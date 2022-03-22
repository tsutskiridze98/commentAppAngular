import { default as data } from '/src/data.json';
import { Comments } from '../types/types.model';

export class CommentsService {
    getComments(): Promise<Comments[]>{
        return new Promise((resolve) => {
            return resolve(data.comments);
        }) 
    }
}