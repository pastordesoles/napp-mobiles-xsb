import { rest } from "msw";
import { phoneMock } from "./phoneMock";

let apiUrl = process.env.REACT_APP_API_URL;
let apiCart = process.env.REACT_APP_API_URL_CART;

const handlers = [
  rest.get(`${apiUrl}`, (request, response, context) => {
    return response(context.status(200), context.json(phoneMock));
  }),

  rest.get(`${apiUrl}/12345`, (request, response, context) => {
    return response(context.status(200), context.json(phoneMock));
  }),

  rest.post(`${apiCart}`, (request, response, context) => {
    return response(context.status(200), context.json(phoneMock));
  }),
];

export default handlers;
