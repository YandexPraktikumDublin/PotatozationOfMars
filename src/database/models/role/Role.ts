import { Model, Table, Column } from 'sequelize-typescript';

export enum roleEnum {
  regular = 'regular',
  admin = 'admin'
}

interface IRole {
  id: number;
  roles: roleEnum;
}

@Table
export class Role extends Model<IRole> {
  id!: number;
  @Column roles!: roleEnum;
}