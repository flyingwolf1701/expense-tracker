import { createFileRoute } from '@tanstack/react-router';
import { useQuery } from '@tanstack/react-query';
import { userQueryOptions } from '@/lib/api';

export const Route = createFileRoute('/profile')({
  component: Profile,
})




  

function Profile() { 
  const { isPending, error, data } = useQuery(userQueryOptions);

  if (isPending) return "Loading...";
  if (error) return "Not logged in"


  return (
    <>
      <div className="p-2">Hello from Profile!</div>
      <p>Hello {data.user.given_name} </p>
    </>
  
  )
}

