import { Hono } from "hono";
import { z } from 'zod';
import { zValidator } from '@hono/zod-validator'

type Expense = {
  id: number,
  title: string,
  amount: number
}

const createPostSchema = z.object({
  title: z.string().min(3).max(100),
  amount: z.number().int().positive()
})

const fakeExpenses: Expense[] = [
  {id: 1, title: 'Groceries', amount: 50},
  {id: 2, title: 'Utilities', amount: 200},
  {id: 3, title: 'Rent', amount: 2000}
]

export const expensesRoute = new Hono()
  .get('/', async (c) => {
    return c.json({ expenses: fakeExpenses });
  })
  .post('/', zValidator("json", createPostSchema), async (c) => {
    const data = await c.req.valid('json'); 
    const expense = createPostSchema.parse(data);
    fakeExpenses.push({...expense, id: fakeExpenses.length + 1 })
    console.log({expense})
    return c.json(expense);
  })