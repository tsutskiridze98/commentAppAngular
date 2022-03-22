import { default as data } from '/src/data.json';
import { CurrentUser } from '../types/types.model';


export class CurrentUserService {
    getCurrentUser(): Promise<CurrentUser> {
        return new Promise((resolve) => {
            return resolve(data.currentUser);
        })
    }
}