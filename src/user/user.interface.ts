import { Document } from 'mongoose';

export interface IUser extends Document {
  readonly username: string;
  readonly email: string;
  readonly firstName: string;
  readonly lastName: string;
  readonly dateOfBirth: Date;
}