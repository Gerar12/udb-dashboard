export interface CategorieType {
  id: number;
  name: string;
  description: string;
}

export interface UserByID {
  user: UserType | null;
  token: string | null;
}

export interface UserType {
  id: number;
  name: string;
  email: string;
  email_verified_at: any;
  created_at: any;
  updated_at: any;
}

export interface loginType {
  email: string;
  password: string;
}

export interface registerType {
  name: string;
  email: string;
  password: string;
}

export interface updateUserProps {
  name: string;
  email: string;
  password?: string;
}
export type Users = user[];

export interface user {
  id: number;
  name: string;
  email: string;
  email_verified_at: any;
  created_at: any;
  updated_at: any;
}

export interface Product {
  id: number;
  name: string;
  description: string;
  price: string;
  stock: number;
  category_name: string;
  supplier_name: string;
}

export interface SalesTypes {
  id: number;
  client_id: number;
  product_id: number;
  quantity: number;
  total_price: string;
  date: string;
  client: Client;
  product: Product;
}

export interface Client {
  id: number;
  username: string;
  email: string;
  name: string;
  phone: string;
}

export interface ProductType {
  name: string;
  description: string;
  price: number;
  stock: number;
  category_id: number;
  supplier_id: number;
}

export interface SuppliersType {
  id: number;
  name: string;
  phone: string;
  email: string;
}
