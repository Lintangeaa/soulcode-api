import dotenv from 'dotenv';

dotenv.config();

export const PORT = process.env.PORT || 7001;
export const NODE_ENV = process.env.NODE_ENV || 'development';
