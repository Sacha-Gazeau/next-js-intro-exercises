export default async function UserDetail({
  params,
}: {
  params: Promise<{
    id: string;
  }>;
}) {
  const p = await params;
  const response = await fetch(
    `https://jsonplaceholder.typicode.com/users/${p.id}`,
    {
      cache: "no-store",
    }
  );
  const user = await response.json();
  return (
    <div>
      <h1>{user.name}</h1>
      <p>{user.email}</p>
      <p>{user.username}</p>
      <address>
        {user.address.street}, {user.address.city}
      </address>
    </div>
  );
}
