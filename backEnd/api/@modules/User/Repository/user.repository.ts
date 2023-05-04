import { IUser } from "../Entity/IUser";

export interface UserRepository {
  findAll(): Promise<IUser[]>;
  find(id: string): Promise<IUser>;
  update(
    id: string,
    name: string,
    surname: string,
    date: string,
    gender: string,
    biography: string
  ): Promise<{ message: string }>;
  create(
    id: string,
    name: string,
    surname: string,
    date: string,
    gender: string,
    biography: string
  ): Promise<{ message: string }>;
  delete(id: string): Promise<{ message: string }>;
  signWallet(walletAddr: string): Promise<{ token: string }>;
}
