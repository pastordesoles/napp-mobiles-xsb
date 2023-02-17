import { rest } from "msw";
import { phoneDetailMock, phoneMock } from "./phoneMock";

let apiUrl = process.env.REACT_APP_API_URL;

const handlers = [
  rest.get(`${apiUrl}`, (request, response, context) => {
    return response(context.status(200), context.json(phoneMock));
  }),

  rest.get(`${apiUrl}/1234`, (request, response, context) => {
    return response(context.status(200), context.json(phoneDetailMock));
  }),
];

export default handlers;
