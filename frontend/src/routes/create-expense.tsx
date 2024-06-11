import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/create-expense')({
  component: CreateExpenses,
})

export function CreateExpenses() { 
  return <div className="p-2">Create expenses</div>
}