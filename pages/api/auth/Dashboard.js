import { useSession, signIn } from "next-auth/client";

export default function Dashboard() {
  const [session, loading] = useSession();

  if (loading) return <p>Loading...</p>;

  if (!session) {
    return (
      <p>
        Access Denied. Please <button onClick={() => signIn()}>Sign In</button>
      </p>
    );
  }

  return <p>Welcome to the dashboard, {session.user.email}</p>;
}
