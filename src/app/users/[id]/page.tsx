import UserDetail from "./detail-user";
export default async function UsersDetail({
  params,
}: {
  params: Promise<{
    id: string;
  }>;
}) {
  return <UserDetail params={Promise.resolve({ id: (await params).id })} />;
}
