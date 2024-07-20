import axios from 'axios';

const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJNYXBDbGFpbXMiOnsiZXhwIjoxNzIxNDUzMDA4LCJpYXQiOjE3MjE0NTI3MDgsImlzcyI6IkFmZm9yZG1lZCIsImp0aSI6ImJmYjFkNjg1LWMxODQtNDE2Ni05MzU3LTk4YjA4MjBiMTU1MyIsInN1YiI6Im1lc2hhcm1hODkwOUBnbWFpbC5jb20ifSwiY29tcGFueU5hbWUiOiIgZ29NYXJ0IiwiY2xpZW50SUQiOiJiZmIxZDY4NS1jMTg0LTQxNjYtOTM1Ny05OGIwODIwYjE1NTMiLCJjbGllbnRTZWNyZXQiOiJ1TE9GWFRoU0RzdGltSUJrIiwib3duZXJOYW1lIjoiUml0aWsgU2hhcm1hIiwib3duZXJFbWFpbCI6Im1lc2hhcm1hODkwOUBnbWFpbC5jb20iLCJyb2xsTm8iOiIyMTAwOTEwMTAwMTM5In0.H3U-RWzlkPjz_lKhqdsuBBV87RlejjKBddGoU33w-vA';
const top = 10;
const minPrice = 0;
const maxPrice = 1000;

const apiClient = axios.create({
  baseURL: 'http://20.244.56.144/test/companies/AMZ/',
  headers: {
    Authorization: `Bearer ${token}`
  },
});

export const getProducts = (category: string, company: string) => {
  return apiClient.get('/products', {
    params: {
      category,
      company,
      top,
      minPrice,
      maxPrice
    }
  });
};
