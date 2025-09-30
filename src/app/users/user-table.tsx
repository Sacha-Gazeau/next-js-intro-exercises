"use client";
export default function UserTable({
  users,
}: {
  users: { id: number; name: string; email: string }[];
}) {
  return (
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Email</th>
        </tr>
      </thead>
      <tbody>
        {users.map((user) => (
          <tr key={user.id}>
            <td><a href={`/users/${user.id}`}>{user.name}</a></td>
            <td><a href={`/users/${user.id}`}>{user.email}</a></td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
