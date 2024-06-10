import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { useQuery } from '@tanstack/react-query';

import { api } from './lib/api';

async function getTotalSpent() {
  const res = await api.expenses['total-spent'].$get();
  if (!res.ok) {
    throw new Error('Server error')
  }
  const data = await res.json();
  return data;
}

function App() {
  const { isPending, error, data } = useQuery({ queryKey: ['get-total-spent'], queryFn: getTotalSpent })

  // if (isPending) return 'Loading...';
  if (error) return 'An error has occurred:' + error.message;
  // const [totalSpent, setTotalSpent] = useState(0)

  // useEffect(() => {
  //   async function fetchTotal() {
  //     const res = await api.expenses['total-spent'].$get();
  //     const data = await res.json();
  //     setTotalSpent(data.total);
  //   }
  //   fetchTotal();
  // }, [])

  return (
    <>
      <Card className='w-[350px] m-auto'>
        <CardHeader>
          <CardTitle>Total Spent</CardTitle>
          <CardDescription>The total amount you've spent</CardDescription>
        </CardHeader>
        <CardContent>
          {isPending ? 'Loading...' : data.total}
        </CardContent>
      </Card>

    </>
  )
}

export default App
