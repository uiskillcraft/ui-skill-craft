import { headers } from 'next/headers';

export default async function Home() {
  const headersList = headers();
  const host = headersList.get('host');

  const response = await fetch(`http://${host}/api/clients`, {
    cache: "no-cache",
  });
  const clients = await response.json();
  return (
    <main>
      {clients.map((client: any) => <h1 key={client.id}>{client.email}</h1>)}
    </main>
  );
}
