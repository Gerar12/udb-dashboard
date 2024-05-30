export interface CategorieType {
  id: number;
  name: string;
  description: string;
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
