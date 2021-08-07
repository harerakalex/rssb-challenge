export interface IFile {
  fieldname?: string;
  originalname?: string;
  encoding?: string;
  mimetype?: string;
  path: string;
  size?: number;
  filename?: string;
}

export interface IUser {
  id?: number;
  createdAt?: Date;
  updatedAt?: Date;
  names: string;
  nid: string;
  phone: string;
  gender: string;
  email: string;
}
