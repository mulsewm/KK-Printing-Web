import { useSession, signOut } from 'next-auth/react';

export default function Dashboard() {
  const { data: session, status } = useSession();

  if (status === 'loading') {
    return <div>Loading...</div>;
  }

  if (!session) {
    return <div>You are not authenticated</div>;
  }

  return (
    <div>
      <h1>Dashboard</h1>
      <p>Welcome, {session.user.email}</p>
      <button onClick={() => signOut()}>Sign Out</button>
    </div>
  );
}
