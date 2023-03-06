export interface IBookListData {
  id: number;
  author: string;
  price: number;
  image: string;
  title: string;
  shortDescription: string;
  description: string;
}


export interface ICartBookData {
  id: number;
  image: string;
  title: string;
  author: string;
  price: number;
  count: number;
};

export interface IAuthContext {
  username: string | null;
  logIn: (username: string) => void;
  logOut: () => void;
}








