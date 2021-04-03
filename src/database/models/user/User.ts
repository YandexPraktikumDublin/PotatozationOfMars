import { Model, Table, Column, HasOne } from 'sequelize-typescript';
import { Role, roleEnum } from '../role/Role'

interface IUser {
  id: number;
  login: string;
}

@Table
export class User extends Model<IUser> {
  id!: number;
  @Column login!: string;
  @HasOne(() => Role) role!: roleEnum;
}