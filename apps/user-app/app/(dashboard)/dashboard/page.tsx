import { getServerSession } from "next-auth";
import { authOptions } from "../../lib/auth";
import { redirect } from "next/navigation";

export default async function () {
  const session = await getServerSession(authOptions);

  if (!session) {
    redirect("/signin");
  }

  return <div>Dashboard Page (or transfer/txn page)</div>;
}
