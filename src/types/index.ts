export interface IJwtPayload {
  id: string;
  email: string;
  createdAt: string;
  updatedAt: string;
  iat: number;
  exp: number;
}
