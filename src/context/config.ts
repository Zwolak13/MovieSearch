const TOKEN = import.meta.env.TOKEN;
export const BASE_URL = import.meta.env.BASE_URL;

export const options = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization: `Bearer ${TOKEN}`
  }
};