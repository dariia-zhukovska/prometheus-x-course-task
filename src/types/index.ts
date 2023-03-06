export interface IBookListData {
  id: number;
  author: string;
  price: number;
  image: string;
  title: string;
  shortDescription?: string;
  description?: string;
}


export interface ICartBookData {
  id: number;
  image: string;
  title: string;
  author: string;
  price: number;
  count: number;
  totalPrice: number;
};

export interface ICartContext {
  cartItems: ICartBookData[];
  setCartItems: (items: ICartBookData[]) => void;
  username: string | null;
  setUsername: (name: string | null) => void;
}








