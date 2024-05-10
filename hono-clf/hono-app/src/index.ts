import { Hono } from "hono";

const app = new Hono();

app.get("/", (c) => {
  //body, headers, query parameters, middlewares, connecting to db
  // const body = await c.req.json();
  // console.log(body);
  // console.log(body.header("Authorization"));
  // console.log(body.query("param"));
  return c.text("Hello Hono!");
});

export default app;
