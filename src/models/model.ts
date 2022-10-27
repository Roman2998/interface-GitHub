export interface IUser {
    login: string;
    avatar_url: string;
}

export interface ServerResponse {
    items: IUser[];
}

export interface IRepo {
    id: number;
    name: string;
    description?: any;
    stargazers_count: number;
    language: string;
}

export interface Author {
    name: string;
    date: Date;
}
export interface Commit {
    author: Author;
}
export interface ICommit {
    sha: string;
    node_id: string;
    commit: Commit;
}

