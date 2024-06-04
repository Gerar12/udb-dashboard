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

export type Products = Product[];

export interface Product {
  id: number;
  name: string;
  description: string;
  price: string;
  stock: number;
  category_name: string;
  supplier_name: string;
}
