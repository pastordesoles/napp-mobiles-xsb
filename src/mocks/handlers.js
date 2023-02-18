import { rest } from "msw";
import { phoneMock } from "./phoneMock";

let apiUrl = process.env.REACT_APP_API_URL;

const handlers = [
  rest.get(`${apiUrl}`, (request, response, context) => {
    return response(context.status(200), context.json(phoneMock));
  }),
];

export default handlers;
