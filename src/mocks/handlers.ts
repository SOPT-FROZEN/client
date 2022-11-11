import { rest } from "msw";

export const handlers = [
  // Handles a POST /login request
  rest.post(`${process.env.REACT_APP_IP}/review`, (req, res, ctx) => {
    // Persist user's authentication in the session
    sessionStorage.setItem("is-authenticated", "true");
    return res(
      // Respond with a 200 status code
      ctx.status(200),
    );
  }),
  // Handles a GET /user request
  rest.get(`${process.env.REACT_APP_IP}/review`, (req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json({
        data: "something",
      }),
    );
  }),
];
