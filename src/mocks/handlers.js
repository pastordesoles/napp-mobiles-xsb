import { rest } from "msw";
import { phoneMock } from "./phoneMock";

let apiUrl = process.env.REACT_APP_API_URL;
const apiCart = process.env.REACT_APP_API_URL_CART;

const handlers = [
  rest.get(`${apiUrl}`, (request, response, context) => {
    return response(context.status(200), context.json(phoneMock));
  }),

  rest.post(`${apiCart}`, (request, response, context) => {
    return response(context.status(200), context.json({ count: 1 }));
  }),
];

export default handlers;
