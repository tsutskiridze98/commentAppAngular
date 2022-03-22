import { default as data } from '/src/data.json';
import { Replies } from '../types/types.model';

export class RepliesService {
    getReplies(): Promise<Replies[]>{
        return new Promise((resolve) => {
            // return resolve(data.comments.map((el: any) => el.replies))
            return resolve(data.comments[1].replies);
        }) 
    }
}