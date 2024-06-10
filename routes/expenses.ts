import { Hono } from "hono";

type Expenses = {
  id: number,
  title: string,
  amount: number
}

export const expensesRoute = new Hono()
  .get('/', (c) => {
    return c.json({ expenses: [] });
  })
  .post('/', (c) => {
    return c.json({});
  })