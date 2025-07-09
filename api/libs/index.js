import dotenv from 'dotenv';

dotenv.config();

const PORT = process.env.PORT || 7001;
const NODE_ENV = process.env.NODE_ENV || 'development';

export { PORT, NODE_ENV };
