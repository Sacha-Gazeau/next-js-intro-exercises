import UserTable from "./user-table";

export default async function Users() {
  const response = await fetch("https://jsonplaceholder.typicode.com/users", {
    cache: "no-store",
  });
  const users = await response.json();
  return <UserTable users={users} />;
}
