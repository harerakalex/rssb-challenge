import {
  Table,
  Column,
  PrimaryKey,
  AutoIncrement,
  CreatedAt,
  UpdatedAt,
  Model,
} from 'sequelize-typescript';

import { IUser } from '../../types';

@Table
export class User extends Model implements IUser {
  @PrimaryKey
  @AutoIncrement
  @Column
  id: number;

  @Column
  names: string;

  @Column
  nid: string;

  @Column
  phone: string;

  @Column
  gender: string;

  @Column
  email: string;

  @CreatedAt
  @Column
  createdAt!: Date;

  @UpdatedAt
  @Column
  updatedAt!: Date;
}
