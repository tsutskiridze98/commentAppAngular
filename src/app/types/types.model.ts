export interface CurrentUser {
    image: {
        png: string;
        webp: string;
    }
    username: string;
}
  
export interface Comments {
    id: number;
    content: string;
    createdAt: string;
    score: number;
    user: {
        image: {
            png: string;
            webp: string;
        }
        username: string;
    }
    replies?: Replies[];
}

export interface Replies {
    id: number;
    content: string;
    createdAt: string;
    score: number;
    replyingTo: string;
    user: {
        image: {
            png: string;
            webp: string;
        }
        username: string;
    }
}