import { config } from 'dotenv'

config();

export const CLIENT_ID = process.env.REACT_APP_CLIENT_ID

export const SECRET_KEY = process.env.REACT_APP_SECRET_KEY

export const BASE_URL = process.env.REACT_APP_BASE_URL